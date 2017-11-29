import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { INIT } from '../../constants'

export const initEpic = (
  action$: ActionsObservable<InitAction>,
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
