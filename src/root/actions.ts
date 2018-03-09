import { createAction } from 'create-action'

import {
  INIT,
  INIT_READY,
  SHARED_ADD_POINTS,
  SHARED_INIT,
  SHARED_SPEAK,
} from '../constants'

export const init = createAction(INIT)
export const initReady = createAction(INIT_READY)
export const sharedInit = createAction(SHARED_INIT)
export const sharedAddPoints = createAction(SHARED_ADD_POINTS)
export const sharedSpeak = createAction(SHARED_SPEAK)
