import { combineEpics } from 'redux-observable'
import { initEpic } from './initEpic'

export const learningMemeEpic = combineEpics(
  initEpic,
)
