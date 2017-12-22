import { delay } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { LANGUAGE_CHANGE, NOTIFY_INFO, SHORT_DELAY } from '../../constants'

function getActions(action: Action): Action {
  switch (action.type) {
    case LANGUAGE_CHANGE:
      return { type: NOTIFY_INFO, payload:{ms:1000, message: 'Language change'} }
  }
}


export const generalEpic = (
  action$: ActionsObservable<GeneralAction>,
  store: ObservableStore,
) =>
  action$
    .ofType(LANGUAGE_CHANGE)
    .map(getActions)

