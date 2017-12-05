import { createAction } from 'create-action'
import { WRITE_SENTENCE_INIT, WRITE_SENTENCE_SET_INPUT, WRITE_SENTENCE_NEXT, WRITE_SENTENCE_CHECK, WRITE_SENTENCE_LISTEN, WRITE_SENTENCE_STEP } from '../constants'

export const init = createAction(WRITE_SENTENCE_INIT)
export const check = createAction(WRITE_SENTENCE_CHECK)
export const next = createAction(WRITE_SENTENCE_NEXT)
export const setInput = createAction(WRITE_SENTENCE_SET_INPUT)
export const listen = createAction(WRITE_SENTENCE_LISTEN)
export const step = createAction(WRITE_SENTENCE_STEP)
