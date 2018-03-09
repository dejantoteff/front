import { createAction } from 'create-action'
import {
  // IMPORT_CONSTANTS
  GUESS_WORD_CHECK,
  GUESS_WORD_INIT,
  GUESS_WORD_INIT_READY,
  GUESS_WORD_INPUT,
  GUESS_WORD_NEXT,
  GUESS_WORD_NEXT_READY,
} from '../constants'

// ACTIONS
export const nextTick = createAction(GUESS_WORD_NEXT)
export const init = createAction(GUESS_WORD_INIT)
export const check = createAction(GUESS_WORD_CHECK)
export const input = createAction(GUESS_WORD_INPUT)
export const initReady = createAction(GUESS_WORD_INIT_READY)
export const nextReady = createAction(GUESS_WORD_NEXT_READY)
