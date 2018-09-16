import { combineEpics } from 'redux-observable'
// IMPORT_EPICS
import { initQuestionEpic } from './initQuestion'
import { clickEpic } from './click'
import { initReadyEpic } from './initReady'
import { initEpic } from './init'
  
export const lessonEpic = combineEpics(
  // CONNECT_EPICS
  initQuestionEpic,
  clickEpic,
  initReadyEpic,
  initEpic,
)