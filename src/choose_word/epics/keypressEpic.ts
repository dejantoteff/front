import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { check } from '../actions'

import {
  CHOOSE_WORD_LISTEN,
} from '../../constants'

import { replace } from 'rambdax'
import { next } from '../actions'

/**
 * It listens to arrow keypress, only when `listen` prop is `true`.
 * Followed arrow keys are `up, down, right`
 *
 * @param {ActionsObservable<ChooseWordListenAction>} action$
 * @param {any} store
 * @returns {Observable<any>} It emits `check` action on success
 */
export const keypressEpic = (
  action$: ActionsObservable<ChooseWordListenAction>,
  store,
): Observable<any> => {
  const keydownEvent = Observable.fromEvent(document, 'keydown')
  const listenEvent = action$.ofType(CHOOSE_WORD_LISTEN)

  const willObserve = keydownEvent.withLatestFrom(listenEvent)

  const final = willObserve.concatMap(([keydown, action]) => {

    return new Observable(observer => {
      const listen = store.getState().chooseWordStore.listen
      const keycode = (keydown as any).code

      if (!listen) {
        // When listen mode is off
        // next keypress triggers next instance action
        observer.next(next())
      }

      const condition = keycode.startsWith('Arrow') &&
        keycode !== 'ArrowLeft' &&
        listen

      const event = condition ?
        replace('Arrow', '', keycode).toUpperCase() :
        false

      if (event !== false) {

        observer.next(check(event))
      }

      observer.complete()
    })
  })

  return final
}
