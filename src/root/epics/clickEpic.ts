import { range } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import {
  LANGUAGE_CHANGE_INIT,
  NAVIGATION_TOGGLE,
  SETTINGS_RANDOM,
  SETTINGS_TEXT_TO_SPEECH,
} from '../../constants'

function getActionFromID(id: string, name: string): false | Action {
  switch (id) {
    case 'languagechange':
      return { type: LANGUAGE_CHANGE_INIT }
    case 'toggle-navigation':
      return { type: NAVIGATION_TOGGLE }
    case 'next':
      return { type: `${name}@NEXT` }
    case 'submit':
      return { type: `${name}@CHECK` }
    case 'random':
      return { type: SETTINGS_RANDOM }
    case 'texttospeech':
      return { type: SETTINGS_TEXT_TO_SPEECH }
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
 * It listens for any click events.
 * If there is event handler, action is emitted.
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
      const actionToEmit = getActionFromID(id, name)

      if (actionToEmit === false) {

        return observer.complete()
      }

      observer.next(actionToEmit)
      observer.complete()
    })
  })

}
