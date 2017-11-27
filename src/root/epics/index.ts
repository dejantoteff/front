import { combineEpics } from 'redux-observable'
import { navigationEpic } from '../../navigation/epics'
import { fooEpic } from './fooEpic'

export const rootEpic = combineEpics(
  fooEpic,
  navigationEpic,
)
