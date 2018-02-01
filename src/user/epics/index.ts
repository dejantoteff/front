import { combineEpics } from 'redux-observable'
import { loginEpic } from './loginEpic'
import { registerEpic } from './registerEpic'

export const userEpic = combineEpics(
  loginEpic,
  registerEpic,
)
