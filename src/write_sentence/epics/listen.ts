import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { WRITE_SENTENCE_LISTEN } from '../../constants'
import { check, next, setInput } from '../actions'
import { update, last } from 'rambdax'

const VISIBLE_QUESTION_CHAR = '_'

function work({
  question, 
  index, 
  input, 
}){
  const questionInstance = question[index]
  const charIndex = input.length -1
  const visibleChar = questionInstance.visible[charIndex]
  if(visibleChar !== VISIBLE_QUESTION_CHAR) return question
  
  const visibleList = questionInstance.visible.split('')
  const visibleListUpdated = update(charIndex, last(input), visibleList)
  const newVisible = visibleListUpdated.join('')

  const newQuestion = update(
    index, 
    {...questionInstance, visible: newVisible}, 
    question
  )

  return newQuestion
}

export const listenEpic = (
  action$: ActionsObservable<WriteSentenceListenAction>,
  store: ObservableStore,
): Observable<any> =>

  action$.ofType(WRITE_SENTENCE_LISTEN)
    .switchMap(action => {

      return new Observable(observer => {

        const {
          index, 
          inputState, 
          listen, 
          question, 
        } = store.getState().writeSentenceStore

        // i.e. every extra char not only space activates `next` emit
        // `space` logic is kept as this allow the user to skip the word
        ///////////////////////////
        const endWord = question[index].hidden.length === inputState.length
        const okCheck = (action.payload === 'SPACE' || endWord) && listen
        
        if (okCheck) {

          observer.next(check())
        } else if (listen) {

          const maybeNewQuestion = work({
            input: action.payload,
            question, index, 
          })

          observer.next(
            setInput({
              input: action.payload,
              question: maybeNewQuestion
            })
          )
        } else {

          observer.next(next())
        }

        observer.complete()
      })
    })
