import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { SHARED_ADD_POINTS, UPDATE_POINTS_DELAY } from '../../constants'

export const sharedAddPointsEpic = (
  action$: ActionsObservable<SharedAddPointsAction>,
  store: ObservableStore,
): Observable<any> => {
  const points$ = action$.ofType(SHARED_ADD_POINTS)

  return points$
    .switchMap(action => {

      return new Observable(observer => {
        const { userDBCloud, points } = store.getState().store

        if (userDBCloud === undefined) {

          return observer.complete()
        }

        userDBCloud.get('data')
          .then((doc: any) => {
            const updatedDoc = { ...doc, points }

            userDBCloud.put(updatedDoc).then(() => {
              console.log('points updated')
              observer.complete()
            })
          })
          .catch(e => {
            console.error(e)
            observer.complete()
          })
      })
    })
    .debounceTime(UPDATE_POINTS_DELAY)
}
