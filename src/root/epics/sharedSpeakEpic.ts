import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { camelCase } from 'string-fn'
import { getCommons } from '../../common'
import { SHARED_SPEAK } from '../../constants'
import { speak } from '../../modules/speak'

let busy = false

export const sharedSpeakEpic = (
  action$: ActionsObservable<SharedSpeakAction>,
  store,
): Observable<any> =>
  action$.ofType(SHARED_SPEAK)
    .switchMap(action => {
      return new Observable(observer => {

        if (busy) {
          console.log('BUSY')

          return observer.complete()
        }

        busy = true
        const { fromLanguage, toLanguage } = getCommons(store)
        const { name } = store.getState().store

        const nameAsProperty = `${camelCase(name)}Store`
        const currentInstance = (store.getState())[nameAsProperty].currentInstance

        const textToSpeak = currentInstance[action.payload]
        console.log(textToSpeak, currentInstance, action)

        const languageToSpeak = action.payload === 'fromPart' ?
          fromLanguage :
          toLanguage

        speak({
          language: languageToSpeak,
          text: textToSpeak,
        }).then(() => {

          console.log('RESOLVED')

          busy = false

          observer.complete()

        })
      })
    })
