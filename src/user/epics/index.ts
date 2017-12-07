import { combineEpics } from 'redux-observable'
import { initEpic } from './initEpic'
import { registerEpic } from './registerEpic'
import {loginEpic } from './loginEpic'

export const userEpic = combineEpics(
  initEpic,
  registerEpic,
  loginEpic,
)
