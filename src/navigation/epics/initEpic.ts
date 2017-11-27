import { ActionsObservable, combineEpics, Epic } from 'redux-observable'
import { Observable as ObservableType } from 'rxjs'
import { Observable } from 'rxjs/Observable'
import { DATA_READY, DB_DEV_URL, INIT } from '../../constants'

const requestInput = {
  crossDomain: true,
  responseType: 'json',
  url: DB_DEV_URL,
}

const getData$ = Observable.ajax(requestInput)

export const initEpic = (
  action$: ActionsObservable<Init>,
  store,
  { getRequest },
): ObservableType<any> =>
  action$
    .ofType(INIT)
    .concatMap(action => {
      return new Observable(observer => {
        getRequest(requestInput).subscribe(({ response }) => {
          console.log('initEpic')

          // observer.next({ type: DATA_READY, payload: response })
          observer.complete()
        })
      })
    })
