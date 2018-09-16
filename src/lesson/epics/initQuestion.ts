import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { LESSON_NEXT } from '../../constants'

export const initQuestionEpic = (
  action$: ActionsObservable<LessonNextAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(LESSON_NEXT)
    .filter( () => store.getState().lessonStore.currentStep.example)
    .map( () => work(store) )

const work = (store: ObservableStore) =>{
  return { type: 'REPLACE_ME' }
}    