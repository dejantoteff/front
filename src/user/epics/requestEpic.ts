import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { USER_REQUEST_REGISTER, USER_REQUEST_LOGIN } from '../../constants'

export const requestEpic = (
  action$: ActionsObservable<UserSubmitAction>,
  store,
  { getRequest },
): Observable<any> =>

  action$
    .ofType(USER_REQUEST_REGISTER, USER_REQUEST_LOGIN)
    .switchMap(action => {
      return new Observable(observer => {
        
        observer.complete()
      })
    })
