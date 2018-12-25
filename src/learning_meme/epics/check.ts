import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { distance, distanceGerman } from 'string-fn'
import { getCommons } from '../../_modules/selectors'
import { LEARNING_MEME_CHECK, SHARED_SPEAK } from '../../constants'
import { sharedAddPoints } from '../../root/actions'
import { stop } from '../actions'

export const checkEpic = (
  action$: ActionsObservable<LearningMemeCheckAction>,
  store: ObservableStore,
): Observable<any> =>

  action$.ofType(LEARNING_MEME_CHECK)
    .switchMap(action => new Observable(observer => {
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

      const okDistance = distanceResult <= 1
      if (okDistance){
        observer.next(sharedAddPoints(1))
      }

      observer.next(stop())

      if (textToSpeechFlag) {
        observer.next({ type: SHARED_SPEAK, payload: 'fromPart' })
      }

      observer.complete()
    }),
  )
