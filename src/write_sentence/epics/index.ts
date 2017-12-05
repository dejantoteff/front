import { combineEpics } from 'redux-observable'
import { initEpic } from './initEpic'
import { nextEpic } from './nextEpic'
import { listenEpic } from './listenEpic'
import { checkEpic } from './checkEpic'

export const writeSentenceEpic = combineEpics(
  initEpic,
  nextEpic,
  listenEpic,
  checkEpic
)
