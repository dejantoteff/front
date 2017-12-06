import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { USER_INIT } from '../../constants'

export const initEpic = (
  action$: ActionsObservable<UserInitAction>,
  store,
  { getRequest },
): Observable<any> =>
  action$
    .ofType(USER_INIT)
    .concatMap(action => {
      console.log(1);
      
      return new Observable(observer => {
        observer.complete()
      })
    })
