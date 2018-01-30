import { delay, range } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { camelCase } from 'string-fn'
import { SHORT_DELAY } from '../../constants'
import {
  LANGUAGE_CHANGE,
  LANGUAGE_CHANGE_INIT,
  NAVIGATION_TOGGLE,
  SETTINGS_RANDOM,
  SETTINGS_TEXT_TO_SPEECH,
} from '../../constants'

function getActionsFromID(id: string, name: string): false | Action[] {
  switch (id) {
    case 'languagechange':
      return [{ type: LANGUAGE_CHANGE_INIT }]
    case 'toggle-navigation':
      return [{ type: NAVIGATION_TOGGLE }]
    case 'next':
      return [{ type: `${name}_NEXT` }]
    case 'submit':
      return [{ type: `${name}_CHECK` }]
    case 'random':
      return [{ type: SETTINGS_RANDOM }]
    case 'texttospeech':
      return [{ type: SETTINGS_TEXT_TO_SPEECH }]
    default:
      return false
  }
}

const MIN = 2

function getID(click: any) {
  let willReturn = ''
  for (const i of range(0, MIN + 1)) {
    if (click.path[i].id) {
      willReturn = click.path[i].id
    }
  }

  return willReturn
}

/**
 * It listens for any click events. If there is event handler,
 * then actions to emit are generated.
 * If there is second action, it is emitted after SHORT_DELAY
 * It is done so any rendering that will happen to have time to complete.
 * @param {ActionsObservable<InitAction>} action$
 * @param {any} store
 * @returns {Observable<any>} It emits actions if the event is expected
 */
export const clickEpic = (
  action$: ActionsObservable<InitAction>,
  store: ObservableStore,
): Observable<any> => {

  const click$ = Observable.fromEvent(document, 'click')

  return click$.switchMap(click => {

    return new Observable(observer => {
      const id = (click as any).path.length >= MIN ?
        getID(click) :
        ''

      const { name } = store.getState().store
      const actionsToEmit = getActionsFromID(id, name)

      if (actionsToEmit === false) {

        return observer.complete()
      }

      const promised = actionsToEmit.map((singleAction, i) => {

        return new Promise(resolve => {
          delay(SHORT_DELAY * i).then(() => {
            observer.next(singleAction)
            resolve()
          })
        })
      })

      Promise.all(promised)
        .then(() => {
          observer.complete()
        })
    })
  })

}
