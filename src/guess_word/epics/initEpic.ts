import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { GUESS_WORD_INIT } from '../../constants'
import { initReady } from '../actions'

export function fn(store: ObservableStore): Action {
  try {
    const state = store.getState().store
    const { fromLanguage, toLanguage, db } = state

    const filterFn = (x => {
      const fromKey = `${fromLanguage.toLowerCase()}Related`
      const toKey = `${toLanguage.toLowerCase()}Related`

      const hasFrom = x[fromKey] !== undefined && x[fromKey].length > 0
      const hasTo = x[toKey] !== undefined && x[toKey].length > 0

      return hasFrom && hasTo
    })
    
    const newDB = db.filter(filterFn)

    return initReady(newDB)
  } catch (err) {
    throw err
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
