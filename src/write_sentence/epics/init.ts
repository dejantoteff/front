import {
  INIT_READY,
  WRITE_SENTENCE_INIT,
} from '../../constants'

import { shuffle } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { getDB } from '../../_modules/getDB'
import { getCommons } from '../../_modules/selectors'
import { initReady } from '../actions'

function createDB(store: ObservableStore): any{
  const { randomFlag, fromLanguage, toLanguage } = getCommons(store)

  const { db } = store.getState().store

  /**
   * Filter out those DBInstance-s which_
   * cannot be used by this application
   */
  const dbValue = getDB({ db, fromLanguage, toLanguage })

  return randomFlag ?
    shuffle(dbValue) :
    dbValue
}

/**
 * Epic called from `componentDidMount`
 * Performs database filtering(if neccessary)_
 * before emitting `ready` and `next` actions
 */
export const initEpic = (
  action$: ActionsObservable<WriteSentenceInitAction>,
  store: ObservableStore,
): Observable<any> => {

  const init$ = action$.ofType(WRITE_SENTENCE_INIT)
  const db$ = action$.ofType(INIT_READY)

  return Observable
    .combineLatest(db$, init$)
    .map(() => initReady(createDB(store)))
}
