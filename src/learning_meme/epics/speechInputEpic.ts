import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { getCommons } from '../../common'
import { LEARNING_MEME_NEXT } from '../../constants'
import { listen } from '../../modules/listen'
import { check, setInput } from '../actions'

async function listenWrapper(fromLanguage: Language) {
  let result = 'ERROR'
  while (result === 'ERROR') {
    result = await listen(fromLanguage)
  }

  return result
}

export const speechInputEpic = (
  action$: ActionsObservable<LearningMemeNextAction>,
  store,
): Observable<any> =>

  action$.ofType(LEARNING_MEME_NEXT)
    .switchMap(action => new Observable(observer => {

      const { fromLanguage, textToSpeechFlag } = getCommons(store)

      if (textToSpeechFlag) {
        return observer.complete()
      }

      listenWrapper(fromLanguage).then(listenResult => {

        observer.next(setInput(listenResult))
        observer.next(check())
        observer.complete()
      })

    }),

  )
