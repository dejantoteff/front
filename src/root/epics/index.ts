import { combineEpics } from 'redux-observable'
import { notifyEpic as notifyModuleEpic } from 'notify/epic'

import { clickEpic } from './click'
import { generalEpic } from './general'
import { initEpic } from './init'
import { notifyEpic } from './notify'
import { sharedChangeSettingsEpic } from './sharedChangeSettings'
import { sharedSpeakEpic } from './sharedSpeak'

// IMPORT_EPICS
import { chooseWordEpic } from '../../choose_word/epics/'
import { guessWordEpic } from '../../guess_word/epics/'
import { learningMemeEpic } from '../../learning_meme/epics/'
import { lessonEpic } from '../../lesson/epics/'
import { selectArticleEpic } from '../../select_article/epics/'
import { writeSentenceEpic } from '../../write_sentence/epics/'
import { infoEpic } from './infoEpic'
import { sharedAddPointsEpic } from './sharedAddPoints'

export const rootEpic = combineEpics(
  // CONNECT_EPICS
  lessonEpic,
  selectArticleEpic,
  infoEpic,
  chooseWordEpic,
  clickEpic,
  generalEpic,
  guessWordEpic,
  initEpic,
  learningMemeEpic,
  notifyEpic,
  notifyModuleEpic,
  sharedAddPointsEpic,
  sharedChangeSettingsEpic,
  sharedSpeakEpic,
  writeSentenceEpic,
)
