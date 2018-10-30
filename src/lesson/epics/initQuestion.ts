import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { LESSON_NEXT } from '../../constants'
import { s, split, filter, replace, shuffle } from 'rambdax'

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

    return getQuestionList(singleWord)    
  })
  
  return { type: 'lesson@QUESTION_READY', payload: mapped }
}    

function getQuestionList(singleWord){
  s()
  
  const [correct, first, second] = singleWord
    .s(replace(/\]|\[/g, ' '))
    .s(split(' '))
    .s(filter<any>(x => x.trim() !== ''))

  const list = [
    {correct: true, text: correct},
    {correct: false, text: first},
    {correct: false, text: second},
  ]  

  return shuffle(list)
}