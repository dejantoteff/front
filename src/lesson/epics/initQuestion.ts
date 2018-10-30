import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { LESSON_NEXT } from '../../constants'
import { s, split, filter, replace } from 'rambdax'

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

    getQuestionList(singleWord)    
  })
  console.log(mapped);
  
  return { type: 'REPLACE_ME', payload: mapped }
}    

function getQuestionList(singleWord){
  s()
  
  const [correct, first, second] = singleWord
    .s(replace(/\]|\[/g, ' '))
    .s(split(' '))
    .s(filter<any>(x => x.trim() !== ''))

  console.log(correct, first, second);
  
}