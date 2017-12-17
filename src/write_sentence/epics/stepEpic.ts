import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { getCommons } from '../../common'
import { SHARED_SPEAK, WRITE_SENTENCE_STEP } from '../../constants'
import { setIndex, stop } from '../actions'

export const stepEpic = (
  action$: ActionsObservable<WriteSentenceStepAction>,
  store: ObservableStore,
): Observable<any> =>
  action$.ofType(WRITE_SENTENCE_STEP)
    .switchMap(action => {

      return new Observable(observer => {

        const {
          index,
          question,
        } = store.getState().writeSentenceStore
        const { textToSpeechFlag } = getCommons(store)

        if (index + 1 === question.length) {

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
