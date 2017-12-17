import { combineReducers } from 'redux'
import {
  LANGUAGE_CHANGE,
  POUCH_READY,
  POUCH_USER_CHANGE,
  POUCH_USER_READY,
  SET_DB,
  SETTINGS_RANDOM,
  SETTINGS_TEXT_TO_SPEECH,
  SHARED_ADD_POINTS,
  SHARED_INIT,
} from '../constants'

import { getInstructions } from '../modules/getInstructions'

import { notifyStore } from 'notify/reducers'
import { chooseWordStore } from '../choose_word/reducers'
import { learningMemeStore } from '../learning_meme/reducers'
import { navigationStore } from '../navigation/reducers'
import { userStore } from '../user/reducers'
import { writeSentenceStore } from '../write_sentence/reducers'

const initialState: Store = {
  fromLanguage: 'DE',
  instructions: '',
  logged: false,
  name: '',
  points: 0,
  randomFlag: false,
  ready: false,
  textToSpeechFlag: true,
  toLanguage: 'EN',
}

interface NewLanguage {
  fromLanguage: Languages
  toLanguage: Languages
}

function getNewLanguage(state: Store): NewLanguage {
  return state.fromLanguage === 'EN' ?
    { fromLanguage: 'DE', toLanguage: 'EN' } :
    { fromLanguage: 'EN', toLanguage: 'DE' }
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
    case LANGUAGE_CHANGE:
      return {
        ...state,
        fromLanguage: getNewLanguage(state).fromLanguage,
        toLanguage: getNewLanguage(state).toLanguage,
      }
    case SETTINGS_RANDOM:
      return {
        ...state,
        randomFlag: !state.randomFlag,
      }
    case SETTINGS_TEXT_TO_SPEECH:
      return {
        ...state,
        textToSpeechFlag: !state.textToSpeechFlag,
      }
    case POUCH_USER_READY:
    case POUCH_USER_CHANGE:
      return {
        ...state,
        points: action.payload.data.points,
        randomFlag: action.payload.data.randomFlag,
        textToSpeechFlag: action.payload.data.textToSpeechFlag,
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
