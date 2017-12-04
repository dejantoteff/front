import { combineEpics } from 'redux-observable'

import { checkEpic } from './checkEpic'
import { initEpic } from './initEpic'
import { listenEpic } from './listenEpic'
import { nextEpic } from './nextEpic'

export const learningMemeEpic = combineEpics(
  initEpic,
  nextEpic,
  listenEpic,
  checkEpic,
)
