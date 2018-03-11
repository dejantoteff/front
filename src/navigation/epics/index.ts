import { combineEpics } from 'redux-observable'
import { initEpic } from './init'

export const navigationEpic = combineEpics(
  initEpic,
)
