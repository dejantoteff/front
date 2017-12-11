import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { CHOOSE_WORD_STEP, SHARED_SPEAK } from '../../constants'
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

          if (store.getState().store.textToSpeechFlag) {

            observer.next({ type: SHARED_SPEAK, payload: 'DE' })

          }

        } else {

          observer.next(setIndex())
        }

        observer.complete()
      })
    })
