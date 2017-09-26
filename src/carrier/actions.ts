import { createAction } from 'redux-actions'

const base = 'CARRIER'

export const TOGGLE = `${base}_TOGGLE_MENU`
export const toggle = createAction(TOGGLE)
