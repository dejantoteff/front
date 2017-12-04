import { delay, map } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { maskSentence, maskWords, OutputMaskSentence } from 'string-fn'
import { getNextIndex } from '../../common'
import { WRITE_SENTENCE_NEXT, WRITE_SENTENCE_SET_NEXT, SMALL_DELAY, WRITE_SENTENCE_READY } from '../../constants';

export const nextEpic = (
  action$: ActionsObservable<WriteSentenceNextAction>,
  store,
): Observable<any> =>

  action$.ofType(WRITE_SENTENCE_NEXT)
    .concatMap(action => {
      return new Observable(observer => {

        const {
          currentIndex: currentIndexRaw,
          db,
          ready,
        } = store.getState().writeSentenceStore

        const currentIndex = getNextIndex({
          index: currentIndexRaw,
          length: db.length,
        })

        const currentInstance = db[currentIndex]


        const question: OutputMaskSentence = maskSentence({
          sentence: currentInstance.dePart,
          words: [],
          charLimit: 4,
        })
        
        const payload = {
          currentIndex,
          currentInstance,
          question,
        }

        // Ready to set the state
        observer.next({ type: WRITE_SENTENCE_SET_NEXT, payload })

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
            observer.next({ type: WRITE_SENTENCE_READY })
            // can include two part of de speak, because part1 question part2
            // observer.next({ type: SHARED_SPEAK, payload: 'EN' })

            observer.complete()
          })

        }
      })
    })
