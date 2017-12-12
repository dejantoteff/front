import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { distanceGerman } from 'string-fn'
import { sharedAddPoints, getCommons } from '../../common'
import { LEARNING_MEME_CHECK, SHARED_SPEAK } from '../../constants'
import { stop } from '../actions'

export const checkEpic = (
  action$: ActionsObservable<LearningMemeCheckAction>,
  store,
): Observable<any> =>

  action$.ofType(LEARNING_MEME_CHECK)
    .switchMap(action => {

      return new Observable(observer => {
        const {
          textToSpeechFlag,
          fromLanguage,
        } = getCommons(store)
        
        const {
          inputState,
          currentInstance,
        } = store.getState().learningMemeStore

        const distance = distanceGerman(inputState.trim(), currentInstance.deWord)
        const points = currentInstance.deWord.length - distance

        observer.next(sharedAddPoints(points))
        observer.next(stop())

        if (textToSpeechFlag) {

          observer.next({ type: SHARED_SPEAK, payload: fromLanguage })

        }

        observer.complete()
      })
    })
