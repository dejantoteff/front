import { combineEpics } from 'redux-observable'
import { clickEpic } from './click'
import { initEpic } from './init'
// IMPORT_EPICS
import { initQuestionEpic } from './initQuestion'
import { initReadyEpic } from './initReady'

export const lessonEpic = combineEpics(
  // CONNECT_EPICS
  initQuestionEpic,
  clickEpic,
  initReadyEpic,
  initEpic,
)
