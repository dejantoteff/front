import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { LONG_DELAY, SHARED_ADD_POINTS } from '../../constants'

export const sharedAddPointsEpic = (
  action$: ActionsObservable<SharedAddPointsAction>,
  store: ObservableStore,
): Observable<any> => {
  const points$ = action$.ofType(SHARED_ADD_POINTS)

  return points$
    .switchMap(action => {

      return new Observable(observer => {
        const { userDB } = store.getState().userStore

        if (userDB === undefined) {

          return observer.complete()
        }

        userDB.get('data').then((doc: any) => {
          const points = doc.points + Number(action.payload)
          const updatedDoc = { ...doc, points }

          userDB.put(updatedDoc).then(() => {
            observer.complete()
          })
        })
      })
    })
    .debounceTime(LONG_DELAY)
}
