import { combineEpics } from 'redux-observable'

import { notifyEpic } from 'notify/epic'
import { initEpic } from './initEpic'
import { setEpic } from './setEpic'

import { carrierEpic } from '../../carrier/epics'
import { chooseWordEpic } from '../../choose_word/epics/'
import { navigationEpic } from '../../navigation/epics'

export const rootEpic = combineEpics(
  chooseWordEpic,
  carrierEpic,
  notifyEpic,
  setEpic,
  initEpic,
  navigationEpic,
)
