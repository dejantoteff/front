import { createAction } from 'create-action'
import {
  // IMPORT_CONSTANTS
  LESSON_CLICK,
  LESSON_INIT,
  LESSON_QUESTION_READY,
  LESSON_INIT_READY,
  LESSON_NEXT,
} from '../constants'

// ACTIONS
export const next = createAction(LESSON_NEXT)
export const questionReady = createAction(LESSON_QUESTION_READY)
export const click = createAction(LESSON_CLICK)
export const initReady = createAction(LESSON_INIT_READY)
export const init = createAction(LESSON_INIT)
