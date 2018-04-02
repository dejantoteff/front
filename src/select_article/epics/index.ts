import { combineEpics } from 'redux-observable'
// IMPORT_EPICS
import { nextEpic } from './next'
import { initReadyEpic } from './initReady'
import { initEpic } from './initEpic'
  
export const selectArticleEpic = combineEpics(
  // CONNECT_EPICS
  nextEpic,
  initReadyEpic,
  initEpic,
)