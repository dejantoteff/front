import { combineEpics } from 'redux-observable'

import { checkEpic } from './check'
import { initEpic } from './init'
import { listenEpic } from './listen'
import { nextEpic } from './next'
import { stepEpic } from './step'

export const writeSentenceEpic = combineEpics(
  checkEpic,
  initEpic,
  listenEpic,
  nextEpic,
  stepEpic,
)
