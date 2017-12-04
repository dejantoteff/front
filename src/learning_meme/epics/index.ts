import { combineEpics } from 'redux-observable'

import { checkEpic } from './checkEpic'
import { initEpic } from './initEpic'
import { nextEpic } from './nextEpic'

export const learningMemeEpic = combineEpics(
  initEpic,
  nextEpic,
  checkEpic,
)
