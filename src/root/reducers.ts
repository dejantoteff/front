import { combineReducers } from 'redux'
import { POUCH_READY, SET_DB, SHARED_ADD_POINTS, SHARED_INIT } from '../constants'

import { getInstructions } from '../modules/getInstructions'

import { notifyStore } from 'notify/reducers'
import { chooseWordStore } from '../choose_word/reducers'
import { learningMemeStore } from '../learning_meme/reducers'
import { navigationStore } from '../navigation/reducers'

const initialState: Store = {
  ready: false,
  name: '',
  instructions: '',
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
    case SHARED_ADD_POINTS:
      return {
        ...state,
        points: state.points + Number(action.payload),
      }
    case SHARED_INIT:
      return {
        ...state,
        name: action.payload,
        instructions: getInstructions(action.payload),
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
  learningMemeStore,
  navigationStore,
  store,
}

export const rootReducer = combineReducers(allReducers)
