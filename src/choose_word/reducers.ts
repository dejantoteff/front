import {
  CHOOSE_WORD_INIT_READY,
  CHOOSE_WORD_READY,
  CHOOSE_WORD_SET_NEXT,
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
        currentIndex: action.payload.currentIndex,
        currentInstance: action.payload.currentInstance,
        correctAnswer: action.payload.correctAnswer,
        index: 0,
        question: action.payload.question,
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
