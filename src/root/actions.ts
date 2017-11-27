import { createAction } from 'create-action'

import {
  INIT,
} from '../constants'

export const init = createAction(INIT)
export const inc = createAction('INC')
