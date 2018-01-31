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
import { sharedAddPoints } from './side_effects/sharedAddPoints'
import { languageChangeClick } from './side_effects/languageChangeClick'

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
    case LANGUAGE_CHANGE_INIT:
    // language change icon is clicked
    return {
      ...state,
      toggleLanguage: !state.toggleLanguage,
    }
    case LANGUAGE_CHANGE_CLICK:
    // new language pair is selected
      return languageChangeClick(action, state)
    case SET_DB:
    // database is ready for use
      return {
        ...state,
        db: action.payload,
      }
    case SETTINGS_RANDOM:
    // random icon is clicked
      return settingsRandom(action, state)
    // text-tp-speech icon is clicked
    case SETTINGS_TEXT_TO_SPEECH:
      return settingsTextToSpeech(action, state)
    // user scores some points
    case SHARED_ADD_POINTS:
      return sharedAddPoints(action, state)
    // some application is mounted
    case SHARED_INIT:
      return {
        ...state,
        instructions: getInstructions(action.payload),
        name: action.payload,
      }
    // user is logged or user data is changed  
    case POUCH_USER_READY:
    case POUCH_USER_CHANGE:
      return {
        ...state,
        points: action.payload.data.points,
        randomFlag: action.payload.data.randomFlag,
        textToSpeechFlag: action.payload.data.textToSpeechFlag,
      }
    // PouchDB is ready for use  
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
