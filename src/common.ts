import { createAction } from 'create-action'

export function getNextIndex(input: GetNextIndex) {
  const next = input.index + 1

  return next === input.length ?
    0 :
    next
}

export const notifyInfo = createAction('NOTIFY_INFO')

export function initAction(base) {
  return createAction(`${base}_INIT`)
}

export function next(base) {
  return createAction(`${base}_NEXT`)
}

export function check(base) {
  return createAction(`${base}_CHECK`)
}

export function show(base) {
  return createAction(`${base}_SHOW`)
}
