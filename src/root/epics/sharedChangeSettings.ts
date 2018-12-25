import {
  LONG_DELAY,
  SETTINGS_RANDOM,
  SETTINGS_TEXT_TO_SPEECH,
} from '../../constants'

import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { camelCase } from 'string-fn'
import { getCommons } from '../../_modules/selectors'

const getNewDoc = (doc, action) => {
  if (action.type === SETTINGS_RANDOM) {

    return { ...doc, randomFlag: !doc.randomFlag }
  } else if (action.type === SETTINGS_TEXT_TO_SPEECH) {

    return { ...doc, textToSpeechFlag: !doc.textToSpeechFlag }
  }
}

export const sharedChangeSettingsEpic = (
  action$: ActionsObservable<SharedChangeSettingsAction>,
  store: ObservableStore,
): Observable<any> =>

  action$.ofType(SETTINGS_RANDOM, SETTINGS_TEXT_TO_SPEECH)
    .switchMap(action => {

      return new Observable(observer => {
        const { name } = getCommons(store)
        const resetAction = {
          type: `${camelCase(name)}@INIT`,
        }

        const { userDBCloud } = store.getState().store

        if (userDBCloud === undefined) {
          observer.next(resetAction)

          return observer.complete()
        }

        userDBCloud
          .get('data')
          .then((doc: any) => {
            const updatedDoc = getNewDoc(doc, action)

            userDBCloud
              .put(updatedDoc)
              .then(() => {
                observer.next(resetAction)
                observer.complete()
              })
        })
      })
    })
    .debounceTime(LONG_DELAY)
