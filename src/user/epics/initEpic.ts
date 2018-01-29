import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { sharedInit } from '../../common'
import { USER, USER_INIT } from '../../constants'

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
