import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { POUCH_READY, SET_DB, SHORT_DELAY } from '../../constants'
import { pluckRows } from '../helpers/pluckRows'

import {
  filter,
  pluck,
} from 'rambdax'

const MIN = 2

const setDB: SetDB = async (store): Promise<DBInstance[]> => {
  const allDocs = await store.dbLocal.allDocs({ include_docs: true })
  
  return pluckRows(allDocs.rows)
}

export const setEpic = (
  action$: ActionsObservable<PouchReadyAction>,
  store: ObservableStore,
  { getRequest },
): Observable<any> =>

  action$
    .ofType(POUCH_READY)
    .debounceTime(SHORT_DELAY)
    .concatMap(action => {

      return new Observable(observer => {
        Observable.fromPromise(setDB(store.getState().store)).subscribe(dbInstances => {
          observer.next({ type: SET_DB, payload: dbInstances })
          observer.complete()
        })
      })
    })
