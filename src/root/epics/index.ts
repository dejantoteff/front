import { combineEpics } from 'redux-observable'

import { notifyEpic } from 'notify/epic'

import { clickEpic } from './clickEpic'
import { generalEpic } from './generalEpic'
import { initEpic } from './initEpic'
import { sharedChangeSettingsEpic } from './sharedChangeSettingsEpic'
import { sharedSpeakEpic } from './sharedSpeakEpic'

// IMPORT_EPICS
import { guessWordEpic } from '../../guess_word/epics/'
import { chooseWordEpic } from '../../choose_word/epics/'
import { learningMemeEpic } from '../../learning_meme/epics/'
import { navigationEpic } from '../../navigation/epics'
import { userEpic } from '../../user/epics/'
import { writeSentenceEpic } from '../../write_sentence/epics/'
import { sharedAddPointsEpic } from './sharedAddPoints'

export const rootEpic = combineEpics(
  // CONNECT_EPICS
  guessWordEpic,
  chooseWordEpic,
  clickEpic,
  generalEpic,
  initEpic,
  sharedChangeSettingsEpic,
  learningMemeEpic,
  navigationEpic,
  notifyEpic,
  sharedAddPointsEpic,
  sharedSpeakEpic,
  userEpic,
  writeSentenceEpic,
)
