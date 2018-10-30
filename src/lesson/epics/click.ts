import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { LESSON_SELECT, LESSON_CLICK } from '../../constants'
import { update } from 'rambdax'
export const clickEpic = (
  action$: ActionsObservable<LessonClickAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(LESSON_CLICK)
    .map( ({payload}) => work(payload,store) )

function work(payload, store){
  const {selection, i} = payload
  const lessonStore = store.getState().lessonStore
  
  const oldOptions = lessonStore.question[
    payload.i
  ]

  const newOptions = oldOptions.map(x => {
    if(selection === x.text){
      return {
        ...x,
        status: x.correct ? 'CORRECT' : 'WRONG'
      }
    }

    return {
      ...x,
      status: x.correct ? 'CORRECT' : 'INACTIVE'
    }
  })

  const newQuestion = update(i, newOptions, lessonStore.question)
  
  return {type: LESSON_SELECT, payload: newQuestion}
}