import { combineReducers } from 'redux'

import { chooseWordStore } from '../choose_word/reducers'
import { navigationStore } from '../navigation/reducers'

const initialState: Store = {
  inventory: 5,
}

export function store(
  state: Store = initialState,
  action: Action,
): Store {

  switch (action.type) {
    case 'INC':
      return {
        ...state,
        inventory: state.inventory + 1,
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
