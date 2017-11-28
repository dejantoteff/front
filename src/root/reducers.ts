import { combineReducers } from 'redux'

import { chooseWordStore } from '../choose_word/reducers'
import { navigationStore } from '../navigation/reducers'

const initialState: Store = {
  ready: false,
}

export function store(
  state: Store = initialState,
  action: Action,
): Store {

  switch (action.type) {
    case 'POUCH_READY':
      return {
        ...state,
        dbCloud: action.payload.dbCloud,
        dbLocal: action.payload.dbLocal,
        ready: true,
      }
    default:
      return state
  }
}

const allReducers = {
  chooseWordStore,
  navigationStore,
  store,
}

export const rootReducer = combineReducers(allReducers)
