import { createAction } from 'create-action'
import {
  WRITE_SENTENCE_CHECK,
  WRITE_SENTENCE_INIT,
  WRITE_SENTENCE_INIT_READY,
  WRITE_SENTENCE_LISTEN,
  WRITE_SENTENCE_NEXT,
  WRITE_SENTENCE_SET_INDEX,
  WRITE_SENTENCE_SET_INPUT,
  WRITE_SENTENCE_SET_NEXT,
  WRITE_SENTENCE_SET_OK_CORRECT,
  WRITE_SENTENCE_STEP,
  WRITE_SENTENCE_STOP,
} from '../constants'

export const check = createAction(WRITE_SENTENCE_CHECK)
export const init = createAction(WRITE_SENTENCE_INIT)
export const initReady = createAction(WRITE_SENTENCE_INIT_READY)
export const listen = createAction(WRITE_SENTENCE_LISTEN)
export const next = createAction(WRITE_SENTENCE_NEXT)
export const setIndex = createAction(WRITE_SENTENCE_SET_INDEX)
export const setNext = createAction(WRITE_SENTENCE_SET_NEXT)
export const setOkCorrect = createAction(WRITE_SENTENCE_SET_OK_CORRECT)
export const setInput = createAction(WRITE_SENTENCE_SET_INPUT)
export const step = createAction(WRITE_SENTENCE_STEP)
export const stop = createAction(WRITE_SENTENCE_STOP)
