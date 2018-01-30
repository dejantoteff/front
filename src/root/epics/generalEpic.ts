import { ActionsObservable } from 'redux-observable'
import {
  CHOOSE_WORD_INIT_READY,
  CHOOSE_WORD_NEXT,
  LANGUAGE_CHANGE,
  NOTIFY_INFO,
} from '../../constants'

function getAction(action: Action): Action {
  switch (action.type) {
    case LANGUAGE_CHANGE:
      return { type: NOTIFY_INFO, payload: { ms: 1000, message: 'Language change' } }
    case CHOOSE_WORD_INIT_READY:
      return { type: CHOOSE_WORD_NEXT }
  }
}

/**
 * The goal is to reduce the number of epics
 * which only task is to wait for an action and emit a response
 *
 * @param {ActionsObservable<GeneralAction>} action$
 * @param {ObservableStore} store
 */
export const generalEpic = (
  action$: ActionsObservable<GeneralAction>,
  store: ObservableStore,
) =>
  action$
    .ofType(LANGUAGE_CHANGE, CHOOSE_WORD_INIT_READY)
    .map(getAction)
