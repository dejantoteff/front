import { createAction } from 'create-action'
import {
  USER_INIT,
  USER_LOGIN,
  USER_REGISTER,
} from '../constants'

export const init = createAction(USER_INIT)
export const login = createAction(USER_LOGIN)
export const register = createAction(USER_REGISTER)
