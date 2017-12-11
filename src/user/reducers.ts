import { POUCH_USER_READY, POUCH_USER_CHANGE } from '../constants'

const initialState = {
  logged: false,
  ready: true,
}

export function userStore(
  state: UserStore = initialState,
  action: Action,
): UserStore {

  switch (action.type) {
    case POUCH_USER_CHANGE:
      return {
        ...state,
        data: action.payload.data,
      }
    case POUCH_USER_READY:
      return {
        ...state,
        data: action.payload.data,
        logged: true,
        userDB: action.payload.userDB,
      }
    default:
      return state
  }
}
