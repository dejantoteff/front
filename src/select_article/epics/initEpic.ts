import { shuffle } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'

import { instanceDB } from '../../_helpers/instanceDB'
import { getCommons } from '../../_modules/selectors'
import { INIT_READY, SELECT_ARTICLE_INIT } from '../../constants'
import { initReady } from '../actions'
import { filterAnt } from '../ants/filter';

function createDB(store: ObservableStore): any {
  const { randomFlag } = getCommons(store)
  const { db } = store.getState().store
  const filtered = filterAnt(db)

  const dbValue =  randomFlag ?
    shuffle(filtered) :
    filtered

  return {db: instanceDB(randomFlag, dbValue)}
}

export const initEpic = (
  action$: ActionsObservable<SelectArticleInitAction>,
  store: ObservableStore,
): Observable<Action> => {
    const db$ = action$.ofType(INIT_READY)
    const init$ = action$.ofType(SELECT_ARTICLE_INIT)

    return Observable
      .combineLatest(db$, init$)
      .filter(() => getCommons(store).fromLanguage === 'DE')
      .map(() => initReady(createDB(store)))
}
