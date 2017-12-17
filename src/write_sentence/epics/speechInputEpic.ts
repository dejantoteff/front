import { delay } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { getCommons } from '../../common'
import { DELAY, WRITE_SENTENCE_NEXT, WRITE_SENTENCE_STEP } from '../../constants'
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
  action$: ActionsObservable<WriteSentenceSpeechInputAction>,
  store,
): Observable<any> =>

  action$.ofType(WRITE_SENTENCE_NEXT, WRITE_SENTENCE_STEP)
    .switchMap(action => new Observable(observer => {

      const { speechAsInputFlag, fromLanguage } = getCommons(store)

      if (!speechAsInputFlag) {
        return observer.complete()
      }

      listenWrapper(fromLanguage).then(listenResult => {
        console.log(listenResult)
        observer.next(setInput(listenResult))

        delay(DELAY).then(() => {
          observer.next(check())
          observer.complete()
        })
      })

    }),

  )
