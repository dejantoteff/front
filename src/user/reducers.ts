import { equals, omit } from 'rambdax'
import {
  INIT_READY,
  POUCH_USER_READY,
} from '../constants'
const initialState = { ready: false }

function whenInitReady(payload: any, state: UserStore): UserStore {
  const isPayloadEmpty = equals(payload.userData.forRootReducer, {})
  if (isPayloadEmpty) {

    return state
  }
  const data = omit('_id,_rev', payload.userData.userDoc)

  return {
    ...state,
    data,
    ready: true,
  }

}

export function userStore(
  state: UserStore = initialState,
  action: Action,
): UserStore {

  switch (action.type) {
    case INIT_READY:
      return whenInitReady(action.payload, state)
    case POUCH_USER_READY:
      return {
        ...state,
        data: action.payload.data,
        ready: true,
      }
    default:
      return state
  }
}
