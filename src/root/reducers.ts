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

import { getInitialState } from '../_helpers/getInitialState'
import { normalizeDB } from '../_helpers/normalizeDB'
import { getInstructions } from '../_modules/getInstructions'
import { USER_LOGOUT } from '../constants'
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
      /**
       * init process is ready
       * user's reducer also listens for the same action
       */
      return {
        ...state,
        ...action.payload.userData.forRootReducer,
        db: normalizeDB(action.payload.received.rows),
        ready: true,
      }
    case LANGUAGE_CHANGE_INIT:
      /**
       * language change icon is clicked
       */
      return {
        ...state,
        toggleLanguage: !state.toggleLanguage,
      }
    case LANGUAGE_CHANGE_CLICK:
      /**
       * new language pair is selected
       */
      return languageChangeClick(action, state)
    case SETTINGS_RANDOM:
      return settingsRandom(action, state)
    case SETTINGS_TEXT_TO_SPEECH:
      return settingsTextToSpeech(action, state)
    case SHARED_ADD_POINTS:
      return sharedAddPoints(action, state)
    /**
     * some application is mounted
     */
    case SHARED_INIT:
      return {
        ...state,
        instructions: getInstructions(action.payload),
        name: action.payload,
      }
    /**
     * user is logged through login form
     */
    case POUCH_USER_READY:
      return {
        ...state,
        logged: true,
        points: action.payload.data.points,
        randomFlag: action.payload.data.randomFlag,
        textToSpeechFlag: action.payload.data.textToSpeechFlag,
        userDBCloud: action.payload.userDBCloud,
      }
    case USER_LOGOUT:
      return getInitialState()
    default:
      return state
  }
}
