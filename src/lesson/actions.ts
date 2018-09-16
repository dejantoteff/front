import { createAction } from 'create-action'
import {
  // IMPORT_CONSTANTS
  LESSON_NEXT,
  LESSON_CLICK,
  LESSON_INIT_READY,
  LESSON_INIT,
} from '../constants'

// ACTIONS
export const next = createAction(LESSON_NEXT)
export const click = createAction(LESSON_CLICK)
export const initReady = createAction(LESSON_INIT_READY)
export const init = createAction(LESSON_INIT)
