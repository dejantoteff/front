import { combineEpics } from 'redux-observable'

import { checkEpic } from './checkEpic'
import { initEpic } from './initEpic'
import { keypressEpic } from './keypressEpic'
import { nextEpic } from './nextEpic'
import { stepEpic } from './stepEpic'

export const chooseWordEpic = combineEpics(
  checkEpic,
  initEpic,
  keypressEpic,
  nextEpic,
  stepEpic,
)
