import { delay, identity, shuffle } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { getCommons, sharedInit } from '../../common'
import {
  CHOOSE_WORD,
  CHOOSE_WORD_INIT,
  CHOOSE_WORD_INIT_READY,
  CHOOSE_WORD_NEXT,
  SET_DB,
  SHORT_DELAY,
} from '../../constants'
import { getDB } from '../../modules/getDB'
import { generateFillerWords } from '../helpers/generateFillerWords'

export const initEpic = (
  action$: ActionsObservable<ChooseWordInitAction>,
  store,
): Observable<any> => {
  const db$ = action$.ofType(SET_DB)
  const init$ = action$.ofType(CHOOSE_WORD_INIT)

  const willListen = Observable.combineLatest(db$, init$)

  return willListen.switchMap(action => {

    return new Observable(observer => {
      observer.next(sharedInit(CHOOSE_WORD))

      const { randomFlag, fromLanguage, toLanguage } = getCommons(store)

      const { db } = store.getState().store

      const dbValue = getDB({ db, fromLanguage, toLanguage })

      const fn = randomFlag ?
        shuffle :
        identity

      const fillerWords = generateFillerWords(dbValue)

      observer.next({
        payload: {
          db: fn(dbValue),
          fillerWords: fillerWords,
        },
        type: CHOOSE_WORD_INIT_READY,
      })

      delay(SHORT_DELAY).then(() => {
        observer.next({ type: CHOOSE_WORD_NEXT })
        observer.complete()
      })
    })
  })
}
