import { delay, map } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { maskSentence, maskWords, OutputMaskSentence } from 'string-fn'
import { getNextIndex } from '../../common'
import {
  LEARNING_MEME_NEXT,
  LEARNING_MEME_READY,
  LEARNING_MEME_SET_NEXT,
  SMALL_DELAY,
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

        if (ready) {

          // if this is not the very first step
          // then we right away emit actions
          // observer.next({ type: SHARED_SPEAK, payload: 'EN' })

          observer.complete()

        } else {

          // On the very first step we need to wait for
          // set of state and rendering to happen
          // then we emit actions
          delay(SMALL_DELAY).then(() => {
            observer.next({ type: LEARNING_MEME_READY })
            // can include two part of de speak, because part1 question part2
            // observer.next({ type: SHARED_SPEAK, payload: 'EN' })

            observer.complete()
          })

        }
      })
    })
