import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { camelCase } from 'string-fn'
import { SHARED_SPEAK } from '../../constants'
import { speak } from '../../modules/speak'

export const sharedSpeakEpic = (
  action$: ActionsObservable<SharedSpeakAction>,
  store,
): Observable<any> =>
  action$.ofType(SHARED_SPEAK)
    .concatMap(action => {
      return new Observable(observer => {
        const { name } = store.getState().store

        const x: any = store.getState()

        const nameAsProperty = `${camelCase(name)}Store`
        const currentInstance = x[nameAsProperty].currentInstance

        const textToSpeakKey = `${action.payload.toLowerCase()}Part`

        const textToSpeak = currentInstance[textToSpeakKey]

        speak({
          language: action.payload,
          text: textToSpeak,
        })
        observer.complete()
      })
    })
