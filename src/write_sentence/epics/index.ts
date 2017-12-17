import { combineEpics } from 'redux-observable'
import { checkEpic } from './checkEpic'
import { initEpic } from './initEpic'
import { listenEpic } from './listenEpic'
import { nextEpic } from './nextEpic'
import { speechInputEpic } from './speechInputEpic'
import { speechNavEpic } from './speechNavEpic'
import { stepEpic } from './stepEpic'

export const writeSentenceEpic = combineEpics(
  checkEpic,
  speechInputEpic,
  speechNavEpic,
  initEpic,
  listenEpic,
  nextEpic,
  stepEpic,
)
