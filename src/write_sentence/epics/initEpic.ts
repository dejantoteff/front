import {
  INIT_READY,
  SHORT_DELAY,
  WRITE_SENTENCE,
  WRITE_SENTENCE_INIT,
  WRITE_SENTENCE_INIT_READY,
  WRITE_SENTENCE_NEXT,
} from '../../constants'

import { delay, shuffle } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { getDB } from '../../_modules/getDB'
import { getCommons } from '../../_modules/selectors'
import { sharedInit } from '../../root/actions'

/**
 * Epic called from `componentDidMount`
 * Performs database filtering(if neccessary)_
 * before emitting `ready` and `next` actions
 */
export const initEpic = (
  action$: ActionsObservable<WriteSentenceInitAction>,
  store: ObservableStore,
  { getRequest },
): Observable<any> => {

  const init$ = action$.ofType(WRITE_SENTENCE_INIT)
  const db$ = action$.ofType(INIT_READY)

  return Observable.combineLatest(init$, db$).switchMap(action => {

    return new Observable(observer => {
      observer.next(sharedInit(WRITE_SENTENCE))

      const { randomFlag, fromLanguage, toLanguage } = getCommons(store)

      const { db } = store.getState().store

      /**
       * Filter out those DBInstance-s which_
       * cannot be used by this application
       */
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
