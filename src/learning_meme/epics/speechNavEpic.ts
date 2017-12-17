import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { getCommons } from '../../common'
import { DELAY, LEARNING_MEME_STOP } from '../../constants'
import { listen } from '../../modules/listen'
import { next } from '../actions'

async function listenWrapper(fromLanguage: Languages) {
  let result = 'ERROR'
  while (result === 'ERROR') {
    result = await listen(fromLanguage)
  }

  return result
}

export const speechNavEpic = (
  action$: ActionsObservable<LearningMemeStopAction>,
  store: ObservableStore,
): Observable<any> =>

  action$.ofType(LEARNING_MEME_STOP)
    .delay(DELAY)
    .switchMap(action => new Observable(observer => {

      const { fromLanguage, textToSpeechFlag } = getCommons(store)

      if (textToSpeechFlag) {
        return observer.complete()
      }

      listenWrapper(fromLanguage).then(listenResult => {

        observer.next(next(listenResult))
        observer.complete()
      })

    }),

  )
