import { createAction } from 'create-action'

import {
  INIT,
  INIT_READY,
  SHARED_ADD_POINTS,
  SHARED_ADD_POINTS_READY,
  SHARED_INIT,
  SHARED_SPEAK,
} from '../constants'

export const init = createAction(INIT)
export const notifyInfo = createAction('notify@INFO')
export const initReady = createAction(INIT_READY)
export const sharedInit = createAction(SHARED_INIT)
export const sharedAddPoints = createAction(SHARED_ADD_POINTS)
export const sharedAddPointsReady = createAction(SHARED_ADD_POINTS_READY)
export const sharedSpeak = createAction(SHARED_SPEAK)
