import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { LESSON_NEXT } from '../../constants'
import { questionReady } from '../actions'
import { questionListBee } from '../bees/questionList';

const hasExample = store => {
  return store.getState().lessonStore.currentStep.example
}

const work = (store: ObservableStore) => {
  const {currentStep } = store.getState().lessonStore
  const words = currentStep.example.split(' ')
  
  const parsedWords = words.map(singleWord => {
    if (!singleWord.includes('][')) return singleWord

    return questionListBee(singleWord)
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
