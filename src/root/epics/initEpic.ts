import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { INIT, POUCH_READY, POUCH_SYNC_CHANGE } from '../../constants'

import {
  compose,
  filter,
  greater,
  length,
  pluck,
} from 'rambdax'

const REQUIRED_LIMIT = 90

const checkDB = async (dbInstance): Promise<boolean> => {
  const allDocs = await dbInstance.allDocs({ include_docs: true })
  const plucked = pluck<DBInstance>('doc', allDocs.rows)
  const filtered = filter((x: DBInstance) => typeof x.imageSrc === 'string', plucked)

  return filtered.length > REQUIRED_LIMIT
}

export const initEpic = (
  action$: ActionsObservable<InitAction>,
  store: ObservableStore,
  {
    getPouchDB,
    initPouchDB,
  },
): Observable<any> =>
  action$
    .ofType(INIT)
    .switchMap(action => {
      return new Observable(observer => {
        const PouchDB: Pouch = getPouchDB()

        const { dbURL, dbName, dbLocal, dbCloud } = initPouchDB(PouchDB)

        const syncOptions = { live: true, retry: true }
        const sync = PouchDB.sync(dbName, dbURL, syncOptions)

        let flag = false

        const checkAndDispatch = () => {
          if (!flag) {

            checkDB(dbLocal).then(dbReady => {

              if (dbReady) {
                flag = true
                observer.next({ type: POUCH_READY, payload: { dbLocal, dbCloud } })
              }
            })
          }
        }

        checkAndDispatch()

        sync.on('change', change => {
          console.log(change, flag, 'change')

          if (change.direction === 'pull') {
            if (flag) {
              observer.next({ type: POUCH_SYNC_CHANGE })
            } else {
              checkAndDispatch()
            }
          }
        })

        sync.on('active', () => {
          console.log('active sync')
        })

        sync.on('denied', err => {
          console.log(err, 'denied sync')
        })

        sync.on('complete', info => {
          console.log(info, 'complete sync')

          observer.complete()
        })

        sync.on('error', err => {
          console.log(err, 'error sync')
          observer.complete()
        })

      })
    })
