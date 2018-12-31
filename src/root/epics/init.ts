import { getter } from 'client-helpers'
import { path } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'

import { DB_URL, INIT } from './../../constants'
import { initReady } from './../actions'

function filterChildLock(database){
  const childLockFlag = getter('child')
  if (!childLockFlag) { return database }

  const newRows = database.rows.filter(
    path('doc.pcFlag'),
  )

  return {rows: newRows}
}

/**
 * Intializing database and evemtually user's data
 */
export const initEpic = (
  action$: ActionsObservable<InitAction>,
  store: ObservableStore,
  { getJSON, getUserData, getPouchDB },
): Observable<any> =>
  action$
    .ofType(INIT)
    .switchMap(() => new Observable(observer => {
      const stream$ = Observable.forkJoin(
        getJSON(DB_URL),
        getUserData(getPouchDB),
      )

      stream$.subscribe(([received, userData]) => {

        observer.next(
          initReady({
            received: filterChildLock(received),
            userData,
          }),
        )
        observer.complete()
      })
    }))
