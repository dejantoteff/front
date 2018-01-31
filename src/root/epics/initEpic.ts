import { initReady } from './../actions';
import { INIT } from './../../constants';
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { getURL } from '../../common'

export const initEpic = (
  action$: ActionsObservable<InitAction>,
  store: ObservableStore,
  { getJSON },
): Observable<any> =>

  action$
    .ofType(INIT)
    .switchMap( () => getJSON(getURL()).map(initReady) )  
