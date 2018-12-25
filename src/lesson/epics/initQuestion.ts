import { filter, replace, shuffle, split } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { LESSON_NEXT, LESSON_QUESTION_READY } from '../../constants'

const hasExample = store => {
  return store.getState().lessonStore.currentStep.example
}

const work = (store: ObservableStore) => {
  const {currentStep } = store.getState().lessonStore
  const words = currentStep.example.split(' ')

  const mapped = words.map(singleWord => {
    if (!singleWord.includes('][')) { return singleWord }

    return getQuestionList(singleWord)
  })

  return { type: LESSON_QUESTION_READY, payload: mapped }
}

function getQuestionList(singleWord: any){
  const [correct, first, second] = singleWord
    .s(replace(/\]|\[/g, ' '))
    .s(split(' '))
    .s(filter<any>(x => x.trim() !== ''))

  const list = [
    {correct: true, text: correct, status: 'ACTIVE'},
    {correct: false, text: first, status: 'ACTIVE'},
    {correct: false, text: second, status: 'ACTIVE'},
  ]

  return shuffle(list)
}

export const initQuestionEpic = (
  action$: ActionsObservable<LessonNextAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(LESSON_NEXT)
    .filter(() => hasExample(store))
    .map(() => work(store))
