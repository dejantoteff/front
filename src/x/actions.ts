import { createAction } from 'create-action'

const base = 'X'

export const TOGGLE = `${base}_TOGGLE`
export const toggle = createAction(TOGGLE)
