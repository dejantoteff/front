import { POUCH_USER_READY } from '../constants'
const initialState = {
  logged: false,
  ready: true,
}

export function userStore(
  state: UserStore = initialState,
  action: Action,
): UserStore {

  switch (action.type) {
    case POUCH_USER_READY:
    return {
      ...state,
      logged: true,
      userDB: action.payload,
    }
    default:
      return state
  }
}
