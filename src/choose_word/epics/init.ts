import {
  CHOOSE_WORD_INIT,
  INIT_READY,
} from '../../constants'

import { identity, shuffle } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { getDB } from '../../_modules/getDB'
import { getCommons } from '../../_modules/selectors'
import { generateFillerWords } from '../_helpers/generateFillerWords'
import { initReady } from '../actions'

function createDB(store: ObservableStore): any {
  const { randomFlag, fromLanguage, toLanguage } = getCommons(store)

  const { db } = store.getState().store

  const dbValue = getDB({ db, fromLanguage, toLanguage })

  const fn = randomFlag ?
    shuffle :
    identity

  const fillerWords = generateFillerWords(dbValue)

  return {
    db: fn(dbValue),
    fillerWords: fillerWords,
  }
}

/**
 * It is called after the database is set and the component is mounted.
 */
export const initEpic = (
  action$: ActionsObservable<ChooseWordInitAction>,
  store: ObservableStore,
): Observable<any> => {
  const db$ = action$.ofType(INIT_READY)
  const init$ = action$.ofType(CHOOSE_WORD_INIT)

  return Observable
    .combineLatest(db$, init$)
    .map(() => initReady(createDB(store)))
}
