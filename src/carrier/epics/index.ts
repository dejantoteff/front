import { combineEpics } from 'redux-observable'
import { initEpic } from './initEpic'
import { sharedEpic } from './sharedEpic'

export const carrierEpic = combineEpics(
  initEpic,
  sharedEpic,
)
