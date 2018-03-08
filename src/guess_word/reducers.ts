import {
  GUESS_WORD_INIT_READY,
  GUESS_WORD_NEXT_READY,
} from '../constants'
const initialState = {
  ready: false,
  db: [],
  currentIndex: -1,
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
        ready: true,
      }
    // STORE_SWITCH
    default:
      return state
  }
}
