import { combineEpics } from 'redux-observable'
import { loginEpic } from './login'
import { registerEpic } from './register'

export const userEpic = combineEpics(
  loginEpic,
  registerEpic,
)
