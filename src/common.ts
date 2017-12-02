import { createAction } from 'create-action'

export function getNextIndex(input: GetNextIndex) {
  const next = input.index + 1

  return next === input.length ?
    0 :
    next
}

export const notifyInfo = createAction('NOTIFY_INFO')
