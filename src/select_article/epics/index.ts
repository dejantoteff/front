import { combineEpics } from 'redux-observable'
// IMPORT_EPICS
import { initReadyEpic } from './initReady'
import { initEpic } from './initEpic'
  
export const selectArticleEpic = combineEpics(
  // CONNECT_EPICS
  initReadyEpic,
  initEpic,
)