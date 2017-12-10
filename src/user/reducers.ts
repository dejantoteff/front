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
      userDB: action.payload.userDB,
      data: action.payload.data,
      logged: true
    }
    default:
      return state
  }
}
