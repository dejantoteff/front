import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { sharedAddPoints } from '../../root/actions'
import { CHOOSE_WORD_CHECK } from '../../constants'
import { step } from '../actions'

/**
 * It returns the index of the selected word.
 *
 * @param {Action} action
 * @returns {number}
 */
const getIndexFromAction = (action: Action): number => {
  /* tslint:disable:no-magic-numbers */
  return action.payload === 'UP' ?
    0 :
    action.payload === 'DOWN' ?
      2 :
      1
  /* tslint:enable:no-magic-numbers */
}

/**
 * It is called upon each user selection.
 * It checks if the selection is correct or wrong.
 *
 * @param {ActionsObservable<ChooseWordCheckAction>} action$
 * @param {ObservableStore} store
 * @returns {Observable<any>}
 */
export const checkEpic = (
  action$: ActionsObservable<ChooseWordCheckAction>,
  store: ObservableStore,
): Observable<any> =>
  action$.ofType(CHOOSE_WORD_CHECK)
    .switchMap(action => {
      return new Observable(observer => {
        const answerIndex = getIndexFromAction(action)

        const {
          correctAnswer,
          index,
          question,
        } = store.getState().chooseWordStore

        const correct = correctAnswer[index]
        const answer = question[index][answerIndex]

        if (correct === answer) {
          observer.next(sharedAddPoints(1))
        }

        observer.next(step())
        observer.complete()
      })
    })
