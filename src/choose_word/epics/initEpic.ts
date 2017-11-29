import { ActionsObservable, combineEpics, Epic } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { debounceTime } from 'rxjs/operator/debounceTime'
import { CHOOSE_WORD_INIT, CHOOSE_WORD_INIT_READY, POUCH_READY, SET_DB } from '../../constants'
import { generateFillerWords } from '../generateFillerWords'

export const initEpic = (
  action$: ActionsObservable<ChooseWordInitAction>,
  store,
): Observable<any> =>

  action$.ofType(CHOOSE_WORD_INIT)
    .sample(action$.ofType(SET_DB))
    .concatMap(action => {
      return new Observable(observer => {

        const fillerWords = generateFillerWords(store.getState().store.db)
        observer.next({ type: CHOOSE_WORD_INIT_READY, payload: fillerWords })
        console.log(fillerWords)
        observer.complete()
      })
    })
