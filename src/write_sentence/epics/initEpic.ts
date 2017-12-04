import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { WRITE_SENTENCE_INIT } from '../../constants';

export const initEpic = (
  action$: ActionsObservable<WriteSentenceInitAction>,
  store,
  { getRequest },
): Observable<any> =>
  action$
    .ofType(WRITE_SENTENCE_INIT)
    .concatMap(action => {
      return new Observable(observer => {
        observer.complete()
      })
    })
