import { NAVIGATION_TOGGLE, ROUTER_CHANGE } from '../constants'

const initialState = {
  active: false,
}

export function navigationStore(
  state: NavigationStore = initialState,
  action: Action,
): NavigationStore {

  switch (action.type) {
    case NAVIGATION_TOGGLE:
      return {
        ...state,
        active: !state.active,
      }
    case ROUTER_CHANGE:
      return {
        ...state,
        active: false,
      }
    default:
      return state
  }
}
