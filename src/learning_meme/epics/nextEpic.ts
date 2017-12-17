import { delay, map } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { maskSentence, maskWords, OutputMaskSentence } from 'string-fn'
import { getCommons, getNextIndex } from '../../common'
import { NEXT_TICK, SHARED_SPEAK } from '../../constants'
import {
  LEARNING_MEME_NEXT,
  LEARNING_MEME_READY,
  LEARNING_MEME_SET_NEXT,
  SHORT_DELAY,
} from '../../constants'

const CHAR_LIMIT = 4

export const nextEpic = (
  action$: ActionsObservable<LearningMemeNextAction>,
  store: ObservableStore,
): Observable<any> =>

  action$.ofType(LEARNING_MEME_NEXT)
    .switchMap(action => {
      return new Observable(observer => {
        const { textToSpeechFlag } = getCommons(store)

        const {
          currentIndex: currentIndexRaw,
          db,
          ready,
        } = store.getState().learningMemeStore

        const currentIndex = getNextIndex({
          index: currentIndexRaw,
          length: db.length,
        })

        const currentInstance = db[currentIndex]

        // turn die Frage to d__ F___e
        const question: string = maskWords({
          charLimit: CHAR_LIMIT,
          words: currentInstance.fromWord,
        })

        // get visible and hidden array with words where question words are masked
        const sentenceRaw: OutputMaskSentence = maskSentence({
          charLimit: CHAR_LIMIT,
          sentence: currentInstance.fromPart,
          words: currentInstance.fromWord.split(' '),
        })

        // turn visible and hidden array of words to two whole sentences
        const sentence: { visible: string, hidden: string } = map(
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

            observer.next({ type: SHARED_SPEAK, payload: 'toPart' })

          }

          observer.complete()
        })

      })
    })
