import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { next } from '../actions'

/**
 * It listens to arrow keypress, only when `listen` prop is `true`.
 * Followed arrow keys are `up, down, right`
 *
 * @param {ActionsObservable<ChooseWordListenAction>} action$
 * @param {any} store
 * @returns {Observable<any>} It emits `check` action on success
 */
export const initEpic = (
  action$: ActionsObservable<InitAction>,
  store,
): Observable<any> => {
  const clickEvent = Observable.fromEvent(document, 'click')
  const listenEvent = action$.ofType('INIT')

  const willObserve = clickEvent.withLatestFrom(listenEvent)

  const final = willObserve.concatMap(([click, action]) => {
    
    return new Observable(observer => {
      const id = (click as any).path[0].id

      console.log(store.getState().store);
      
      if(id==='next'){
        observer.next(next())
      }

      observer.complete()
    })
  })

  return final
}
