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

type Delay = (ms: number) => Promise<string>

const doa: Delay = (x) => new Promise(resolve =>{
  console.log('as');
  
  resolve('1')
})
const getDatax$ = Observable.fromPromise(doa(1))
// const getDatax$ = Observable.fromPromise(delay(1000))

export const initEpic = (
  action$: ActionsObservable<Init>,
  store,
  { getRequest },
): ObservableType<any> =>
  action$
    .ofType(INIT)
    .concatMap(action => {
      console.log(5621)
      return new Observable(observer => {
        console.log(5)

        // getRequest(requestInput).subscribe(({ response }) => {
        // getData$.subscribe(({ response }) => {
        getDatax$.subscribe(response => {
          console.log('initEpi66c88')

          observer.next({ type: DATA_READY, payload: response })
          observer.complete()
        })
      })
    })
