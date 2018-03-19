import {
  LEARNING_MEME_NEXT,
  LEARNING_MEME_NEXT_READY,
  SHARED_SPEAK,
} from '../../constants'

import { map } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { maskSentence, maskWords, OutputMaskSentence } from 'string-fn'
import { getNextIndex } from '../../_helpers/getNextIndex'
import { getConvertedImage } from '../../_modules/getConvertedImage'
import { getCommons } from '../../_modules/selectors'
import { setConvertedImage } from '../../_modules/setConvertedImage'

const CHAR_LIMIT = 4

export const nextEpic = (
  action$: ActionsObservable<LearningMemeNextAction>,
  store: ObservableStore,
): Observable<any> =>

  action$.ofType(LEARNING_MEME_NEXT)
    .switchMap(action =>

      new Observable(observer => {
        const { textToSpeechFlag } = getCommons(store)
        const {
          currentIndex,
          db,
        } = store.getState().learningMemeStore

        const newCurrentIndex = getNextIndex({
          index: currentIndex,
          length: db.length,
        })
        const currentInstance = db[newCurrentIndex]

        /**
         * turn die Frage to d__ F___e
         */
        const question: string = maskWords({
          charLimit: CHAR_LIMIT,
          words: currentInstance.fromWord,
        })

        /**
         * get visible and hidden array with words
         * where question words are masked
         */
        const sentenceRaw: OutputMaskSentence = maskSentence({
          charLimit: CHAR_LIMIT,
          sentence: currentInstance.fromPart,
          words: currentInstance.fromWord.split(' '),
        })

        /**
         * turn visible and hidden array of words to two whole sentences
         */
        const sentence = map<any, string>(
          (x: string[]) => x.join(' ').trim(),
          sentenceRaw,
        )

        getConvertedImage(currentInstance).then(convertedImage => {
          const payload = {
            convertedImage,
            currentIndex: newCurrentIndex,
            currentInstance,
            question,
            sentence,
          }
          observer.next({ type: LEARNING_MEME_NEXT_READY, payload })

          if (textToSpeechFlag) {
            observer.next({ type: SHARED_SPEAK, payload: 'toPart' })
          }

          setConvertedImage(currentInstance)

          observer.complete()
        })

      }),
  )
