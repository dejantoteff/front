import { LEARNING_MEME_INIT_READY } from '../constants'

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
    default:
      return state
  }
}
