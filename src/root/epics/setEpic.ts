import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { POUCH_READY, SET_DB, SHORT_DELAY } from '../../constants'

import {
  compose,
  filter,
  pluck,
} from 'rambdax'

const MIN = 2

const setDB: SetDB = async (store): Promise<DBInstance[]> => {
  const allDocs = await store.dbLocal.allDocs({ include_docs: true })
  const plucked = pluck<DBInstance>('doc', allDocs.rows)
  
  return filter((x: DBInstance) => {
    const first: boolean = typeof x.imageSrc === 'string' && x.imageSrc.length > MIN
    const second: boolean = typeof x.enPart === 'string' && x.enPart.length > MIN
    const third: boolean = typeof x.dePart === 'string' && x.dePart.length > MIN
    const fourth: boolean = typeof x.deWord === 'string' && x.deWord.length > MIN
    const fifth: boolean = typeof x.enWord === 'string' && x.enWord.length > MIN

    return first && second && third && fourth && fifth
  }, plucked)
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
