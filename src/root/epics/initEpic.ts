import { delay } from 'rambdax'
import { ActionsObservable, combineEpics, Epic } from 'redux-observable'
import { Observable as ObservableType } from 'rxjs'
import { Observable } from 'rxjs/Observable'
import { DATA_READY, DB_DEV_URL, INIT } from '../../constants'

export const initEpic = (
  action$: ActionsObservable<Init>,
  store,
  {
    getRequest,
    getPouchDB,
    initPouchDB,
  },
): ObservableType<any> =>
  action$
    .ofType(INIT)
    .concatMap(action => {
      return new Observable(observer => {
        const PouchDB: Pouch = getPouchDB()
        const { dbURL, dbName, dbLocal, dbCloud } = initPouchDB(PouchDB)

        observer.next({ type: 'POUCH_READY', payload: { dbLocal, dbCloud } })

        const syncOptions = { live: true, retry: true }

        PouchDB.sync(dbName, dbURL, syncOptions)
          .on('change', change => {
            console.log(change, 'change')
            if (change.direction === 'pull') {
              console.log('PULL')
              observer.next({ type: 'POUCH_SYNC_CHANGE' })
            }
          })
          .on('active', () => {
            console.log('active sync')
          })
          .on('denied', err => {
            console.log(err, 'denied sync')
          })
          .on('complete', info => {
            console.log(info, 'complete sync')
          })
          .on('error', err => {
            console.log(err, 'error sync')
            observer.complete()
          })

      })
    })
