import { combineEpics } from 'redux-observable'
// IMPORT_EPICS
import { stopEpic } from './stop'
import { clickEpic } from './click'
import { nextEpic } from './next'
import { initReadyEpic } from './initReady'
import { initEpic } from './initEpic'
  
export const selectArticleEpic = combineEpics(
  // CONNECT_EPICS
  stopEpic,
  clickEpic,
  nextEpic,
  initReadyEpic,
  initEpic,
)