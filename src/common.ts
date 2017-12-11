import { createAction } from 'create-action'
import { NotifyInput } from 'notify'
import { SHARED_ADD_POINTS, SHARED_INIT, SHARED_SPEAK, LONG_DELAY } from './constants'

// COMMON ACTIONS
export const notifyInfo = createAction('NOTIFY_INFO')
export const sharedInit = createAction(SHARED_INIT)
export const sharedAddPoints = createAction(SHARED_ADD_POINTS)
export const sharedSpeak = createAction(SHARED_SPEAK)

// SMALL
export function getNextIndex(input: GetNextIndex) {
  const next = input.index + 1

  return next === input.length ?
    0 :
    next
}

// NOTIFY
export const successLoginNotify = (): NotifyInput => {
  const notifyAction: NotifyInput = {
    payload: {
      message: 'Successfully signed in',
      ms: LONG_DELAY*2,
    },
    type: 'NOTIFY_SUCCESS',
  }

  return notifyAction
}

export const failLoginNotify = (): NotifyInput => {
  const notifyAction: NotifyInput = {
    payload: {
      message: 'No such user or wrong password',
      ms: LONG_DELAY*2,
    },
    type: 'NOTIFY_ERROR',
  }

  return notifyAction
}

export const invalidForm = () => {
  const x: NotifyInput = {
    payload: {
      message: 'Invalid email or password',
      ms: 2000,
    },
    type: 'NOTIFY_ERROR',
  }

  return x
}
