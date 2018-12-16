import { shuffle } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'

import { instanceDB } from '../../_helpers/instanceDB'
import { filterSelectArticle } from '../../_modules/filterSelectArticle'
import { getCommons } from '../../_modules/selectors'
import { INIT_READY, SELECT_ARTICLE_INIT } from '../../constants'
import { initReady } from '../actions'

function createDB(store: ObservableStore): any {

  const { randomFlag, fromLanguage } = getCommons(store)

  /**
   * If source language is not German
   * then return empty object
   * !! Could notify user on that
   */
  if (fromLanguage !== 'DE'){

    return {}
  }

  const { db } = store.getState().store

  const filtered = filterSelectArticle(db)

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
      .map(() => initReady(createDB(store)))
}
