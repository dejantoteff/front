import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { distance, distanceGerman } from 'string-fn'
import { getCommons } from '../../_modules/selectors'
import { WRITE_SENTENCE_CHECK } from '../../constants'
import { sharedAddPoints } from '../../root/actions'
import { step, setOkCorrect } from '../actions'

/**
 * Perform database filtering(in neccessary) before emitting `ready` and `next` actions
 */
export const checkEpic = (
  action$: ActionsObservable<WriteSentenceCheckAction>,
  store: ObservableStore,
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
        const len = inputState.trim().length

        const distanceMethod = fromLanguage === 'DE' ?
          distanceGerman :
          distance

        const distanceValue = distanceMethod(
          inputState.trim(),
          question[index].hidden,
        )

        // shorter words shouldn't score points
        ///////////////////////////
        const okLength = len >= 3
        const allowedDistance = len > 5 ? 1 : 0
        const okNext = distanceValue <= allowedDistance && okLength
        
        if (okNext) { 
          observer.next(sharedAddPoints(1))
        }

        observer.next(setOkCorrect(okNext))
        observer.next(step())

        observer.complete()
      })
    })
