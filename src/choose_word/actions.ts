import { createAction } from 'create-action'
import { initAction } from '../common'

import {
  CHOOSE_WORD_CHECK,
  CHOOSE_WORD_INIT,
  CHOOSE_WORD_NEXT,
  CHOOSE_WORD_SHOW,
} from '../constants'

const base = 'CHOOSE_WORD'

export const init = initAction(base)
export const next = createAction(CHOOSE_WORD_NEXT)
export const show = createAction(CHOOSE_WORD_SHOW)
export const check = createAction(CHOOSE_WORD_CHECK)
