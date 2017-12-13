import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { distance, distanceGerman } from 'string-fn'
import { getCommons, sharedAddPoints } from '../../common'
import { WRITE_SENTENCE_CHECK } from '../../constants'
import { step } from '../actions'

/**
 * Perform database filtering(in neccessary) before emitting `ready` and `next` actions
 *
 * @param {any} observer
 */
export const checkEpic = (
  action$: ActionsObservable<WriteSentenceCheckAction>,
  store,
): Observable<any> =>

  action$.ofType(WRITE_SENTENCE_CHECK)
    .switchMap(action => {

      return new Observable(observer => {
        const { fromLanguage } = getCommons(store)

        const {
          inputState,
          question,
          index,
        } = store.getState().writeSentenceStore

        const distanceMethod = fromLanguage === 'DE' ?
          distanceGerman :
          distance

        const distanceValue = distanceMethod(
          inputState.trim(),
          question[index].hidden,
        )

        if (distanceValue <= 1) {

          observer.next(sharedAddPoints(1))

        }
        observer.next(step())

        observer.complete()
      })
    })
