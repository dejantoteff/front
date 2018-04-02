import { combineEpics } from 'redux-observable'
// IMPORT_EPICS
import { clickEpic } from './click'
import { nextEpic } from './next'
import { initReadyEpic } from './initReady'
import { initEpic } from './initEpic'
  
export const selectArticleEpic = combineEpics(
  // CONNECT_EPICS
  clickEpic,
  nextEpic,
  initReadyEpic,
  initEpic,
)