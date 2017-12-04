import { delay } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { wordsX } from 'string-fn'
import { getNextIndex } from '../../common'
import { check } from '../actions'
import { getFillers } from '../helpers/getFillers'
import { chooseWordStore } from '../reducers'

import {
  CHOOSE_WORD_LISTEN,
  CHOOSE_WORD_NEXT,
  CHOOSE_WORD_SET_NEXT,
  SMALL_DELAY,
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

      if (event) {

        observer.next(check(event))
      }

      observer.complete()
    })
  })

  return final
}
