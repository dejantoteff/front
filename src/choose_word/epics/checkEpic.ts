import { delay } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { wordsX } from 'string-fn'
import { getNextIndex } from '../../common'
import { CHOOSE_WORD_CHECK } from '../../constants'
import { check } from '../actions'
import { getFillers } from '../helpers/getFillers'
import { chooseWordStore } from '../reducers'

import { replace } from 'rambdax'

export const checkEpic = (
  action$: ActionsObservable<ChooseWordCheckAction>,
  store,
): Observable<any> =>
  action$.ofType(CHOOSE_WORD_CHECK)
    .concatMap(action => {
      return new Observable(observer => {
        console.log(action)
        observer.complete()
      })
    })
