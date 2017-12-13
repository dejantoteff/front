import { combineEpics } from 'redux-observable'

import { checkEpic } from './checkEpic'
import { initEpic } from './initEpic'
import { listenEpic } from './listenEpic'
import { nextEpic } from './nextEpic'
import { speechInputEpic } from './speechInputEpic'
import { speechNavEpic } from './speechNavEpic'

export const learningMemeEpic = combineEpics(
  initEpic,
  nextEpic,
  listenEpic,
  checkEpic,
  speechInputEpic,
  speechNavEpic,
)
