import { initialGet } from 'client-helpers'
import { notifyStore } from 'notify/reducers'
import { combineReducers } from 'redux'
import { chooseWordStore } from '../choose_word/reducers'
import {
  LANGUAGE_CHANGE_CLICK,
  LANGUAGE_CHANGE_INIT,
  POUCH_READY,
  POUCH_USER_CHANGE,
  POUCH_USER_READY,
  SET_DB,
  SETTINGS_RANDOM,
  SETTINGS_TEXT_TO_SPEECH,
  SHARED_ADD_POINTS,
  SHARED_INIT,
} from '../constants'
import { learningMemeStore } from '../learning_meme/reducers'
import { getInstructions } from '../modules/getInstructions'
import { navigationStore } from '../navigation/reducers'
import { userStore } from '../user/reducers'
import { writeSentenceStore } from '../write_sentence/reducers'
import { settingsRandom } from './side_effects/settingsRandom'
import { settingsTextToSpeech } from './side_effects/settingsTextToSpeech'

const randomFlag = initialGet({
  defaultValue: false,
  key: 'randomFlag',
  type: 'boolean',
})
const textToSpeechFlag = initialGet({
  defaultValue: true,
  key: 'textToSpeechFlag',
  type: 'boolean',
})
const points = initialGet({
  defaultValue: 0,
  key: 'points',
  type: 'number',
})
const fromLanguage = initialGet<Language>({
  defaultValue: 'DE',
  key: 'fromLanguage',
})
const toLanguage = initialGet<Language>({
  defaultValue: 'EN',
  key: 'fromLanguage',
})
const initialState: Store = {
  fromLanguage: fromLanguage,
  instructions: '',
  logged: false,
  name: '',
  points: points,
  randomFlag: randomFlag,
  ready: false,
  textToSpeechFlag: textToSpeechFlag,
  toLanguage: toLanguage,
  toggleLanguage: false,
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
    case LANGUAGE_CHANGE_INIT:
      return {
        ...state,
        toggleLanguage: !state.toggleLanguage,
      }
    case LANGUAGE_CHANGE_CLICK:
      return {
        ...state,
        fromLanguage: action.payload.from,
        toLanguage: action.payload.to,
        toggleLanguage: !state.toggleLanguage,
      }
    case SETTINGS_RANDOM:
      return settingsRandom(action, state)
    case SETTINGS_TEXT_TO_SPEECH:
      return settingsTextToSpeech(action, state)
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
