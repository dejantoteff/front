import { combineEpics } from 'redux-observable'
import { initEpic } from './initEpic'
import { nextEpic } from './nextEpic'

export const chooseWordEpic = combineEpics(
  initEpic,
  nextEpic,
)
