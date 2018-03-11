import {
  NEXT_TICK,
  SHARED_SPEAK,
  SHORT_DELAY,
  WRITE_SENTENCE_NEXT,
  WRITE_SENTENCE_READY,
  WRITE_SENTENCE_SET_NEXT,
} from '../../constants'

import { delay } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { maskSentence, OutputMaskSentence } from 'string-fn'
import { getNextIndex } from '../../_helpers/getNextIndex'
import { getCommons } from '../../_modules/selectors'

export const nextEpic = (
  action$: ActionsObservable<WriteSentenceNextAction>,
  store: ObservableStore,
): Observable<any> =>

  action$.ofType(WRITE_SENTENCE_NEXT)
    .concatMap(action => {
      return new Observable(observer => {

        const {
          currentIndex: currentIndexRaw,
          db,
          ready,
        } = store.getState().writeSentenceStore

        const { textToSpeechFlag } = getCommons(store)

        const currentIndex = getNextIndex({
          index: currentIndexRaw,
          length: db.length,
        })

        const currentInstance = db[currentIndex]

        const maskSentenceResult: OutputMaskSentence = maskSentence({
          charLimit: 4,
          sentence: currentInstance.fromPart,
          words: [],
        })

        const question = maskSentenceResult.visible
          .map((visibleInstance, i) => ({
            hidden: maskSentenceResult.hidden[i],
            visible: visibleInstance,
          }))

        const payload = {
          currentIndex,
          currentInstance,
          question,
        }

        observer.next({ type: WRITE_SENTENCE_SET_NEXT, payload })

        const ms = ready ?
          NEXT_TICK :
          SHORT_DELAY

        delay(ms).then(() => {
          observer.next({ type: WRITE_SENTENCE_READY })

          if (textToSpeechFlag) {
            observer.next({ type: SHARED_SPEAK, payload: 'toPart' })
          }

          observer.complete()
        })
      })
    })
