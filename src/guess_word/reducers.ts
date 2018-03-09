import { GUESS_WORD_INPUT } from '../constants'
import {
  GUESS_WORD_INIT_READY,
  GUESS_WORD_INPUT_CHANGE,
  GUESS_WORD_NEXT_READY,
  GUESS_WORD_SHOW,
} from '../constants'
import { inputChange } from './actions'

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
  word: '',
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
    case GUESS_WORD_SHOW:
      return {
        ...state,
        listen: false,
      }
    case GUESS_WORD_INPUT_CHANGE:
      return {
        ...state,
        inputState: action.payload,
      }
    default:
      return state
  }
}
