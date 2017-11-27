import { TOGGLE } from '../constants'

const initialState = {
  active: true,
}

export function navigationStore(
  state: NavigationStore = initialState,
  action: Action,
): NavigationStore {

  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        active: !state.active,
      }
    default:
      return state
  }
}
