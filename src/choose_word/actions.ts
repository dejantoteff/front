import { createAction } from 'create-action'
import {
  CHOOSE_WORD_CHECK,
  CHOOSE_WORD_INIT,
  CHOOSE_WORD_NEXT,
  CHOOSE_WORD_SET_INDEX,
  CHOOSE_WORD_SHOW,
  CHOOSE_WORD_STEP,
  CHOOSE_WORD_STOP,
} from '../constants'

export const stop = createAction(CHOOSE_WORD_STOP)
export const setIndex = createAction(CHOOSE_WORD_SET_INDEX)
export const init = createAction(CHOOSE_WORD_INIT)
export const next = createAction(CHOOSE_WORD_NEXT)
export const show = createAction(CHOOSE_WORD_SHOW)
export const step = createAction(CHOOSE_WORD_STEP)
export const check = createAction(CHOOSE_WORD_CHECK)
