import { ActionsObservable, combineEpics, Epic } from 'redux-observable'
import { Observable as ObservableType } from 'rxjs'
import { Observable } from 'rxjs/Observable'
import { CHOOSE_WORD_INIT, SET_DB } from '../../constants'

import { delay } from 'rambdax'

export const initEpic = (
  action$: ActionsObservable<ChooseWordInit>,
  store,
  { getRequest },
): ObservableType<any> =>
  action$.ofType(CHOOSE_WORD_INIT)
    .concatMap(action => {
      return new Observable(observer => {
        observer.complete()
      })
    })
    .skipUntil(action$.ofType(SET_DB))
