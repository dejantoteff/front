import {
  INIT_READY,
  LEARNING_MEME,
  LEARNING_MEME_INIT,
  LEARNING_MEME_INIT_READY,
  LEARNING_MEME_NEXT,
  SHORT_DELAY,
} from '../../constants'

import { shuffle } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { getDB } from '../../_modules/getDB'
import { getCommons } from '../../_modules/selectors'
import { sharedInit } from '../../root/actions'
import { initReady } from '../actions'

function createDB(store: ObservableStore): any {

  const { randomFlag, fromLanguage, toLanguage } = getCommons(store)
  const { db } = store.getState().store

  const dbValue = getDB({ db, fromLanguage, toLanguage })

  return randomFlag ?
    shuffle(dbValue) :
    dbValue
}

export const initEpic = (
  action$: ActionsObservable<LearningMemeInitAction>,
  store,
): Observable<any> => {
  const db$ = action$.ofType(INIT_READY)
  const init$ = action$.ofType(LEARNING_MEME_INIT)

  return Observable
    .combineLatest(db$, init$)
    .map(() =>
      initReady(createDB(store)),
  )
}
