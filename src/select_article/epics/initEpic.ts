import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { shuffle } from 'rambdax'

import { SELECT_ARTICLE_INIT, INIT_READY } from '../../constants'
import { getCommons } from '../../_modules/selectors'
import { initReady } from '../actions'
import { filterSelectArticle } from '../../_modules/filterSelectArticle'

function createDB(store: ObservableStore): any {

  const { randomFlag, fromLanguage, toLanguage } = getCommons(store)
  
  /**
   * If source language is not German
   * then return empty object
   * !! Could notify user on that
   */
  if(fromLanguage !== 'DE'){
    
    return {}
  }

  const { db } = store.getState().store

  const filtered = filterSelectArticle(db)

  const dbValue =  randomFlag ?
    shuffle(filtered) :
    filtered

  return {db: dbValue}  
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