import { delay, shuffle } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { getCommons, sharedInit } from '../../common'
import {
  INIT_READY,
  SHORT_DELAY,
  WRITE_SENTENCE,
  WRITE_SENTENCE_INIT,
  WRITE_SENTENCE_INIT_READY,
  WRITE_SENTENCE_NEXT,
} from '../../constants'
import { getDB } from '../../modules/getDB'

/**
 * Perform database filtering(in neccessary) before emitting `ready` and `next` actions
 *
 * @param {any} observer
 */
export const initEpic = (
  action$: ActionsObservable<WriteSentenceInitAction>,
  store: ObservableStore,
  { getRequest },
): Observable<any> => {

  const init$ = action$.ofType(WRITE_SENTENCE_INIT)
  const db$ = action$.ofType(INIT_READY)

  const willListen = Observable.combineLatest(init$, db$)

  return willListen.switchMap(action => {

    return new Observable(observer => {
      observer.next(sharedInit(WRITE_SENTENCE))

      const { randomFlag, fromLanguage, toLanguage } = getCommons(store)

      const { db } = store.getState().store
      const dbValue = getDB({ db, fromLanguage, toLanguage })

      const payload = randomFlag ?
        shuffle(dbValue) :
        dbValue

      observer.next({ type: WRITE_SENTENCE_INIT_READY, payload })

      delay(SHORT_DELAY).then(() => {
        observer.next({ type: WRITE_SENTENCE_NEXT })
        observer.complete()
      })
    })
  })
}
