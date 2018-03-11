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
import { getCommons } from '../../_modules/selectors'
import { sharedInit } from '../../root/actions'
import { generateFillerWords } from '../_helpers/generateFillerWords'

/**
 * It is called after the database is set and the component is mounted.
 */
export const initEpic = (
  action$: ActionsObservable<ChooseWordInitAction>,
  store: ObservableStore,
): Observable<any> => {
  const db$ = action$.ofType(INIT_READY)
  const init$ = action$.ofType(CHOOSE_WORD_INIT)

  return Observable.combineLatest(db$, init$).switchMap(action =>
    new Observable(observer => {
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
  )
}
