import { createAction } from 'create-action'
import { LEARNING_MEME_INIT, LEARNING_MEME_SET_INPUT } from '../constants'

export const init = createAction(LEARNING_MEME_INIT)
export const setInput = createAction(LEARNING_MEME_SET_INPUT)
