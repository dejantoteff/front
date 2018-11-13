import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { WRITE_SENTENCE_AUTO } from '../../constants'

export const autoEpic = (
  action$: ActionsObservable<WriteSentenceAutoAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(WRITE_SENTENCE_AUTO)
    .map( () => ({ type: 'REPLACE_ME' }) )