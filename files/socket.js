const server = require('http').createServer()
const { detailedDiff } = require('deep-object-diff')

const io = require('socket.io')(server)

const { log } = require('log')
const { type, equals, take } = require('rambdax')

const EMPTY_DIFF = {
  added   : {},
  deleted : {},
  updated : {},
}

let stateHolder = {}
const LIMIT = 200

const isEmptyObject = equals({})

const LABEL = 'tag=label'
const LOG_FN = 'tag=logfn'
const SEP = 'tag=sep'
const SEPX = 'tag=sepx'

const sep = () => log('________________', SEP)
const sepx = () => log('==================================', SEPX)

function logFn (input, inputType, prop) {
  if (inputType === 'String') {
    return log(prop, inputType, take(100, input), LOG_FN)
  }

  if (inputType === 'Boolean' || inputType === 'Number') {
    return log(prop, inputType, input, LOG_FN)
  }

  if (inputType === 'Array') {
    log('Head.array',input[0], LOG_FN)

    return log(prop, inputType, `length: ${ input.length }`, LOG_FN)
  }

  if (inputType === 'Object') {
    return log(prop, inputType, `props: ${ Object.keys(input) }`, LOG_FN)
  }

  log(prop, inputType, LOG_FN)
}

function logTooLong (input, label = '') {
  const inputType = type(input)

  const labelMethod = label === '' ?
    'warning.tag=warning' :
    'info.tag=label'

  log(label, labelMethod)

  if (inputType === 'String') {
    log(take(100, input), LOG_FN)
    sep()

    return Promise.resolve()
  }

  if (inputType === 'Array') {
    return logTooLong(
      input[ 0 ],
      `Array with length '${ input.length }' head.array`
    )
  }

  if (inputType === 'Object') {
    log('Object with props:', Object.keys(input), LABEL)

    Object.keys(input).forEach(
      prop => {
        if (prop === 'convertedImage') {
          log('converted.image is too long to log', 'info')
        } else {
          logFn(input[ prop ], type(input[ prop ]), prop)
        }
      }
    )
    sep()

    return Promise.resolve()
  }

  log(type(input), 'box')
  sepx()
  sepx()
  sepx()

  return Promise.resolve()
}

function logObject (input, label) {
  if (isEmptyObject(input)) {
    return Promise.resolve()
  }
  const asString = JSON.stringify(input)

  if (label) {
    log(label, 'back.tag=back')
  }

  if (asString.length < LIMIT) {
    log(input, 'obj')

    return Promise.resolve()
  }

  return logTooLong(input)
}

function logPayload (payload) {
  if (payload === undefined) {
    return Promise.resolve()
  }

  return logTooLong(payload, 'payload')
}

async function logDiff (diff) {
  if (equals(diff, EMPTY_DIFF)) {
    return
  }

  await logObject(diff.added, 'Added')
  await logObject(diff.updated, 'Updated')
  await logObject(diff.deleted, 'Deleted')
}

async function logActionState (actionRaw, stateRaw) {
  const action = JSON.parse(actionRaw)
  const state = JSON.parse(stateRaw)

  log(action.type, 'info.tag=info')
  await logPayload(action.payload)
  await logDiff(detailedDiff(stateHolder, state))

  stateHolder = state
  sepx()
}

exports.logActionState = logActionState
exports.sep = sep
exports.sepx = sepx
