import { combineEpics } from 'redux-observable'
// IMPORT_EPICS
import { checkEpic } from './checkEpic'
import { initEpic } from './initEpic'
import { initReadyEpic } from './initReadyEpic'
import { inputEpic } from './inputEpic'
import { nextEpic } from './nextEpic'

export const guessWordEpic = combineEpics(
  // CONNECT_EPICS
  checkEpic,
  inputEpic,
  initReadyEpic,
  nextEpic,
  initEpic,
)
