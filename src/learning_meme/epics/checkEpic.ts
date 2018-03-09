import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { distance, distanceGerman } from 'string-fn'
import { getCommons, sharedAddPoints } from '../../common'
import { LEARNING_MEME_CHECK, SHARED_SPEAK } from '../../constants'
import { stop } from '../actions'

export const checkEpic = (
  action$: ActionsObservable<LearningMemeCheckAction>,
  store: ObservableStore,
): Observable<any> =>

  action$.ofType(LEARNING_MEME_CHECK)
    .switchMap(action => {

      return new Observable(observer => {
        const {
          textToSpeechFlag,
          fromLanguage,
        } = getCommons(store)

        const {
          currentInstance,
          inputState,
        } = store.getState().learningMemeStore

        const distanceMethod = fromLanguage === 'DE' ?
          distanceGerman :
          distance

        const distanceResult = distanceMethod(
          inputState.trim(),
          currentInstance.fromWord,
        )

        const points = currentInstance.fromWord.length - distanceResult

        observer.next(sharedAddPoints(points))
        observer.next(stop())

        if (textToSpeechFlag) {

          observer.next({ type: SHARED_SPEAK, payload: 'fromPart' })

        }

        observer.complete()
      })
    })
