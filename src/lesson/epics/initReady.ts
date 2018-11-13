import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { LESSON_INIT_READY } from '../../constants'

export const initReadyEpic = (
  action$: ActionsObservable<LessonInitReadyAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(LESSON_INIT_READY)
    .map(() => ({ type: 'REPLACE_ME' }))
