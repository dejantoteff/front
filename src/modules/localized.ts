import { identity } from 'rambdax'

type Type = 'number' | 'boolean' | 'object' | 'string'
interface InitialGet {
  key: string
  defaultValue: any
  type?: Type
}

function normalizeBoolean(input: any): boolean {

  return input === 'false' ?
    false :
    Boolean(input)
}

function normalizeObject(input: any): object {
  try {

    return JSON.parse(input)
  } catch (e) {

    return {}
  }
}

function normalize(input: any, type: Type) {
  const methods = {
    boolean: normalizeBoolean,
    number: Number,
    object: normalizeObject,
    string: identity,
  }
  // tslint:disable-next-line
  const method: Function = methods[type]

  return method(input)
}

export function initialGet(input: InitialGet) {
  const typeValue = input.type === undefined ? 'string' : input.type
  const x = localStorage.getItem(input.key)

  if (x === null || x === 'null') {
    localStorage.setItem(input.key, JSON.stringify(input.defaultValue))

    return input.defaultValue
  }

  return normalize(x, typeValue)
}

export function get(key: string, type?: Type) {
  const typeValue = type === undefined ? 'string' : type
  const x = localStorage.getItem(key)

  return normalize(x, typeValue)
}
