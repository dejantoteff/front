import { createAction } from 'create-action'
import {
  // IMPORT_CONSTANTS
  GUESS_WORD_INIT,
} from '../constants'

// ACTIONS
export const init = createAction(GUESS_WORD_INIT)
