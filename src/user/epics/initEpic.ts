import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { USER_INIT, USER } from '../../constants'
import { sharedInit } from '../../common'

export const initEpic = (
  action$: ActionsObservable<UserInitAction>,
  store: ObservableStore,
): Observable<any> =>
  action$
    .ofType(USER_INIT)
    .switchMap(action => {

      return new Observable(observer => {
        observer.next(sharedInit(USER))
        observer.complete()
      })
    })
