import { combineEpics } from 'redux-observable'

import { checkEpic } from './check'
import { initEpic } from './init'
import { listenEpic } from './listen'
import { nextEpic } from './next'

export const learningMemeEpic = combineEpics(
  initEpic,
  nextEpic,
  listenEpic,
  checkEpic,
)
