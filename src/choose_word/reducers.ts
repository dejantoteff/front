import { CHOOSE_WORD_SET_INDEX } from '../constants'
import {
  CHOOSE_WORD_INIT_READY,
  CHOOSE_WORD_READY,
  CHOOSE_WORD_SET_NEXT,
  CHOOSE_WORD_STOP,
} from '../constants'

const initialState = {
  ready: false,
}


export function chooseWordStore(
  state: ChooseWordStore = initialState,
  action: Action,
): ChooseWordStore {

  switch (action.type) {
    case CHOOSE_WORD_SET_NEXT:
      return {
        ...state,
        correctAnswer: action.payload.correctAnswer,
        currentIndex: action.payload.currentIndex,
        currentInstance: action.payload.currentInstance,
        index: 0,
        listen: true,
        question: action.payload.question,
      }
    case CHOOSE_WORD_SET_INDEX:
      return {
        ...state,
        index: state.index + 1,
      }
    case CHOOSE_WORD_STOP:
      return {
        ...state,
        index: state.index + 1,
        listen: false,
        question: [[]],
      }
    case CHOOSE_WORD_READY:
      return {
        ...state,
        ready: true,
      }
    case CHOOSE_WORD_INIT_READY:
      return {
        ...state,
        currentIndex: -1,
        db: action.payload.db,
        fillerWords: action.payload.fillerWords,
      }
    default:
      return state
  }
}
