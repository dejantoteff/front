import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { distanceGerman } from 'string-fn'
import { sharedAddPoints } from '../../common'
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
          inputState,
          currentInstance,
        } = store.getState().learningMemeStore

        const distance = distanceGerman(inputState.trim(), currentInstance.deWord)
        const points = currentInstance.deWord.length - distance

        observer.next(sharedAddPoints(points))
        observer.next(stop())

        if (store.getState().store.textToSpeechFlag) {

          observer.next({ type: SHARED_SPEAK, payload: 'DE' })

        }

        observer.complete()
      })
    })
