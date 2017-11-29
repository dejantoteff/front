import { delay } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { wordsX } from 'string-fn'
import { getNextIndex } from '../../common'
import { getFillers } from '../helpers/getFillers'

import {
  CHOOSE_WORD_NEXT,
  CHOOSE_WORD_READY,
  CHOOSE_WORD_SET_NEXT,
  SMALL_DELAY,
} from '../../constants'

export const nextEpic = (
  action$: ActionsObservable<ChooseWordNextAction>,
  store,
): Observable<any> =>

  action$.ofType(CHOOSE_WORD_NEXT)
    .concatMap(action => {
      return new Observable(observer => {

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

        const question = wordsX(currentInstance.dePart).map(singleWord =>
          getFillers({
            fillers: fillerWords,
            word: singleWord,
          }),
        )

        const payload = {
          currentIndex,
          currentInstance,
          question,
        }

        observer.next({ type: CHOOSE_WORD_SET_NEXT, payload })

        if (!ready) {

          delay(SMALL_DELAY).then(() => {
            observer.next({ type: CHOOSE_WORD_READY })
            observer.complete()
          })
        } else {

          observer.complete()
        }

      })
    })
