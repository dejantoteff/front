import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { SELECT_ARTICLE_INIT } from '../../constants'

export const initEpic = (
  action$: ActionsObservable<SelectArticleInitAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(SELECT_ARTICLE_INIT)
    .map( () => ({ type: 'REPLACE_ME' }) )