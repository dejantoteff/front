import { createAction } from 'create-action'
import {
  // IMPORT_CONSTANTS
  GUESS_WORD_NEXT_TICK,
  GUESS_WORD_INIT,
  GUESS_WORD_INIT_READY,
} from '../constants'

// ACTIONS
export const nextTick = createAction(GUESS_WORD_NEXT_TICK)
export const init = createAction(GUESS_WORD_INIT)
export const initReady = createAction(GUESS_WORD_INIT_READY)
