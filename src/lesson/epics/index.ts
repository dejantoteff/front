import { combineEpics } from 'redux-observable'
// IMPORT_EPICS
import { initReadyEpic } from './initReady'
import { initEpic } from './init'
  
export const lessonEpic = combineEpics(
  // CONNECT_EPICS
  initReadyEpic,
  initEpic,
)