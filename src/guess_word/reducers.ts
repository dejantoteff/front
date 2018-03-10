import {
  GUESS_WORD_INIT_READY,
  GUESS_WORD_INPUT,
  GUESS_WORD_INPUT_CHANGE,
  GUESS_WORD_NEXT_READY,
  GUESS_WORD_STOP,
  GUESS_WORD_UNMOUNT,
} from '../constants'
import { inputChange } from './actions'
import { ROUTER_CHANGE } from '../constants'

const initialState: GuessWordStore = {
  answer: '',
  currentIndex: -1,
  inputState: '',
  db: [],
  listen: false,
  question: '',
  ready: false,
  related: [],
  translated: '',
  wordAnswer: '',
  wordQuestion: '',
}

export function guessWordStore(
  state: GuessWordStore = initialState,
  action: Action,
): GuessWordStore {

  switch (action.type) {
    case GUESS_WORD_INIT_READY:
      return {
        ...state,
        db: action.payload,
      }
    case GUESS_WORD_NEXT_READY:
      return {
        ...state,
        listen: true,
        ready: true,
        ...action.payload,
      }
    case GUESS_WORD_STOP:
      return {
        ...state,
        listen: false,
        inputState: '',
      }
    case GUESS_WORD_INPUT_CHANGE:
      return {
        ...state,
        inputState: action.payload,
      }
    case GUESS_WORD_UNMOUNT:
      return {
        ...state,
        ...initialState,
      }  
    default:
      return state
  }
}
