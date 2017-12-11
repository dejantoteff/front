import { delay } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { sharedInit } from '../../common'
import {
  CHOOSE_WORD,
  CHOOSE_WORD_INIT,
  CHOOSE_WORD_INIT_READY,
  CHOOSE_WORD_NEXT,
  SET_DB, 
  SHORT_DELAY,
} from '../../constants'
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

      const db = store.getState().store.db
      const fillerWords = generateFillerWords(db)

      observer.next({ type: CHOOSE_WORD_INIT_READY, payload: { fillerWords, db } })

      delay(SHORT_DELAY).then(() => {
        observer.next({ type: CHOOSE_WORD_NEXT })
        observer.complete()
      })
    })
  })
}
