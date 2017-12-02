import { combineEpics } from 'redux-observable'

import { notifyEpic } from 'notify/epic'
import { chooseWordEpic } from '../../choose_word/epics/'
import { navigationEpic } from '../../navigation/epics'

import { initEpic } from './initEpic'
import { setEpic } from './setEpic'

export const rootEpic = combineEpics(
  chooseWordEpic,
  notifyEpic,
  setEpic,
  initEpic,
  navigationEpic,
)
