import { createAction } from 'create-action'
import {
  USER_LOGIN,
  USER_REGISTER,
} from '../constants'

export const login = createAction(USER_LOGIN)
export const register = createAction(USER_REGISTER)
