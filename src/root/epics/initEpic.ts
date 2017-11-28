import * as PouchDBLib from 'pouchdb'
import { delay } from 'rambdax'
import { ActionsObservable, combineEpics, Epic } from 'redux-observable'
import { Observable as ObservableType } from 'rxjs'
import { Observable } from 'rxjs/Observable'
import { DATA_READY, DB_DEV_URL, INIT } from '../../constants'

const PouchDB: Pouch = (PouchDBLib as any).default

PouchDB.plugin(require('pouchdb-authentication'))

const do$ = Observable.fromPromise(delay(2222))

export const initEpic = (
  action$: ActionsObservable<Init>,
  store,
  { getRequest },
): ObservableType<any> =>
  action$
    .ofType(INIT)
    // .throttleTime(1000)
    .concatMap(action => {
      return new Observable(observer => {
        do$.subscribe(response => {
          console.log(response, 818)

          observer.next({ type: DATA_READY, payload: ' response' })
          observer.complete()
        })

      })
    })
