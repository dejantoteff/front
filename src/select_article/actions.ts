import { createAction } from 'create-action'
import {
  // IMPORT_CONSTANTS
  SELECT_ARTICLE_INIT,
} from '../constants'

// ACTIONS
export const init = createAction(SELECT_ARTICLE_INIT)
