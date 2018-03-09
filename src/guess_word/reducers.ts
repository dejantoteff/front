import {
  GUESS_WORD_INIT_READY,
  GUESS_WORD_NEXT_READY,
  GUESS_WORD_SHOW,
} from '../constants'

const initialState: GuessWordStore = {
  answer: '',
  currentIndex: -1,
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
    // STORE_SWITCH
    default:
      return state
  }
}
