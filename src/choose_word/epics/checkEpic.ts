import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { failNotify, sharedAddPoints, successNotify } from '../../common'
import { CHOOSE_WORD_CHECK } from '../../constants'
import { step } from '../actions'

const getIndexFromAction = (action: Action): number => {
  return action.payload === 'UP' ?
    0 :
    action.payload === 'DOWN' ?
      2 :
      1
}

export const checkEpic = (
  action$: ActionsObservable<ChooseWordCheckAction>,
  store,
): Observable<any> =>
  action$.ofType(CHOOSE_WORD_CHECK)
    .concatMap(action => {
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
          observer.next(successNotify())

        } else {

          observer.next(failNotify())

        }
        observer.next(step())
        observer.complete()
      })
    })
