import { ActionsObservable, combineEpics, Epic } from 'redux-observable'
import { Observable as ObservableType } from 'rxjs'
import { Observable } from 'rxjs/Observable'
import { DATA_READY, DB_DEV_URL, INIT } from '../../constants'

const requestInput = {
  crossDomain: true,
  responseType: 'json',
  url: DB_DEV_URL,
}
import { delay } from 'rambdax'

const getData$ = Observable.ajax(requestInput)

const work: Delay = async (x) => {
  console.log('work');
  await delay(3000)
  return '1'
}

const getDatax$ = Observable.fromPromise(work(1))

export const initEpic = (
  action$: ActionsObservable<Init>,
  store,
  { getRequest },
): ObservableType<any> =>
  action$
    .ofType(INIT)
    .concatMap(action => {
      return new Observable(observer => {

        getDatax$.subscribe(response => {
          console.log('SUCCESS',response)

          observer.next({ type: DATA_READY, payload: response })
          observer.complete()
        })
      })
    })
