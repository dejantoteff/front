import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { GUESS_WORD_INIT } from '../../constants'

const id = '00acbaf1-1e49-4b27-820f-3d19d7702ebc'

export function fn(store: ObservableStore): Action {
  try{
    const state = store.getState().store
    console.log(state)
    const {fromLanguage, toLanguage, db} = state
    console.log(db);
    const filterFn = (x => {
      const fromKey = `${fromLanguage.toLowerCase()}Related`
      const toKey = `${toLanguage.toLowerCase()}Related`
      if(x._id === id){

        console.log(x, fromKey, x[fromKey]);  
      }
      const hasFrom = x[fromKey] !== undefined && x[fromKey].length > 0
      const hasTo = x[toKey] !== undefined && x[toKey].length > 0

      return hasFrom && hasTo
    })
    const newDB = db.filter(filterFn)
    console.log(newDB);
    const x: Action = {type: 'x', payload: newDB}
    return x
  }catch (err){
    console.log(err);
    // throw err
  }
}

export const initEpic = (
  action$: ActionsObservable<GuessWordInitAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(GUESS_WORD_INIT)
    .debounceTime(500)
    .map(() => fn(store))
    // .switchMap(() => new Observable(observer => { 
    //   const state = store.getState()
    //   const {fromLanguage, toLanguage, db} = state.store

    //   const filterFn = (x => {
    //     const fromKey = `${fromLanguage}Related`
    //     const toKey = `${toLanguage}Related`
        
    //     const hasFrom = x[fromKey] !== undefined && x[fromKey].length > 0
    //     const hasTo = x[toKey] !== undefined && x[toKey].length > 0

    //     return hasFrom && hasTo
    //   })
    //   const newDB = db.filter(filterFn)

      

      
    //   observer.complete()
    // })
