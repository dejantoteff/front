import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { SETTINGS_RANDOM, SETTINGS_TEXT_TO_SPEECH, LONG_DELAY } from '../../constants'

const getNewDoc = (doc, action) => {
  if(action.type === SETTINGS_RANDOM){
    return {...doc, randomFlag: !doc.randomFlag}
  }else if(action.type === SETTINGS_TEXT_TO_SPEECH){
    return {...doc, textToSpeechFlag: !doc.textToSpeechFlag}
  }
}

export const sharedChangeSettingsEpic = (
  action$: ActionsObservable<SharedChangeSettingsAction>,
  store,
): Observable<any> =>

  action$.ofType(SETTINGS_RANDOM, SETTINGS_TEXT_TO_SPEECH)
    .switchMap(action => {

      return new Observable(observer => {
        const { userDB } = store.getState().userStore

        if (userDB === undefined) {
          console.log(action);
          
          return observer.complete()
        }

        userDB.get('data').then((doc: any) => {
          const updatedDoc = getNewDoc(doc,action)

          userDB.put(updatedDoc).then(() => {
            observer.complete()
          })
        })
      })
    })
    .debounceTime(LONG_DELAY)
