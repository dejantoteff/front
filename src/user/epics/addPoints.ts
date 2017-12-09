import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { USER_INIT } from '../../constants'

export const addPoints = (
  action$: ActionsObservable<UserInitAction>,
  store,
): Observable<any> =>
  action$
    .ofType(USER_INIT)
    .concatMap(action => {

      return new Observable(observer => {
        observer.complete()
      })
    })
