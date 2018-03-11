import {
  INIT_READY,
  LEARNING_MEME,
  LEARNING_MEME_INIT,
  LEARNING_MEME_INIT_READY,
  LEARNING_MEME_NEXT,
  SHORT_DELAY,
} from '../../constants'

import { delay, shuffle } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { getDB } from '../../_modules/getDB'
import { getCommons } from '../../_modules/selectors'
import { sharedInit } from '../../root/actions'

export const initEpic = (
  action$: ActionsObservable<LearningMemeInitAction>,
  store,
): Observable<any> => {
  const db$ = action$.ofType(INIT_READY)
  const init$ = action$.ofType(LEARNING_MEME_INIT)

  return Observable.combineLatest(init$, db$)
    .switchMap(action => {

    return new Observable(observer => {
      observer.next(sharedInit(LEARNING_MEME))

      const { randomFlag, fromLanguage, toLanguage } = getCommons(store)
      const { db } = store.getState().store

      const dbValue = getDB({ db, fromLanguage, toLanguage })

      const payload = randomFlag ?
        shuffle(dbValue) :
        dbValue

      observer.next({
        payload,
        type: LEARNING_MEME_INIT_READY,
      })

      delay(SHORT_DELAY).then(() => {
        observer.next({ type: LEARNING_MEME_NEXT })
        observer.complete()
      })
    })
  })
}
