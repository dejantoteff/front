import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { GUESS_WORD_INIT } from '../../constants'

export async function fn(store: ObservableStore): Promise<any> {
  try{
    const state = store.getState()
    console.log(state, state.guessWordStore);
  
  }catch(err){
    throw err
  }
}

export const initEpic = (
  action$: ActionsObservable<GuessWordInitAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(GUESS_WORD_INIT)
    .do(() => fn(store))
    .map( () => ({ type: 'REPLACE_ME' }) )