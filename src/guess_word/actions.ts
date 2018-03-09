import { createAction } from 'create-action'
import {
  // IMPORT_CONSTANTS
  GUESS_WORD_CHECK,
  GUESS_WORD_INIT,
  GUESS_WORD_INIT_READY,
  GUESS_WORD_INPUT,
  GUESS_WORD_INPUT_CHANGE,
  GUESS_WORD_NEXT,
  GUESS_WORD_NEXT_READY,
  GUESS_WORD_STOP,
} from '../constants'

// ACTIONS
export const check = createAction(GUESS_WORD_CHECK)
export const init = createAction(GUESS_WORD_INIT)
export const initReady = createAction(GUESS_WORD_INIT_READY)
export const input = createAction(GUESS_WORD_INPUT)
export const inputChange = createAction(GUESS_WORD_INPUT_CHANGE)
export const next = createAction(GUESS_WORD_NEXT)
export const nextReady = createAction(GUESS_WORD_NEXT_READY)
export const nextTick = createAction(GUESS_WORD_NEXT)
export const stop = createAction(GUESS_WORD_STOP)
