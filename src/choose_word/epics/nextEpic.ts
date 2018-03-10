import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { wordsX } from 'string-fn'
import { getNextIndex } from '../../_helpers/getNextIndex'
import { getCommons } from '../../_modules/selectors'
import {
  CHOOSE_WORD_NEXT,
  CHOOSE_WORD_READY,
  CHOOSE_WORD_SET_NEXT,
  SHARED_SPEAK,
} from '../../constants'
import { getFillers } from '../_helpers/getFillers'

/**
 * It represents generation of the next current instance.
 *
 *
 * @param {ActionsObservable<ChooseWordNextAction>} action$
 * @param {ObservableStore} store
 * @returns {Observable<any>}
 */
export const nextEpic = (
  action$: ActionsObservable<ChooseWordNextAction>,
  store: ObservableStore,
): Observable<any> =>

  action$.ofType(CHOOSE_WORD_NEXT)
    .switchMap(action => {
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

        if (!ready) {
          observer.next({ type: CHOOSE_WORD_READY })
        }

        if (textToSpeechFlag) {
          observer.next({ type: SHARED_SPEAK, payload: 'toPart' })
        }

        observer.complete()
      })
    })
