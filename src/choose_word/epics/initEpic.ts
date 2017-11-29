import { delay } from 'rambdax'
import { ActionsObservable, combineEpics, Epic } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { debounceTime } from 'rxjs/operator/debounceTime'
import { CHOOSE_WORD_INIT, CHOOSE_WORD_INIT_READY, CHOOSE_WORD_NEXT, POUCH_READY, SET_DB, SMALL_DELAY } from '../../constants'
import { generateFillerWords } from '../generateFillerWords'

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
        
        observer.next({ type: CHOOSE_WORD_INIT_READY, payload: {fillerWords, db } })
        
        delay(SMALL_DELAY).then(()=>{
          observer.next({ type: CHOOSE_WORD_NEXT })
          observer.complete()
        })
      })
    })
