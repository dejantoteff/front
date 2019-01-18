import {
  LEARNING_MEME_NEXT,
  sharedSpeak,
  urlInputsDefault,
} from '../../constants'

import { map } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { maskSentence, OutputMaskSentence } from 'string-fn'
import { getNextIndex } from '../../_helpers/getNextIndex'
import { getConvertedImage } from '../../_modules/getConvertedImage'
import { getCommons } from '../../_modules/selectors'
import { nextReady } from '../actions'
import { setConvertedImage } from '../../_modules/setConvertedImage'
import { getterAnt } from 'client-helpers';
import { sharedNextReadyBee } from '../../bees/sharedNextReady';

export const nextEpic = (
  action$: ActionsObservable<LearningMemeNextAction>,
  store: ObservableStore,
): Observable<any> =>

  action$.ofType(LEARNING_MEME_NEXT)
    .switchMap(() =>

      new Observable(observer => {
        const { textToSpeechFlag } = getCommons(store)
        const {
          currentIndex,
          db,
        } = store.getState().learningMemeStore
        
        const {
          easy,
          easier,
          easiest,
          random,
        } = getterAnt(urlInputsDefault)
        const charLimit = easiest ? 1 : 4
        
        const newCurrentIndex = getNextIndex({
          index: currentIndex,
          length: db.length,
        })
        const currentInstance = db[newCurrentIndex]

        // turn die Frage to d__ F___e
        ///////////////////////////
        const maskedQuestion: OutputMaskSentence = maskSentence({
          charLimit,
          easyMode: easy,
          easierMode: easier,
          randomMode: random,
          sentence: currentInstance.fromWord,
        })

        // Otherwise words will be too close to one another
        ///////////////////////////
        const question = [...maskedQuestion.visible].join(' ')
       
        // get visible and hidden array with words
        // where question words are masked
        ///////////////////////////
        const sentenceRaw: OutputMaskSentence = maskSentence({
          charLimit,
          easyMode: easy,
          easierMode: easier,
          sentence: currentInstance.fromPart,
          words: currentInstance.fromWord.split(' '),
        })

        // turn visible and hidden array of words to two whole sentences
        // because map works with objects as well
        ///////////////////////////
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

          observer.next(nextReady(payload))
          sharedNextReadyBee(currentInstance)
          if (textToSpeechFlag) observer.next(sharedSpeak('toPart'))
          setConvertedImage(currentInstance)

          observer.complete()
        })

      }),
  )
