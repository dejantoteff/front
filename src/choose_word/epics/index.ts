import { combineEpics } from 'redux-observable'

// IMPORT_EPICS
import { checkEpic } from './checkEpic'
import { clickEpic } from './clickEpic'
import { initEpic } from './initEpic'
import { keypressEpic } from './keypressEpic'
import { nextEpic } from './nextEpic'
import { stepEpic } from './stepEpic'

export const chooseWordEpic = combineEpics(
  // CONNECT_EPICS
  checkEpic,
  clickEpic,
  initEpic,
  keypressEpic,
  nextEpic,
  stepEpic,
)
