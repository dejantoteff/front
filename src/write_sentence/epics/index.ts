import { combineEpics } from 'redux-observable'
import { checkEpic } from './checkEpic'
import { initEpic } from './initEpic'
import { listenEpic } from './listenEpic'
import { nextEpic } from './nextEpic'
import { stepEpic } from './stepEpic'

export const writeSentenceEpic = combineEpics(
  checkEpic,
  initEpic,
  listenEpic,
  nextEpic,
  stepEpic,
)
