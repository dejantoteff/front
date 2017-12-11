import { combineReducers } from 'redux'
import { POUCH_READY, SET_DB, SHARED_ADD_POINTS, SHARED_INIT, POUCH_USER_READY, SETTINGS_RANDOM } from '../constants'

import { getInstructions } from '../modules/getInstructions'

import { notifyStore } from 'notify/reducers'
import { chooseWordStore } from '../choose_word/reducers'
import { learningMemeStore } from '../learning_meme/reducers'
import { navigationStore } from '../navigation/reducers'
import { userStore } from '../user/reducers'
import { writeSentenceStore } from '../write_sentence/reducers'

const initialState: Store = {
  instructions: '',
  randomFlag: false,
  textToSpeechFlag: false,
  logged: false,
  name: '',
  points: 0,
  ready: false,
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
    case SETTINGS_RANDOM:
      return {
        ...state,
        randomFlag: !state.randomFlag,
      }
    case POUCH_USER_READY:
      return {
        ...state,
        // logged: true,
        points: action.payload.points,
      }  
    case SHARED_ADD_POINTS:
      return {
        ...state,
        points: state.points + Number(action.payload),
      }
    case SHARED_INIT:
      return {
        ...state,
        instructions: getInstructions(action.payload),
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
  learningMemeStore,
  navigationStore,
  notifyStore,
  store,
  userStore,
  writeSentenceStore,
}

export const rootReducer = combineReducers(allReducers)
