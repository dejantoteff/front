import {
  LANGUAGE_CHANGE_CLICK,
} from '../../constants'

import { ActionsObservable } from 'redux-observable'
import { notifyInfo } from '../actions'

function expandLanguage(x: string){
  switch (x) {
    case 'DE':
      return 'German'
    case 'BG':
      return 'Bulgarian'
    case 'EN':
      return 'English'
  }
}

function whenLanguageChange(action: Action){
  const from = expandLanguage(action.payload.from)
  const to = expandLanguage(action.payload.to)

  return {
    ms: 1500,
    message: `Now language direction is from '${from}' to '${to}'`,
  }
}

function getAction(action: Action): Action {

  switch (action.type) {
    case LANGUAGE_CHANGE_CLICK:

      return notifyInfo(
        whenLanguageChange(action),
      )
  }
}

const allTypes: NotifyTypes[] = [
  LANGUAGE_CHANGE_CLICK,
]

/**
 * Sometimes we need to display notification
 * based upon incoming actions
 */
export const notifyEpic = (
  action$: ActionsObservable<NotifyAction>,
  store: ObservableStore,
) =>
  action$
    .ofType(...allTypes)
    .map(getAction)
