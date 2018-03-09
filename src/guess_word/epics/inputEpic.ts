import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { GUESS_WORD_INPUT } from '../../constants'

export const inputEpic = (
  action$: ActionsObservable<GuessWordInputAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(GUESS_WORD_INPUT)
    .map(() => ({ type: 'GUESS_WORD_NEXT' }))
