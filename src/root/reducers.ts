import {
  INIT_READY,
  LANGUAGE_CHANGE_CLICK,
  LANGUAGE_CHANGE_INIT,
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
      // init process is ready
      // user's reducer also listens for the same action
      return {
        ...state,
        ...action.payload.userData.forRootReducer,
        db: normalizeDB(action.payload.received.rows),
        ready: true,
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
    // user is logged through login form
    case POUCH_USER_READY:
      return {
        ...state,
        points: action.payload.data.points,
        randomFlag: action.payload.data.randomFlag,
        textToSpeechFlag: action.payload.data.textToSpeechFlag,
        userDBCloud: action.payload.userDBCloud,
      }
    default:
      return state
  }
}
