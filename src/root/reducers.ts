import { combineReducers } from 'redux'
import { POUCH_READY, SET_DB, SHARED_INIT } from '../constants'

import { notifyStore } from 'notify/reducers'
import { chooseWordStore } from '../choose_word/reducers'
import { navigationStore } from '../navigation/reducers'

const initialState: Store = {
  ready: false,
  name: '',
  points: 0,
  logged: false,
}

export function store(
  state: Store = initialState,
  action: Action,
): Store {

  switch (action.type) {
    case SET_DB:
      return {
        ...state,
        db: action.payload,
      }
    case SHARED_INIT:
      return {
        ...state,
        name: action.payload,
      }
    case POUCH_READY:
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
  notifyStore,
  navigationStore,
  store,
}

export const rootReducer = combineReducers(allReducers)
