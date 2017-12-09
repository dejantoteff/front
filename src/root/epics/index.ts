import { combineEpics } from 'redux-observable'

import { notifyEpic } from 'notify/epic'
import { initEpic } from './initEpic'
import { setEpic } from './setEpic'
import { clickEpic } from './clickEpic'
import { sharedSpeakEpic } from './sharedSpeakEpic'

import { navigationEpic } from '../../navigation/epics'

import { chooseWordEpic } from '../../choose_word/epics/'
import { learningMemeEpic } from '../../learning_meme/epics/'
import { userEpic } from '../../user/epics/'
import { writeSentenceEpic } from '../../write_sentence/epics/'
import { sharedAddPointsEpic } from './sharedAddPoints'

export const rootEpic = combineEpics(
  chooseWordEpic,
  clickEpic,
  initEpic,
  learningMemeEpic,
  navigationEpic,
  notifyEpic,
  setEpic,
  sharedAddPointsEpic,
  sharedSpeakEpic,
  userEpic,
  writeSentenceEpic,
)
