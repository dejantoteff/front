import {
  INIT_READY,
  LANGUAGE_CHANGE_CLICK,
  LANGUAGE_CHANGE_INIT,
  POUCH_READY,
  POUCH_USER_CHANGE,
  POUCH_USER_READY,
  SETTINGS_RANDOM,
  SETTINGS_TEXT_TO_SPEECH,
  SHARED_ADD_POINTS,
  SHARED_INIT,
} from '../constants'
import { getInstructions } from '../modules/getInstructions'
import { getInitialState } from './helpers/getInitialState'
import { normalizeDB } from './helpers/normalizeDB'
import { languageChangeClick } from './side_effects/languageChangeClick'
import { settingsRandom } from './side_effects/settingsRandom'
import { settingsTextToSpeech } from './side_effects/settingsTextToSpeech'
import { sharedAddPoints } from './side_effects/sharedAddPoints'

export function store(
  state: Store = getInitialState(),
  action: Action,
): Store {

  switch (action.type) {
    case INIT_READY:
      return {
        ...state,
        ...action.payload.userData,
        ready: true,
        db: normalizeDB(action.payload.received.rows),
      }
    case LANGUAGE_CHANGE_INIT:
      // language change icon is clicked
      return {
        ...state,
        toggleLanguage: !state.toggleLanguage,
      }
    case LANGUAGE_CHANGE_CLICK:
      // new language pair is selected
      return languageChangeClick(action, state)
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
    default:
      return state
  }
}
