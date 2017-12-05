import { combineEpics } from 'redux-observable'
import { initEpic } from './initEpic'
import { nextEpic } from './nextEpic'
import { listenEpic } from './listenEpic'
import { checkEpic } from './checkEpic'
import { stepEpic } from './stepEpic'

export const writeSentenceEpic = combineEpics(
  initEpic,
  stepEpic,
  nextEpic,
  listenEpic,
  checkEpic
)
