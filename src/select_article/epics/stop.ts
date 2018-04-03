import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { SELECT_ARTICLE_STOP } from '../../constants'

export const stopEpic = (
  action$: ActionsObservable<SelectArticleStopAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(SELECT_ARTICLE_STOP)
    .map( () => ({ type: 'REPLACE_ME' }) )