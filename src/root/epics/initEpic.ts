import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { INIT, POUCH_READY, POUCH_SYNC_CHANGE, POUCH_SYNC_ERROR } from '../../constants'

import {
  compose,
  filter,
  pluck,
  length,
  greater,
} from 'rambdax'

const REQUIRED_LIMIT = 200

const checkDB = async dbInstance => {
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
    .take(1)
    .do(x => { console.log('initEpicLog', x) })
    .concatMap(action => {
      return new Observable(observer => {
        const PouchDB: Pouch = getPouchDB()

        const { dbURL, dbName, dbLocal, dbCloud } = initPouchDB(PouchDB)

        // Need to have interval that check if the db is sync
        // check include read all docs and get the length which should be above REQUIRED_LIMIT
        // Only then POUCH_READY is released
        observer.next({ type: POUCH_READY, payload: { dbLocal, dbCloud } })

        const syncOptions = { live: true, retry: true }
        const sync = PouchDB.sync(dbName, dbURL, syncOptions)

        sync.on('change', change => {
          console.log(change, 'change')

          if (change.direction === 'pull') {
            observer.next({ type: POUCH_SYNC_CHANGE })
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
