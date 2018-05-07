import { createAction } from 'create-action'
import {
  // IMPORT_CONSTANTS
  LESSON_INIT_READY,
  LESSON_INIT,
} from '../constants'

// ACTIONS
export const initReady = createAction(LESSON_INIT_READY)
export const init = createAction(LESSON_INIT)
