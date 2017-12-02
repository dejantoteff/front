import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { CHOOSE_WORD_STEP } from '../../constants'

export const stepEpic = (
  action$: ActionsObservable<ChooseWordStepAction>,
  store,
): Observable<any> =>
  action$.ofType(CHOOSE_WORD_STEP)
    .concatMap(action => {
      return new Observable(observer => {
        console.log(7);

        observer.complete()
      })
    })
