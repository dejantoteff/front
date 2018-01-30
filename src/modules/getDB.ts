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
      const canContinue = fromPart !== undefined && fromWordRaw !== undefined
      
      // This happens because not all instances have Bulgarian language
      if(!canContinue){

        return false
      }
      
      const fromWord: string = head(fromWordRaw.split(','))
      
      const fromWordBase: string = last(fromWord.split(' '))

      return wordsX(fromPart).includes(fromWordBase)
    } catch (e) {
      throw e
    }
  }

  const filtered = filter(filterFn, db)

  const mapped: DataPattern[] = map<any, DataPattern>(xInstance => {
    const fromPart: string = xInstance[`${fromLanguage.toLowerCase()}Part`]
    const toPart = xInstance[`${toLanguage.toLowerCase()}Part`]

    const fromWordRaw = xInstance[`${fromLanguage.toLowerCase()}Word`]
    const fromWord: string = head(fromWordRaw.split(','))

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
