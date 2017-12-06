import { createAction } from 'create-action'
import { USER_INIT, USER_REQUEST_LOGIN, USER_REQUEST_REGISTER } from '../constants'

export const init = createAction(USER_INIT)
export const login = createAction(USER_REQUEST_LOGIN)
export const createAccount = createAction(USER_REQUEST_REGISTER)
