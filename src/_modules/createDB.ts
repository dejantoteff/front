import { instanceDB } from '../_helpers/instanceDB'
import { getDB } from './getDB'
import { getCommons } from './selectors'

export function createDB(
  store: ObservableStore,
  initAction?: any, 
): any {

  const { randomFlag, fromLanguage, toLanguage } = getCommons(store)
  const { db } = store.getState().store
  const dbFinal = getDB({ db, fromLanguage, toLanguage })

  return instanceDB(randomFlag, dbFinal, initAction)
}