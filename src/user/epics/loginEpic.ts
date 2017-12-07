import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { USER_LOGIN } from '../../constants'

export const loginEpic = (
  action$: ActionsObservable<UserLoginAction>,
  store,
): Observable<any> =>
  action$
    .ofType(USER_LOGIN)
    .concatMap(action => {

      return new Observable(observer => {
        observer.complete()
      })
    })
