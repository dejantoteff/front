import {
  append,
  compose,
  filter,
  identity,
  shuffle,
  take,
} from 'rambdax'

/**
 * It returns two filler words for a given word.
 * If the fillers collection cannot give at least
 * two words, the function will return `false`.
 *
 * @export
 * @param {{
 *   word: string,
 *   fillers: Fillers,
 * }} input
 * @returns {(Array<string>)}
 */
export function getFillers(input: {
  word: string,
  fillers: Fillers,
}): string[] {
  const len = input.word.length

  if (
    input.fillers[len] === undefined ||
    input.fillers[len].length < 3
  ) {

    return [input.word]
  }

  return compose(
    shuffle,
    append(input.word),
    take<string>(2),
    filter((x: string) => x !== input.word),
  )(input.fillers[len])
}
