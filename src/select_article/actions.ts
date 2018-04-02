import { createAction } from 'create-action'
import {
  // IMPORT_CONSTANTS
  SELECT_ARTICLE_INIT,
  SELECT_ARTICLE_NEXT,
  SELECT_ARTICLE_NEXT_READY,
  SELECT_ARTICLE_INIT_READY,
  SELECT_ARTICLE_CLICK,
} from '../constants'

// ACTIONS
export const init = createAction(SELECT_ARTICLE_INIT)
export const next = createAction(SELECT_ARTICLE_NEXT)
export const click = createAction(SELECT_ARTICLE_CLICK)
export const nextReady = createAction(SELECT_ARTICLE_NEXT_READY)
export const initReady = createAction(SELECT_ARTICLE_INIT_READY)
