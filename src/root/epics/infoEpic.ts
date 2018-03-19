import * as Driver from 'driver.js'
import { head, toLower } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { words } from 'string-fn'
import { infoSteps } from '../../_helpers/infoSteps'
import { INFO } from '../../constants'

function displayInfo(action: Action) {
  const namespace = words(action.payload)
    .map(head)
    .map(toLower)
    .join('')

  const steps = infoSteps(namespace)

  if (steps === undefined) {

    return
  }

  const driver = new Driver({
    animate: true,
    opacity: 0.85,
  })

  driver.defineSteps(steps)
  driver.start()
}

export const infoEpic = (
  action$: ActionsObservable<InfoAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(INFO)
    .do(displayInfo)
    .map(() => ({ type: 'infoEpic@IGNORE' }))
