import { createAction } from 'create-action'
import { USER_INIT, USER_LOGIN, USER_REGISTER, POUCH_USER_READY } from '../constants'

export const init = createAction(USER_INIT)
export const login = createAction(USER_LOGIN)
export const register = createAction(USER_REGISTER)
export const pouchUserReady = createAction(POUCH_USER_READY)
