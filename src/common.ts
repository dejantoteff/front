import { createAction } from 'create-action'
import { NotifyInput } from 'notify'
import { SHARED_ADD_POINTS, SHARED_INIT, SHARED_SPEAK } from './constants'

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
export const successNotify = (): NotifyInput => {
  const x: NotifyInput = {
    type: 'NOTIFY_SUCCESS',
    payload: {
      message: 'ok',
      ms: 300,
    },
  }

  return x
}

export const failNotify = (): NotifyInput => {
  const x: NotifyInput = {
    type: 'NOTIFY_ERROR',
    payload: {
      message: 'no',
      ms: 300,
    },
  }

  return x
}
