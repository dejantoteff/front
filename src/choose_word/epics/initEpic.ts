import {
  CHOOSE_WORD,
  CHOOSE_WORD_INIT,
  CHOOSE_WORD_INIT_READY,
  INIT_READY,
} from '../../constants'

import { identity, shuffle } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { getDB } from '../../_modules/getDB'
import { getCommons, sharedInit } from '../../common'
import { generateFillerWords } from '../_helpers/generateFillerWords'

/**
 * It is called after the database is set and the component is mounted.
 *
 * @param {ActionsObservable<ChooseWordInitAction>} action$
 * @param {ObservableStore} store
 * @returns {Observable<any>}
 */
export const initEpic = (
  action$: ActionsObservable<ChooseWordInitAction>,
  store: ObservableStore,
): Observable<any> => {
  const db$ = action$.ofType(INIT_READY)
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

      observer.complete()
    })
  })
}
