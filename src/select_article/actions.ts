import { createAction } from 'create-action'
import {
  // IMPORT_CONSTANTS
  SELECT_ARTICLE_INIT,
  SELECT_ARTICLE_NEXT,
  SELECT_ARTICLE_INIT_READY,
} from '../constants'

// ACTIONS
export const init = createAction(SELECT_ARTICLE_INIT)
export const next = createAction(SELECT_ARTICLE_NEXT)
export const initReady = createAction(SELECT_ARTICLE_INIT_READY)
