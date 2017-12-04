import { delay } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { maskWords } from 'string-fn'
import { getNextIndex } from '../../common'
import { LEARNING_MEME_LISTEN, LEARNING_MEME_NEXT, LEARNING_MEME_READY, LEARNING_MEME_SET_NEXT, SHARED_SPEAK, SMALL_DELAY } from '../../constants'

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

        const correctAnswer = currentInstance.deWord

        const question = maskWords({ words: currentInstance.deWord })

        const payload = {
          currentIndex,
          currentInstance,
          question,
          correctAnswer,
        }

        observer.next({ type: LEARNING_MEME_SET_NEXT, payload })

        if (!ready) {

          delay(SMALL_DELAY).then(() => {
            observer.next({ type: LEARNING_MEME_READY })
            observer.next({ type: LEARNING_MEME_LISTEN })
            // can include two part of de speak, because part1 question part2
            // observer.next({ type: SHARED_SPEAK, payload: 'EN' })

            observer.complete()
          })

        } else {

          observer.next({ type: LEARNING_MEME_LISTEN })
          // observer.next({ type: SHARED_SPEAK, payload: 'EN' })

          observer.complete()

        }
      })
    })
