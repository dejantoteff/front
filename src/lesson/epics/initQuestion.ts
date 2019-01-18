import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { LESSON_NEXT } from '../../constants'
import { questionReady } from '../actions'
import { questionListBee } from '../bees/questionList';
import { test, allTrue } from 'rambdax'

const hasExample = store => {
  return store.getState().lessonStore.currentStep.example
}
// \[([A-Za-z\.\]\[])*

const work = (store: ObservableStore) => {
  const {currentStep } = store.getState().lessonStore
  const isExample = !test(/\[.*\]/,currentStep.example)
  const isComplexExample = allTrue(
    isExample,
    test(/\[([A-Za-z\.\]\[])*/g,currentStep.example)
  )
  const words = currentStep.example.split(' ')
  
  const parsedWords = words.map(singleWord => {
    if (!test(/\[.*\]/,singleWord)) return singleWord

    return questionListBee(singleWord, isComplexExample)
  })

  return questionReady(parsedWords)
}

export const initQuestionEpic = (
  action$: ActionsObservable<LessonNextAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(LESSON_NEXT)
    .filter(() => hasExample(store))
    .map(() => work(store))
