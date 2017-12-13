import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import {
  NAVIGATION_TOGGLE,
  SETTINGS_RANDOM,
  SETTINGS_TEXT_TO_SPEECH,
} from '../../constants'

function getActionFromID(id: string, name: string) {
  switch (id) {
    case 'toggle-navigation':
      return { type: NAVIGATION_TOGGLE }
    case 'next':
      return { type: `${name}_NEXT` }
    case 'submit':
      return { type: `${name}_CHECK` }
    case 'random':
      return { type: SETTINGS_RANDOM }
    case 'texttospeech':
      return { type: SETTINGS_TEXT_TO_SPEECH }
    default:
      return false
  }
}

const SECOND = 2
const HEAD = 0
const MIN = 2
/**
 * It listens to arrow keypress, only when `listen` prop is `true`.
 * Followed arrow keys are `up, down, right`
 *
 * @param {ActionsObservable<InitAction>} action$
 * @param {any} store
 * @returns {Observable<any>} It emits `check` action on success
 */
export const clickEpic = (
  action$: ActionsObservable<InitAction>,
  store,
): Observable<any> => {

  const clickEvent = Observable.fromEvent(document, 'click')
  const listenEvent = action$.ofType('INIT')

  const willObserve = clickEvent.withLatestFrom(listenEvent)

  const final = willObserve.concatMap(([click, action]) => {

    return new Observable(observer => {
      const id = (click as any).path.length >= MIN && (click as any).path[SECOND].id ?
        (click as any).path[SECOND].id :
        (click as any).path[HEAD].id

      const { name } = store.getState().store
      const actionToEmit = getActionFromID(id, name)

      if (actionToEmit) {
        observer.next(actionToEmit)
      }

      observer.complete()
    })
  })

  return final
}
