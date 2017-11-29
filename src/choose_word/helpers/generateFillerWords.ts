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

const produceFn = () => {
  const willReturn = {}
  range(LOW_LIMIT, HIGH_LIMIT).map(index => {
    willReturn[index] = filter((x: string) => x.length === index)
  })

  return willReturn
}

export function generateFillerWords(input: object[]): any {
  return compose(
    produce(produceFn()),
    filter((x: string) => !x.includes(',')),
    uniq,
    flatten,
    map(wordsX),
    pluck('dePart'),
  )(input)
}
