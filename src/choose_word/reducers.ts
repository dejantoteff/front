import {
  CHOOSE_WORD_INIT_READY,
  CHOOSE_WORD_READY,
  CHOOSE_WORD_SET_INDEX,
  CHOOSE_WORD_SET_NEXT,
  CHOOSE_WORD_STOP,
  CHOOSE_WORD_UNMOUNT,
} from '../constants'

const initialState = {
  correctAnswer: [],
  currentIndex: -1,
  index: 0,
  listen: false,
  question: [[]],
  ready: false,
}

export function chooseWordStore(
  state: ChooseWordStore = initialState,
  action: Action,
): ChooseWordStore {

  switch (action.type) {
    case CHOOSE_WORD_INIT_READY:
      return {
        ...state,
        db: action.payload.db,
        fillerWords: action.payload.fillerWords,
      }
    // setting the new question instance
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
    // go to the next word of the question
    case CHOOSE_WORD_SET_INDEX:
      return {
        ...state,
        index: state.index + 1,
      }
    // end of question is reached
    case CHOOSE_WORD_STOP:
      return {
        ...state,
        index: state.index + 1,
        listen: false,
        question: [[]],
      }
    // component is filled with all the required data
    case CHOOSE_WORD_READY:
      return {
        ...state,
        ready: true,
      }
    /**
     * Clean-up the state
     */
    case CHOOSE_WORD_UNMOUNT:
      return {
        ...state,
        ...initialState,
      }
    default:
      return state
  }
}
