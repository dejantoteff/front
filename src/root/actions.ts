import { createAction } from 'create-action'

import {
  INIT,
  INIT_READY,
} from '../constants'

export const init = createAction(INIT)
export const initReady = createAction(INIT_READY)
