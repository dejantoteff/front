import {
  INIT_READY,
  LANGUAGE_CHANGE_CLICK,
  LANGUAGE_CHANGE_INIT,
  SETTINGS_RANDOM,
  SETTINGS_TEXT_TO_SPEECH,
  SHARED_ADD_POINTS_READY,
  SHARED_INIT,
} from '../constants'

import { getInitialState } from '../_helpers/getInitialState'
import { normalizeDB } from '../_helpers/normalizeDB'
import { USER_LOGOUT } from '../constants'

import { languageChangeClick } from './side_effects/languageChangeClick'
import { settingsRandom } from './side_effects/settingsRandom'
import { settingsTextToSpeech } from './side_effects/settingsTextToSpeech'

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
    case SHARED_ADD_POINTS_READY:
      return {
        ...state,
        points: action.payload,
      }
    /**
     * some application is mounted
     */
    case SHARED_INIT:
      return {
        ...state,
        name: action.payload,
      }
    case USER_LOGOUT:
      return getInitialState()
    default:
      return state
  }
}
