import { combineEpics } from 'redux-observable'

import { checkEpic } from './checkEpic'
import { initEpic } from './initEpic'
import { keypressEpic } from './keypressEpic'
import { nextEpic } from './nextEpic'

export const chooseWordEpic = combineEpics(
  initEpic,
  nextEpic,
  checkEpic,
  keypressEpic,
)
