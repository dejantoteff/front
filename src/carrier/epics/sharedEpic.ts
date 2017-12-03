import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { camelCase } from 'string-fn'
import { SHARED_SPEAK } from '../../constants'
import { listen } from '../../modules/listen'
import { speak } from '../../modules/speak'
import { next } from '../actions'

/**
 * It listens to arrow keypress, only when `listen` prop is `true`.
 * Followed arrow keys are `up, down, right`
 *
 * @param {ActionsObservable<ChooseWordListenAction>} action$
 * @param {any} store
 * @returns {Observable<any>} It emits `check` action on success
 */
export const sharedEpic = (
  action$: ActionsObservable<SharedAction>,
  store,
): Observable<any> =>
  action$.ofType(SHARED_SPEAK)
    .concatMap(action => {
      return new Observable(observer => {

        const {
          name,
        } = store.getState().store
        const x: any = store.getState()
        const nameAsProperty = `${camelCase(name)}Store`
        const textToSpeak = x[nameAsProperty].currentInstance.dePart
        listen().then(console.log)
        // speak({
        //   language: 'de',
        //   text: textToSpeak,
        // })
        observer.complete()
      })
    })
