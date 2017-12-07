import { combineEpics } from 'redux-observable'
import { initEpic } from './initEpic'
import { loginEpic } from './loginEpic'
import { registerEpic } from './registerEpic'

export const userEpic = combineEpics(
  initEpic,
  loginEpic,
  registerEpic,
)
