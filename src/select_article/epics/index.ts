import { combineEpics } from 'redux-observable'
// IMPORT_EPICS
import { initEpic } from './initEpic'
  
export const selectArticleEpic = combineEpics(
  // CONNECT_EPICS
  initEpic,
)