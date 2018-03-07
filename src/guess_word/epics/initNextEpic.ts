import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { GUESS_WORD_NEXT_TICK } from '../../constants'

export const initNextEpic = (
  action$: ActionsObservable<GuessWordNextTickAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(GUESS_WORD_NEXT_TICK)
    .map( () => ({ type: 'REPLACE_ME' }) )