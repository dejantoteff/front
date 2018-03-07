import { combineEpics } from 'redux-observable'
// IMPORT_EPICS
import { initNextEpic } from './initNextEpic'
import { initEpic } from './initEpic'
  
export const guessWordEpic = combineEpics(
  // CONNECT_EPICS
  initNextEpic,
  initEpic,
)