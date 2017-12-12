import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { POUCH_READY, SET_DB, SHORT_DELAY } from '../../constants'

import {
  compose,
  filter,
  pluck,
} from 'rambdax'

const setDB: SetDB = async (store): Promise<DBInstance[]> => {
  const allDocs = await store.dbLocal.allDocs({ include_docs: true })

  return compose(
    filter((x: DBInstance) => {
      const first: boolean = typeof x.imageSrc === 'string' && x.imageSrc.length>2
      const second: boolean = typeof x.enPart === 'string' && x.enPart.length>2
      const third: boolean = typeof x.dePart === 'string' && x.dePart.length>2
      const fourth: boolean = typeof x.deWord === 'string' && x.deWord.length>2
      const fifth: boolean = typeof x.enWord === 'string' && x.enWord.length>2

      return  first && second && third && fourth && fifth
    }),
    pluck('doc'),
  )(allDocs.rows)
}

export const setEpic = (
  action$: ActionsObservable<PouchReadyAction>,
  store,
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
