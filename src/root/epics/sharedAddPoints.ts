import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { SHARED_ADD_POINTS } from '../../constants'

export const sharedAddPointsEpic = (
  action$: ActionsObservable<SharedAddPointsAction>,
  store,
  { getRequest },
): Observable<any> =>

  action$
    .ofType(SHARED_ADD_POINTS)
    .switchMap(action => {

      return new Observable(observer => {
        observer.complete()
      })
    })
