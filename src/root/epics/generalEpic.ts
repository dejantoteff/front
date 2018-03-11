import {
  CHOOSE_WORD_INIT_READY,
  CHOOSE_WORD_NEXT,
  LANGUAGE_CHANGE_CLICK,
  ROUTER_CHANGE,
} from '../../constants'

import { ActionsObservable } from 'redux-observable'
import { camelCase } from 'string-fn'

function getAction(action: Action, store: ObservableStore): Action {
  switch (action.type) {
    case CHOOSE_WORD_INIT_READY:
      return { type: CHOOSE_WORD_NEXT }
    case LANGUAGE_CHANGE_CLICK:
      return { type: `${camelCase(store.getState().store.name)}@INIT` }
    case ROUTER_CHANGE:
      return { type: `${camelCase(store.getState().store.name)}@UNMOUNT` }
  }
}

const allTypes: GeneralTypes[] = [
  LANGUAGE_CHANGE_CLICK,
  CHOOSE_WORD_INIT_READY,
  ROUTER_CHANGE,
]

/**
 * The goal is to reduce the number of epics
 * which only task is to wait for an action and emit a response
 */
export const generalEpic = (
  action$: ActionsObservable<GeneralAction>,
  store: ObservableStore,
) =>
  action$
    .ofType(...allTypes)
    .map(action => getAction(action, store))
