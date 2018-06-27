import { combineEpics } from 'redux-observable'
// IMPORT_EPICS
import { clickEpic } from './click'
import { initReadyEpic } from './initReady'
import { initEpic } from './init'
  
export const lessonEpic = combineEpics(
  // CONNECT_EPICS
  clickEpic,
  initReadyEpic,
  initEpic,
)