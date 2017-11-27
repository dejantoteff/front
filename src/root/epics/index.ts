import { combineEpics } from 'redux-observable'
import { chooseWordEpic } from '../../choose_word/epics/'
import { navigationEpic } from '../../navigation/epics'
import { fooEpic } from './fooEpic'

export const rootEpic = combineEpics(
  chooseWordEpic,
  fooEpic,
  navigationEpic,
)
