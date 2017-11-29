import { delay } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import {
  CHOOSE_WORD_INIT,
  CHOOSE_WORD_INIT_READY,
  CHOOSE_WORD_NEXT,
  SET_DB, SMALL_DELAY,
} from '../../constants'
import { generateFillerWords } from '../helpers/generateFillerWords'

export const initEpic = (
  action$: ActionsObservable<ChooseWordInitAction>,
  store,
): Observable<any> =>

  action$.ofType(CHOOSE_WORD_INIT)
    .sample(action$.ofType(SET_DB))
    .switchMap(action => {
      return new Observable(observer => {

        const db = store.getState().store.db
        const fillerWords = generateFillerWords(db)

        observer.next({ type: CHOOSE_WORD_INIT_READY, payload: { fillerWords, db } })

        delay(SMALL_DELAY).then(() => {
          observer.next({ type: CHOOSE_WORD_NEXT })
          observer.complete()
        })
      })
    })
