import { ActionsObservable, combineEpics, Epic } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { DATA_READY, INIT } from '../../constants'

const a = Observable.from([1, 2, 3])

export const fooEpic = (
  action$: ActionsObservable<InitAction>,
  store,
  { getRequest },
): Observable<any> =>
  action$
    .ofType(INIT)
    .concatMap(action => {
      return new Observable(observer => {
        a.subscribe(response => {
          observer.next({ type: 'fpp', payload: response })
          observer.complete()
        })
      })
    })
