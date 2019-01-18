import { getter } from 'client-helpers'
import { path } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'

import { DB_URL, INIT } from './../../constants'
import { initReady } from './../actions'

function filterChildLock(database: any){
  const childLockFlag = getter('child')
  if (!childLockFlag) return database

  const newRows = database.rows.filter(
    path('doc.pcFlag'),
  )

  return {rows: newRows}
}

// Intializing database
// a bit more complex as it holded user init process
// ============================================
export const initEpic = (
  action$: ActionsObservable<InitAction>,
  store: ObservableStore,
  { getJSON },
): Observable<any> =>
  action$
    .ofType(INIT)
    .switchMap(() => new Observable(observer => {
      const stream$ = Observable.from(getJSON(DB_URL))

      stream$.subscribe((received) => {
        observer.next(
          initReady({
            received: filterChildLock(received),
          }),
        )
        observer.complete()
      })
    }))
