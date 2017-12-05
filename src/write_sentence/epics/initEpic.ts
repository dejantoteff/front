import { delay } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { sharedInit } from '../../common'
import { SET_DB, SMALL_DELAY, WRITE_SENTENCE, WRITE_SENTENCE_INIT, WRITE_SENTENCE_INIT_READY, WRITE_SENTENCE_NEXT } from '../../constants'

/**
 * Perform database filtering(in neccessary) before emitting `ready` and `next` actions
 *
 * @param {any} observer
 */
export const initEpic = (
  action$: ActionsObservable<WriteSentenceInitAction>,
  store,
  { getRequest },
): Observable<any> => {

  const actionEvent = action$.ofType(WRITE_SENTENCE_INIT)
  const dbEvent = action$.ofType(SET_DB)

  const willListen = Observable.zip(actionEvent, dbEvent)

  return willListen.switchMap(action => {

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
}
