import { delay } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { wordsX } from 'string-fn'
import { getCommons, getNextIndex } from '../../common'
import { getFillers } from '../helpers/getFillers'

import {
  CHOOSE_WORD_LISTEN,
  CHOOSE_WORD_NEXT,
  CHOOSE_WORD_READY,
  CHOOSE_WORD_SET_NEXT,
  NEXT_TICK,
  SHARED_SPEAK,
  SHORT_DELAY,
} from '../../constants'

export const nextEpic = (
  action$: ActionsObservable<ChooseWordNextAction>,
  store,
): Observable<any> =>

  action$.ofType(CHOOSE_WORD_NEXT)
    .concatMap(action => {
      return new Observable(observer => {

        const { textToSpeechFlag } = getCommons(store)

        const {
          currentIndex: currentIndexRaw,
          db,
          fillerWords,
          ready,
        } = store.getState().chooseWordStore

        const currentIndex = getNextIndex({
          index: currentIndexRaw,
          length: db.length,
        })

        const currentInstance = db[currentIndex]

        const correctAnswer = wordsX(currentInstance.fromPart)

        const question = correctAnswer.map(singleWord =>
          getFillers({
            fillers: fillerWords,
            word: singleWord,
          }),
        )

        const payload = {
          correctAnswer,
          currentIndex,
          currentInstance,
          question,
        }

        observer.next({ type: CHOOSE_WORD_SET_NEXT, payload })

        const ms = ready ?
          NEXT_TICK :
          SHORT_DELAY

        delay(ms).then(() => {

          observer.next({ type: CHOOSE_WORD_READY })
          observer.next({ type: CHOOSE_WORD_LISTEN })

          if (textToSpeechFlag) {

            observer.next({ type: SHARED_SPEAK, payload: 'toPart' })

          }

          observer.complete()

        })

      })
    })
