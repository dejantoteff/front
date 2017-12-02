import { combineEpics } from 'redux-observable'
import { initEpic } from './initEpic'

export const carrierEpic = combineEpics(
  initEpic,
)
