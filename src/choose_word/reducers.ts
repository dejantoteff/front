import { TOGGLE } from '../constants'

const initialState = {
  currentIndex: 0,
  currentInstance: [['']],
  db: [],
  fillerWords: {},
  index: 0,
  ready: false,
}

export function chooseWordStore(
  state: ChooseWordStore = initialState,
  action: Action,
): ChooseWordStore {

  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        index: state.index + 1,
      }
    default:
      return state
  }
}
