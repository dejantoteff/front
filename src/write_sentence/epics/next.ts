import {
  NEXT_TICK,
  SHARED_SPEAK,
  SHORT_DELAY,
  WRITE_SENTENCE_NEXT,
  WRITE_SENTENCE_READY,
} from '../../constants'

import { getterAnt } from 'client-helpers'
import { delay } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { maskSentence, OutputMaskSentence } from 'string-fn'

import { getNextIndex } from '../../_helpers/getNextIndex'
import { getCommons } from '../../_modules/selectors'
import { setNext } from '../actions'

const actionSpeech = { type: SHARED_SPEAK, payload: 'toPart' }
const urlInputsDefault = {
  easy: false,
  easier: false,
  easiest: false,
  random: false,
}

export const nextEpic = (
  action$: ActionsObservable<WriteSentenceNextAction>,
  store: ObservableStore,
): Observable<any> =>

  action$.ofType(WRITE_SENTENCE_NEXT)
    .concatMap(() => {
      return new Observable(observer => {

        const {
          currentIndex: currentIndexRaw,
          db,
          ready,
        } = store.getState().writeSentenceStore
        const {
          easy,
          easier,
          easiest,
          random,
        } = getterAnt(urlInputsDefault)
        const { textToSpeechFlag } = getCommons(store)

        const currentIndex = getNextIndex({
          index: currentIndexRaw,
          length: db.length,
        })

        const currentInstance = db[currentIndex]
        const maskSentenceResult: OutputMaskSentence = maskSentence({
          sentence: currentInstance.fromPart,
          easyMode: easy,
          easierMode: easier,
          randomMode: random,
          charLimit: easiest ? 1 : 4,
        })

        const question = maskSentenceResult.visible
          .map((visibleInstance, i) => ({
            hidden: maskSentenceResult.hidden[i],
            visible: visibleInstance,
          }))

        const okCorrect = Array(question.length).fill(null)

        const payload = {
          currentIndex,
          currentInstance,
          okCorrect,
          question,
        }
        observer.next(setNext(payload))

        const ms = ready ?
          NEXT_TICK :
          SHORT_DELAY

        delay(ms)
          .then(() => {
            observer.next({ type: WRITE_SENTENCE_READY })

            if (textToSpeechFlag) {
              observer.next(actionSpeech)
            }

            observer.complete()
          })
      })
    })
