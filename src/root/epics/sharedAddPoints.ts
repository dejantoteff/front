import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { SHARED_ADD_POINTS, DELAY } from '../../constants'

export const sharedAddPointsEpic = (
  action$: ActionsObservable<SharedAddPointsAction>,
  store,
  { getRequest },
): Observable<any> =>

  action$
    .ofType(SHARED_ADD_POINTS)
    .debounceTime(DELAY)
    .switchMap(action => {

      return new Observable(observer => {
        const {userDB, points} = store.getState().userStore.userDB

        userDB.get('data').then((doc:any)=>{

        })

        observer.complete()
      })
    })
