import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { getNextIndex } from '../../common'
import { WRITE_SENTENCE_STEP } from '../../constants'
import { setIndex, stop } from '../actions'

export const stepEpic = (
  action$: ActionsObservable<WriteSentenceStepAction>,
  store,
): Observable<any> =>
  action$.ofType(WRITE_SENTENCE_STEP)
    .switchMap(action => {

      return new Observable(observer => {
        
        const {
          index,
          question,
        } = store.getState().writeSentenceStore

        if (index + 1 === question.length) {

          observer.next(stop())
        } else {

          observer.next(setIndex())
        }

        observer.complete()
      })
    })
