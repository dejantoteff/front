import { createAction } from 'create-action'
import {
  LEARNING_MEME_CHECK,
  LEARNING_MEME_INIT,
  LEARNING_MEME_INIT_READY,
  LEARNING_MEME_LISTEN,
  LEARNING_MEME_NEXT,
  LEARNING_MEME_SET_INPUT,
  LEARNING_MEME_STOP,
} from '../constants'

export const init = createAction(LEARNING_MEME_INIT)
export const initReady = createAction(LEARNING_MEME_INIT_READY)
export const check = createAction(LEARNING_MEME_CHECK)
export const stop = createAction(LEARNING_MEME_STOP)
export const next = createAction(LEARNING_MEME_NEXT)
export const listen = createAction(LEARNING_MEME_LISTEN)
export const setInput = createAction(LEARNING_MEME_SET_INPUT)
