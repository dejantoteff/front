import { ActionsObservable, combineEpics, Epic } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { debounceTime } from 'rxjs/operator/debounceTime'
import { CHOOSE_WORD_INIT, POUCH_READY, SET_DB } from '../../constants'
import { generateFillerWords } from '../generateFillerWords'

export const initEpic = (
  action$: ActionsObservable<ChooseWordInitAction>,
  store,
): Observable<any> =>

  action$.ofType(CHOOSE_WORD_INIT)
    .sample(action$.ofType(SET_DB))
    .concatMap(action => {
      return new Observable(observer => {
        observer.next({ type: 'ff', payload: {} })

        const fillerWords = generateFillerWords(store.getState().store.db)
        console.log(fillerWords)
        observer.complete()
      })
    })
