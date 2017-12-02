import { delay } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { wordsX } from 'string-fn'
import { getNextIndex } from '../../common'
import { CHOOSE_WORD_LISTEN } from '../../constants'
import { getFillers } from '../helpers/getFillers'

import {
  CHOOSE_WORD_NEXT,
  CHOOSE_WORD_READY,
  CHOOSE_WORD_SET_NEXT,
  SMALL_DELAY,
} from '../../constants'

export const keypressEpic = (
  action$: ActionsObservable<ChooseWordListenAction>,
  store,
): Observable<any> => {
  const z = Observable.fromEvent(document, 'click')
  const y = Observable.interval(1000)
  const x = Observable.interval(3000)
  const xx = action$.ofType(CHOOSE_WORD_LISTEN)

  const example = z.withLatestFrom(xx).concatMap(action => {
    return new Observable(observer => {
      console.log(action, 2)

      observer.complete()
    })
  })

  return example
}
