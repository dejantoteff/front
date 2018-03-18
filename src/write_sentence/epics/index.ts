import { combineEpics } from 'redux-observable'

import { checkEpic } from './check'
import { initEpic } from './init'
import { initReadyEpic } from './initReady'
import { listenEpic } from './listen'
import { nextEpic } from './next'
import { stepEpic } from './step'

export const writeSentenceEpic = combineEpics(
  checkEpic,
  initEpic,
  initReadyEpic,
  listenEpic,
  nextEpic,
  stepEpic,
)
