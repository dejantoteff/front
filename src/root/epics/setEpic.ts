import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { POUCH_READY, SET_DB, SMALL_DELAY } from '../../constants'

import {
  compose,
  filter,
  pluck,
  prepend,
} from 'rambdax'

const setDB: SetDB = async store => {
  const allDocs = await store.dbLocal.allDocs({ include_docs: true })

  return compose(
    filter((x: DBInstance) => typeof x.imageSrc === 'string'),
    pluck('doc'),
  )(allDocs.rows)
}

const mockDBInstance: DBInstance = {
  dePart: 'Ich a arbeite hier',
  enPart: 'I work here',
}

export const setEpic = (
  action$: ActionsObservable<PouchReadyAction>,
  store,
  { getRequest },
): Observable<any> =>

  action$
    .ofType(POUCH_READY)
    .debounceTime(SMALL_DELAY)
    .concatMap(action => {

      return new Observable(observer => {
        Observable.fromPromise(setDB(store.getState().store)).subscribe(response => {
          observer.next({ type: SET_DB, payload: prepend(mockDBInstance, response) })
          observer.complete()
        })
      })
    })
