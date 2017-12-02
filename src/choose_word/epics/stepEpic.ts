import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { getNextIndex } from '../../common'
import { CHOOSE_WORD_STEP } from '../../constants'
import { setIndex, stop } from '../actions'

export const stepEpic = (
  action$: ActionsObservable<ChooseWordStepAction>,
  store,
): Observable<any> =>
  action$.ofType(CHOOSE_WORD_STEP)
    .concatMap(action => {
      return new Observable(observer => {
        const {
          index,
          correctAnswer,
        } = store.getState().chooseWordStore

        if (index + 1 === correctAnswer.length) {

          observer.next(stop())
        } else {

          observer.next(setIndex())
        }

        observer.complete()
      })
    })
