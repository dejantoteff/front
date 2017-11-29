import { CHOOSE_WORD_INIT_READY, TOGGLE } from '../constants'

const initialState = {
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
        currentIndex: -1,
        fillerWords: action.payload,
        index: 0,
        ready: true,
      }
    default:
      return state
  }
}
