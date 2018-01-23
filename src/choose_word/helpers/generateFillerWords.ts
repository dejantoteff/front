import {
  compose,
  filter,
  flatten,
  map,
  pluck,
  produce,
  range,
  uniq,
} from 'rambdax'

import { wordsX } from 'string-fn'

// Limit of allowed word length
const LOW_LIMIT = 2
const HIGH_LIMIT = 20

type Produce = {
  [key: number]: Function
}
type ProduceOut = {
  [key: number]: string[]
}

const produceFn = (): Produce => {
  const willReturn = {}
  range(LOW_LIMIT, HIGH_LIMIT).map(index => {
    willReturn[index] = filter((x: string) => x.length === index)
  })

  return willReturn
}

export function generateFillerWords(input: DataPattern[]): ProduceOut {
  const plucked = pluck<string>('fromPart', input)
  const mapped = map(wordsX, plucked)
  const afterUniq = uniq(flatten<string>(mapped))
  const filtered = filter(
    (x: string) => !x.includes(',') || !x.includes('-') || !x.includes('.'),
    afterUniq
  )
  const produced = produce<Produce, ProduceOut>(produceFn(), filtered)

  return produced
}
