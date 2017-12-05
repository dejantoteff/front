import { combineEpics } from 'redux-observable'

import { notifyEpic } from 'notify/epic'
import { initEpic } from './initEpic'
import { setEpic } from './setEpic'

import { carrierEpic } from '../../carrier/epics'
import { navigationEpic } from '../../navigation/epics'

import { chooseWordEpic } from '../../choose_word/epics/'
import { learningMemeEpic } from '../../learning_meme/epics/'
import { writeSentenceEpic } from '../../write_sentence/epics/'
import { userEpic } from '../../user/epics/'

export const rootEpic = combineEpics(
  chooseWordEpic,
  carrierEpic,
  notifyEpic,
  writeSentenceEpic,
  learningMemeEpic,
  setEpic,
  initEpic,
  navigationEpic,
)
