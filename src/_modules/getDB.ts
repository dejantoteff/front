import {
  filter,
  head,
  last,
  map,
} from 'rambdax'

import { wordsX } from 'string-fn'

/**
 * These word patterns are allowed only inside the sentence_
 * not in its beginning
 */
function handleBulgarianException(fromWordBase: string): boolean {
  return fromWordBase.startsWith('по-') || fromWordBase.startsWith('най-')
}

export const getDB = (input: GetDB): DataPattern[] => {
  const { fromLanguage, toLanguage, db } = input

  const filterFn = xInstance => {
    try {
      const fromPart = xInstance[`${fromLanguage.toLowerCase()}Part`]
      const fromWordRaw: string = xInstance[`${fromLanguage.toLowerCase()}Word`]

      const hasToLanguageWord = xInstance[`${toLanguage.toLowerCase()}Word`] !== undefined
      const hasToLanguagePart = xInstance[`${toLanguage.toLowerCase()}Part`] !== undefined

      const hasToLanguage = hasToLanguagePart && hasToLanguageWord

      const canContinue = fromPart !== undefined &&
        fromWordRaw !== undefined &&
        hasToLanguage

      // This happens because not all instances have Bulgarian language
      if (!canContinue) {

        return false
      }

      const fromWord: string = head(fromWordRaw.split(','))

      const fromWordBase: string = last(fromWord.split(' '))

      const words = wordsX(fromPart).map(x => x.toLowerCase())

      return words.includes(fromWordBase.toLowerCase()) ||
        handleBulgarianException(fromWordBase)
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
