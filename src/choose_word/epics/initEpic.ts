import { ActionsObservable, combineEpics, Epic } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { CHOOSE_WORD_INIT, SET_DB } from '../../constants'

export const initEpic = (
  action$: ActionsObservable<ChooseWordInitAction>,
  store,
  { getRequest },
): Observable<any> =>

  action$.ofType(CHOOSE_WORD_INIT)
    .concatMap(action => {
      return new Observable(observer => {
        observer.complete()
      })
    })
    .skipUntil(action$.ofType(SET_DB))
