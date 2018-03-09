import { combineEpics } from 'redux-observable'
import { initEpic } from './initEpic'
// IMPORT_EPICS
import { initReadyEpic } from './initReadyEpic'
import { inputEpic } from './inputEpic'
import { nextEpic } from './nextEpic'

export const guessWordEpic = combineEpics(
  // CONNECT_EPICS
  initReadyEpic,
  nextEpic,
  initEpic,
  inputEpic,
)
