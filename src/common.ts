import { createAction } from 'create-action'
import { NotifyInput } from 'notify'

export function getNextIndex(input: GetNextIndex) {
  const next = input.index + 1

  return next === input.length ?
    0 :
    next
}

export const notifyInfo = createAction('NOTIFY_INFO')

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
