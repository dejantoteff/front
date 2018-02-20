import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { DB_URL, INIT } from './../../constants'
import { initReady } from './../actions'

/**
 * Intializing database and evemtually user's data
 *
 * @param {ActionsObservable<InitAction>} action$
 * @param {ObservableStore} store
 * @param {any} { getJSON }
 * @returns {Observable<any>}
 */
export const initEpic = (
  action$: ActionsObservable<InitAction>,
  store: ObservableStore,
  {
    getJSON,
    getUserData,
    getPouchDB,
  },
): Observable<any> =>

  action$
    .ofType(INIT)
    .switchMap(() => new Observable(observer => {
      const stream$ = Observable.forkJoin(
        getJSON(DB_URL), getUserData(getPouchDB),
      )

      stream$.subscribe(([received, userData]) => {
        observer.next(initReady({ received, userData }))
        observer.complete()
      })

    }))
