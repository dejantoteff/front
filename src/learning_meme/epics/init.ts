import {
  INIT_READY,
  LEARNING_MEME_INIT,
} from '../../constants'

import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { instanceDB } from '../../_helpers/instanceDB'
import { getDB } from '../../_modules/getDB'
import { getCommons } from '../../_modules/selectors'
import { initReady } from '../actions'

function createDB(store: ObservableStore): any {

  const { randomFlag, fromLanguage, toLanguage } = getCommons(store)
  const { db } = store.getState().store

  const dbValue = getDB({ db, fromLanguage, toLanguage })

  return instanceDB(randomFlag, dbValue)
}

export const initEpic = (
  action$: ActionsObservable<LearningMemeInitAction>,
  store,
): Observable<any> => {
  const db$ = action$.ofType(INIT_READY)
  const init$ = action$.ofType(LEARNING_MEME_INIT)

  return Observable
    .combineLatest(db$, init$)
    .map(() => initReady(createDB(store)))
}
