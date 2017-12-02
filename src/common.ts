import { createAction } from 'create-action'
import { NotifyInput } from 'notify'
import { SHARED_INIT } from './constants'

export function getNextIndex(input: GetNextIndex) {
  const next = input.index + 1

  return next === input.length ?
    0 :
    next
}

export const notifyInfo = createAction('NOTIFY_INFO')
export const sharedInit = createAction(SHARED_INIT)

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
