import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { WRITE_SENTENCE_CHECK } from '../../constants'
import { distanceGerman } from 'string-fn'
import { sharedAddPoints } from '../../common';
import { step } from '../actions';

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

      const {
        inputState,
        question,
        index
      } = store.getState().writeSentenceStore
      
      console.log(inputState, question);

      const distance = distanceGerman(
        inputState.trim(),
        question[index].hidden
      )

      console.log(distance);
      if(distance<=1){
        observer.next(sharedAddPoints(1))
      }
      observer.next(step())

      observer.complete()
    })
  })