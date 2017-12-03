import { combineEpics } from 'redux-observable'
import { initEpic } from './initEpic'
import { sharedSpeakEpic } from './sharedSpeakEpic'

export const carrierEpic = combineEpics(
  initEpic,
  sharedSpeakEpic,
)
