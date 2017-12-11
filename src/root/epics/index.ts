import { combineEpics } from 'redux-observable'

import { notifyEpic } from 'notify/epic'

import { clickEpic } from './clickEpic'
import { initEpic } from './initEpic'
import { setEpic } from './setEpic'
import { sharedChangeSettingsEpic } from './sharedChangeSettingsEpic'
import { sharedSpeakEpic } from './sharedSpeakEpic'

import { chooseWordEpic } from '../../choose_word/epics/'
import { learningMemeEpic } from '../../learning_meme/epics/'
import { navigationEpic } from '../../navigation/epics'
import { userEpic } from '../../user/epics/'
import { writeSentenceEpic } from '../../write_sentence/epics/'
import { sharedAddPointsEpic } from './sharedAddPoints'

export const rootEpic = combineEpics(
  chooseWordEpic,
  clickEpic,
  initEpic,
  sharedChangeSettingsEpic,
  learningMemeEpic,
  navigationEpic,
  notifyEpic,
  setEpic,
  sharedAddPointsEpic,
  sharedSpeakEpic,
  userEpic,
  writeSentenceEpic,
)
