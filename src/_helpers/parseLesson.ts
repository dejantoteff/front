import {
  always,
  filter,
  head,
  ifElse,
  nth,
  piped,
  remove,
  split,
  startsWith,
  tail,
  trim,
} from 'rambdax'

const getTitle = x => piped(
  x,
  split('\n'),
  filter(Boolean),
  head,
  remove('#'),
  trim,
)

const getContent = x => piped(
  x,
  split('\n'),
  filter(Boolean),
  tail,
)

const getExample = x => piped(
  x,
  split('\n'),
  filter(Boolean),
  nth(1),
  trim,
)

const getTranslation = x => piped(
  x,
  split('\n'),
  filter(Boolean),
  filter(startsWith('>')),
  ifElse(
    y => y.length > 0,
    y => remove('> ', head(y)),
    always(''),
  ),
)

export function parseLesson(text: any){
  const parts = text.split('---')

  return parts.map(x => {
    const title = getTitle(x)
    if (x.includes('[') && x.includes(']')){
      const example = getExample(x)
      const translation = getTranslation(x)

      return {
        title,
        example,
        translation,
      }
    }

    return {
      title,
      text: getContent(x),
    }
  })
}
