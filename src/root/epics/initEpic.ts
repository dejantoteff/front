import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { getURL } from '../../common'
import { INIT, INIT_READY } from './../../constants'
import { initReady } from './../actions'
/**
 *
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
  },
): Observable<any> =>

  action$
    .ofType(INIT)
    .switchMap(() => new Observable(observer => {
      const stream$ = Observable.forkJoin(getJSON(getURL()), getUserData())

      stream$.subscribe(([received, userData]) => {
        observer.next(initReady({ received, userData }))
        observer.complete()
      })
    }))
