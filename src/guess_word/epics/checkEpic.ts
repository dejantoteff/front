import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { GUESS_WORD_CHECK } from '../../constants'

export const checkEpic = (
  action$: ActionsObservable<GuessWordCheckAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(GUESS_WORD_CHECK)
    .map(() => ({ type: 'REPLACE_ME' }))
