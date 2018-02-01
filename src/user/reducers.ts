import {
  POUCH_USER_READY,
} from '../constants'

const initialState = {}

export function userStore(
  state: UserStore = initialState,
  action: Action,
): UserStore {

  switch (action.type) {
    case POUCH_USER_READY:
      return {
        ...state,
        data: action.payload.data,
      }
    default:
      return state
  }
}
