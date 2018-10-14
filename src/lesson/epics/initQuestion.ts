import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { LESSON_NEXT } from '../../constants'

const hasExample = store => {
  return store.getState().lessonStore.currentStep.example
}

export const initQuestionEpic = (
  action$: ActionsObservable<LessonNextAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(LESSON_NEXT)
    .filter(() => hasExample(store))
    .map( () => work(store) )

const work = (store: ObservableStore) =>{
  const {currentStep } = store.getState().lessonStore
  const words = currentStep.example.split(' ')
  
  const mapped = words.map(singleWord => {
    if(!singleWord.includes('][')) return singleWord
  })
  return { type: 'REPLACE_ME', payload: mapped }
}    