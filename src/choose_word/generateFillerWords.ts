import {
  compose,
  F,
  filter,
  flatten,
  identity,
  map,
  pluck,
  produce,
  range,
  tap,
  uniq,
} from 'rambdax'

import {
  camelCase,
  wordsX,
} from 'string-fn'

const filterFn = (x: string): boolean => {
  return x.length === camelCase(x).length
}

const produceFn = () => {
  const willReturn = {}
  range(2, 20).map(index => {
    willReturn[index] = filter((x: string) => x.length === index)
  })

  return willReturn
}

export function generateFillerWords(input: Array<object>): any {
  return compose(
    produce(produceFn()),
    filter((x: string) => !x.includes(',')),
    uniq,
    flatten,
    map(wordsX),
    pluck('dePart'),
  )(input)
}
