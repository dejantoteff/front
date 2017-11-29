import { ActionsObservable, combineEpics, Epic } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { INIT } from '../../constants'

export const initEpic = (
  action$: ActionsObservable<Init>,
  store,
  { getRequest },
): Observable<any> =>
  action$
    .ofType(INIT)
    .concatMap(action => {
      return new Observable(observer => {
        observer.complete()
      })
    })
