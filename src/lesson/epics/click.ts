import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { LESSON_CLICK } from '../../constants'

export const clickEpic = (
  action$: ActionsObservable<LessonClickAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(LESSON_CLICK)
    .map( () => ({ type: 'REPLACE_ME' }) )