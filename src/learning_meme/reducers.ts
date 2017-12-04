import { LEARNING_MEME_INIT_READY, LEARNING_MEME_READY, LEARNING_MEME_SET_INPUT, LEARNING_MEME_SET_NEXT } from '../constants'

const initialState = {
  ready: false,
}

export function learningMemeStore(
  state: LearningMemeStore = initialState,
  action: Action,
): LearningMemeStore {

  switch (action.type) {
    case LEARNING_MEME_INIT_READY:
      return {
        ...state,
        currentIndex: -1,
        db: action.payload,
      }
    case LEARNING_MEME_READY:
      return {
        ...state,
        ready: true,
      }
    case LEARNING_MEME_SET_INPUT:
      return {
        ...state,
        ready: true,
        inputState: action.payload,
      }
    case LEARNING_MEME_SET_NEXT:
      return {
        ...state,
        listen: true,
        currentIndex: action.payload.currentIndex,
        currentInstance: action.payload.currentInstance,
        sentence: action.payload.sentence,
        question: action.payload.question,
        inputState: '',
      }
    default:
      return state
  }
}
