import {
  CHOOSE_WORD_INIT,
  INIT_READY,
} from '../../constants'

import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { generateFillerWords } from '../internals/generateFillerWords'
import { getCommons } from '../../_modules/selectors'
import { getDB } from '../../_modules/getDB'
import { initReady } from '../actions'
import { instanceDB } from '../../_helpers/instanceDB';

function createDB(store: ObservableStore): any {
  const { randomFlag, fromLanguage, toLanguage } = getCommons(store)
  const { db } = store.getState().store
  const dbValue = getDB({ db, fromLanguage, toLanguage })
  const fillerWords = generateFillerWords(dbValue)

  return {
    db: instanceDB(randomFlag, dbValue),
    fillerWords: fillerWords,
  }
}

/**
 * It is called after the database is set 
 * and the component is mounted
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
