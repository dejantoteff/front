import { combineEpics } from 'redux-observable'
import { chooseWordEpic } from '../../choose_word/epics/'
import { navigationEpic } from '../../navigation/epics'

import { initEpic } from './initEpic'
import { setEpic } from './setEpic'

export const rootEpic = combineEpics(
  chooseWordEpic,
  setEpic,
  initEpic,
  navigationEpic,
)
