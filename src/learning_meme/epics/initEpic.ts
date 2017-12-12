import { delay, shuffle } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { sharedInit, getCommons } from '../../common'
import { getDB } from '../../modules/getDB'
import {
  LEARNING_MEME,
  LEARNING_MEME_INIT,
  LEARNING_MEME_INIT_READY,
  LEARNING_MEME_NEXT,
  SET_DB,
  SHORT_DELAY,
} from '../../constants'

export const initEpic = (
  action$: ActionsObservable<LearningMemeInitAction>,
  store,
): Observable<any> => {
  const init$ = action$.ofType(LEARNING_MEME_INIT)
  const db$ = action$.ofType(SET_DB)

  const willListen = Observable.combineLatest(init$, db$)

  return willListen.switchMap(action => {

    return new Observable(observer => {
      observer.next(sharedInit(LEARNING_MEME))
      const { fromLanguage, toLanguage} = getCommons(store)
      const {randomFlag, db} = store.getState().store

      const payloadFirst = randomFlag ?
        shuffle(db) :
        db

      const payload = getDB({db, fromLanguage, toLanguage}) 

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
