import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { getCommons } from '../../common'
import { LEARNING_MEME_NEXT } from '../../constants'
import { listen } from '../../modules/listen'
import { check, setInput } from '../actions'

async function listenWrapper(fromLanguage: Languages) {
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

      const { speechAsInputFlag, fromLanguage } = getCommons(store)

      if (!speechAsInputFlag) {
        return observer.complete()
      }

      listenWrapper(fromLanguage).then(listenResult => {

        observer.next(setInput(listenResult))
        observer.next(check(listenResult))
        observer.complete()
      })

    }),

  )
