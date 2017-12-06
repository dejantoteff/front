import { combineEpics } from 'redux-observable'
import { initEpic } from './initEpic'
import { requestEpic } from './requestEpic'

export const userEpic = combineEpics(
  initEpic,
  requestEpic,
)
