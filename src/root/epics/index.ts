import { combineEpics } from 'redux-observable'

import { notifyEpic } from 'notify/epic'

import { clickEpic } from './click'
import { generalEpic } from './general'
import { initEpic } from './init'
import { sharedChangeSettingsEpic } from './sharedChangeSettings'
import { sharedSpeakEpic } from './sharedSpeak'

// IMPORT_EPICS
import { chooseWordEpic } from '../../choose_word/epics/'
import { guessWordEpic } from '../../guess_word/epics/'
import { learningMemeEpic } from '../../learning_meme/epics/'
import { navigationEpic } from '../../navigation/epics'
import { userEpic } from '../../user/epics/'
import { writeSentenceEpic } from '../../write_sentence/epics/'
import { sharedAddPointsEpic } from './sharedAddPoints'

export const rootEpic = combineEpics(
  // CONNECT_EPICS
  chooseWordEpic,
  clickEpic,
  generalEpic,
  guessWordEpic,
  initEpic,
  learningMemeEpic,
  navigationEpic,
  notifyEpic,
  sharedAddPointsEpic,
  sharedChangeSettingsEpic,
  sharedSpeakEpic,
  userEpic,
  writeSentenceEpic,
)
