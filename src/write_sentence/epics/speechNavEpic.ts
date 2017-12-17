import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { getCommons } from '../../common'
import { DELAY, WRITE_SENTENCE_STOP } from '../../constants'
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
  action$: ActionsObservable<WriteSentenceStopAction>,
  store,
): Observable<any> =>

  action$.ofType(WRITE_SENTENCE_STOP)
    .delay(DELAY)
    .switchMap(action => new Observable(observer => {

      const { speechAsInputFlag, fromLanguage } = getCommons(store)

      if (!speechAsInputFlag) {
        return observer.complete()
      }

      observer.complete()
      // listenWrapper(fromLanguage).then(listenResult => {

      //   observer.next(next(listenResult))
      // })

    }),

  )