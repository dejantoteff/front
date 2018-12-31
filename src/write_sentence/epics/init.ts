import {
  INIT_READY,
  WRITE_SENTENCE_INIT,
} from '../../constants'

import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { instanceDB } from '../../_helpers/instanceDB'
import { getDB } from '../../_modules/getDB'
import { getCommons } from '../../_modules/selectors'
import { initReady } from '../actions'

function createDB(initAction, store: ObservableStore): any {
  const { randomFlag, fromLanguage, toLanguage } = getCommons(store)
  const { db } = store.getState().store

  // Filter only these DBInstance-s which
  // can be used by this application
  ///////////////////////////
  const dbValue = getDB({ db, fromLanguage, toLanguage })

  return instanceDB(randomFlag, dbValue, initAction)
}

// Epic called from `componentDidMount`
// Performs database filtering(if neccessary)
// before emitting `ready` and `next` actions
///////////////////////////
export const initEpic = (
  action$: ActionsObservable<WriteSentenceInitAction>,
  store: ObservableStore,
): Observable<any> => {

  const init$ = action$.ofType(WRITE_SENTENCE_INIT)
  const db$ = action$.ofType(INIT_READY)

  return Observable
    .combineLatest(db$, init$)
    .map(([, initAction]) => initReady(createDB(initAction, store)))
}
