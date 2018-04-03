import { createAction } from 'create-action'
import {
  // IMPORT_CONSTANTS
  SELECT_ARTICLE_STOP,
  SELECT_ARTICLE_CLICK,
  SELECT_ARTICLE_CLICK_READY,
  SELECT_ARTICLE_INIT,
  SELECT_ARTICLE_INIT_READY,
  SELECT_ARTICLE_NEXT,
  SELECT_ARTICLE_NEXT_READY,
} from '../constants'

// ACTIONS
export const stop = createAction(SELECT_ARTICLE_STOP)
export const click = createAction(SELECT_ARTICLE_CLICK)
export const clickReady = createAction(SELECT_ARTICLE_CLICK_READY)
export const init = createAction(SELECT_ARTICLE_INIT)
export const initReady = createAction(SELECT_ARTICLE_INIT_READY)
export const next = createAction(SELECT_ARTICLE_NEXT)
export const nextReady = createAction(SELECT_ARTICLE_NEXT_READY)
