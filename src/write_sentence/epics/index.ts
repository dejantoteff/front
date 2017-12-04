import { combineEpics } from 'redux-observable'
import { initEpic } from './initEpic'
import { nextEpic } from './nextEpic'

export const writeSentenceEpic = combineEpics(
  initEpic,
  nextEpic,
)
