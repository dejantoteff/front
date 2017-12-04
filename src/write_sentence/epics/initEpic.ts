import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { WRITE_SENTENCE_INIT, SET_DB, WRITE_SENTENCE, WRITE_SENTENCE_INIT_READY, WRITE_SENTENCE_NEXT, SMALL_DELAY } from '../../constants'
import { delay } from 'rambdax'
import { sharedInit } from '../../common'

/**
 * Perform database filtering(in neccessary) before emitting `ready` and `next` actions
 * 
 * @param {any} observer 
 */
export const initEpic = (
  action$: ActionsObservable<WriteSentenceInitAction>,
  store,
  { getRequest },
): Observable<any> =>

  action$.ofType(WRITE_SENTENCE_INIT)
  .sample(action$.ofType(SET_DB))
  .switchMap(action => {

    return new Observable(observer => {
      observer.next(sharedInit(WRITE_SENTENCE))

      const db = store.getState().store.db

      observer.next({ type: WRITE_SENTENCE_INIT_READY, payload: db })

      delay(SMALL_DELAY).then(() => {
        observer.next({ type: WRITE_SENTENCE_NEXT })
        observer.complete()
      })
    })
  })
