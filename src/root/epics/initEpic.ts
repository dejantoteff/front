import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { INIT, POUCH_READY, POUCH_SYNC_CHANGE, POUCH_SYNC_ERROR } from '../../constants'

import {
  compose,
  filter,
  greater,
  length,
  pluck,
} from 'rambdax'

const REQUIRED_LIMIT = 300

const checkDB = async (dbInstance): Promise<boolean> => {
  const allDocs = await dbInstance.allDocs({ include_docs: true })

  return compose(
    greater(REQUIRED_LIMIT),
    length,
    filter((x: DBInstance) => typeof x.imageSrc === 'string'),
    pluck('doc'),
  )(allDocs.rows)
}

export const initEpic = (
  action$: ActionsObservable<InitAction>,
  store,
  {
    getPouchDB,
    initPouchDB,
  },
): Observable<any> =>
  action$
    .ofType(INIT)
    // assure the epic run once per session
    .take(1)
    // Just a reminder that do is useful for logging
    .do(x => { console.log('initEpicLog', x) })
    .concatMap(action => {
      return new Observable(observer => {
        const PouchDB: Pouch = getPouchDB()

        const { dbURL, dbName, dbLocal, dbCloud } = initPouchDB(PouchDB)

        const syncOptions = { live: true, retry: true }
        const sync = PouchDB.sync(dbName, dbURL, syncOptions)

        let flag = false

        const checkAndDispatch = () => {
          if (!flag) {
            console.log('willCheck')

            checkDB(dbLocal).then(dbReady => {
              console.log(dbReady)

              if (dbReady) {
                console.log('check is true')
                flag = true
                observer.next({ type: POUCH_READY, payload: { dbLocal, dbCloud } })
              }
            })
          } else {
            console.log('check already irrelevant')
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
          observer.next({ type: POUCH_SYNC_ERROR })

          observer.complete()
        })

      })
    })
