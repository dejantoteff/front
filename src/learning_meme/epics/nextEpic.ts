import { delay, map } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { maskSentence, maskWords, OutputMaskSentence } from 'string-fn'
import { getNextIndex } from '../../common'
import { NEXT_TICK, SHARED_SPEAK } from '../../constants'
import {
  LEARNING_MEME_NEXT,
  LEARNING_MEME_READY,
  LEARNING_MEME_SET_NEXT,
  SHORT_DELAY,
} from '../../constants'

export const nextEpic = (
  action$: ActionsObservable<LearningMemeNextAction>,
  store,
): Observable<any> =>

  action$.ofType(LEARNING_MEME_NEXT)
    .concatMap(action => {
      return new Observable(observer => {

        const {
          currentIndex: currentIndexRaw,
          db,
          ready,
        } = store.getState().learningMemeStore

        const { textToSpeechFlag } = store.getState().store as Store

        const currentIndex = getNextIndex({
          index: currentIndexRaw,
          length: db.length,
        })

        const currentInstance = db[currentIndex]

        const question: string = maskWords({
          charLimit: 4,
          words: currentInstance.deWord,
        })

        const sentenceRaw: OutputMaskSentence = maskSentence({
          charLimit: 4,
          sentence: currentInstance.dePart,
          words: currentInstance.deWord.split(' '),
        })

        const sentence = map(
          x => x.join(' ').trim(),
          sentenceRaw,
        )

        const payload = {
          currentIndex,
          currentInstance,
          question,
          sentence,
        }

        // Ready to set the state
        observer.next({ type: LEARNING_MEME_SET_NEXT, payload })

        // On the very first step we need to wait for
        // setting of state and rendering to happen
        // then we emit actions

        // if this is not the very first step
        // then we right away emit actions
        const ms = ready ?
          NEXT_TICK :
          SHORT_DELAY

        delay(ms).then(() => {
          observer.next({ type: LEARNING_MEME_READY })

          if (textToSpeechFlag) {

            observer.next({ type: SHARED_SPEAK, payload: 'EN' })

          }

          observer.complete()
        })
      })
    })
