import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { distanceGerman } from 'string-fn'
import { sharedAddPoints } from '../../common'
import { LEARNING_MEME_CHECK } from '../../constants'
import { stop } from '../actions'

export const checkEpic = (
  action$: ActionsObservable<LearningMemeCheckAction>,
  store,
): Observable<any> =>

  action$.ofType(LEARNING_MEME_CHECK)
    .switchMap(action => {

      return new Observable(observer => {

        const x = store.getState().learningMemeStore
        const {
          inputState,
          currentInstance,
        } = x

        const distance = distanceGerman(inputState.trim(), currentInstance.deWord)
        const points = currentInstance.deWord.length - distance

        observer.next(sharedAddPoints(points))
        observer.next(stop())
        observer.complete()
      })
    })
