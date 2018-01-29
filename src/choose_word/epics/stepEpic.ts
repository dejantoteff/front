import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { getCommons } from '../../common'
import { CHOOSE_WORD_STEP, SHARED_SPEAK } from '../../constants'
import { setIndex, stop } from '../actions'

/**
 * It increments the local counter so
 * we can proceed to the next set of choices.
 *
 * @param {ActionsObservable<ChooseWordStepAction>} action$
 * @param {ObservableStore} store
 * @returns {Observable<any>}
 */
export const stepEpic = (
  action$: ActionsObservable<ChooseWordStepAction>,
  store: ObservableStore,
): Observable<any> =>
  action$.ofType(CHOOSE_WORD_STEP)
    .switchMap(action => {
      return new Observable(observer => {

        const {
          index,
          correctAnswer,
        } = store.getState().chooseWordStore

        if (index + 1 === correctAnswer.length) {
          const { textToSpeechFlag } = getCommons(store)

          observer.next(stop())

          if (textToSpeechFlag) {
            observer.next({ type: SHARED_SPEAK, payload: 'fromPart' })
          }

        } else {

          observer.next(setIndex())
        }

        observer.complete()
      })
    })
