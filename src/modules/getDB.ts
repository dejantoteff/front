import {
  filter,
  head,
  last,
  map,
} from 'rambdax'

import { wordsX } from 'string-fn'

export const getDB = (input: GetDB): DataPattern[] => {
  const { fromLanguage, toLanguage, db } = input

  const filterFn = xInstance => {
    try {
      const fromPart = xInstance[`${fromLanguage.toLowerCase()}Part`]

      const fromWordRaw: string = xInstance[`${fromLanguage.toLowerCase()}Word`]

      const fromWord: string = head(fromWordRaw.split(','))

      const fromWordBase: string = last(fromWord.split(' '))
      
      return wordsX(fromPart).includes(fromWordBase)
    } catch (err) {
      console.warn(err)
    }
  }

  const filtered = filter(filterFn, db)

  const mapped = map((xInstance: any) => {
    const fromPart = xInstance[`${fromLanguage.toLowerCase()}Part`]
    const toPart = xInstance[`${toLanguage.toLowerCase()}Part`]
    
    const fromWordRaw = xInstance[`${fromLanguage.toLowerCase()}Word`]
    const fromWord = head(fromWordRaw.split(','))
    
    const toWord = xInstance[`${toLanguage.toLowerCase()}Word`]
    const imageSrc = xInstance.imageSrc

    return {
      fromPart,
      fromWord,
      imageSrc,
      toPart,
      toWord,
    }
  }, filtered)

  return mapped
}
