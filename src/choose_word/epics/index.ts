import { combineEpics } from 'redux-observable'

import { initEpic } from './initEpic'
import { keypressEpic } from './keypressEpic'
import { nextEpic } from './nextEpic'

export const chooseWordEpic = combineEpics(
  initEpic,
  nextEpic,
  keypressEpic,
)
