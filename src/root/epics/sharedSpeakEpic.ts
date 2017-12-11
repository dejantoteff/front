import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { camelCase } from 'string-fn'
import { SHARED_SPEAK, LONG_DELAY } from '../../constants'
import { speak } from '../../modules/speak'
import { clearTimeout } from 'timers';

let busy = false

export const sharedSpeakEpic = (
  action$: ActionsObservable<SharedSpeakAction>,
  store,
): Observable<any> =>
  action$.ofType(SHARED_SPEAK)
    .switchMap(action => {
      return new Observable(observer => {

        if (busy) {
          console.log('BUSY');
          return observer.complete()
        }

        busy = true

        const { name } = store.getState().store

        const nameAsProperty = `${camelCase(name)}Store`
        const currentInstance = (store.getState())[nameAsProperty].currentInstance

        const textToSpeakKey = `${action.payload.toLowerCase()}Part`

        const textToSpeak = currentInstance[textToSpeakKey]

        speak({
          language: action.payload,
          text: textToSpeak,
        }).then(() => {

          console.log('RESOLVED');
            
          busy = false
          
          observer.complete()
        
        })
      })
    })
