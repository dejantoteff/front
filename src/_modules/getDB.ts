import { wordsX } from 'string-fn'
import {
  filter,
  last,
  map,
} from 'rambdax'

// These word patterns are allowed only inside the sentence
// not in its beginning
// ============================================
function bulgarianException(fromWordBase: string): boolean {

  return fromWordBase.startsWith('по-') || fromWordBase.startsWith('най-')
}

export function getDB(input: GetDB): DataPattern[]{
  const { fromLanguage, toLanguage, db } = input

  const filterFn = xInstance => {
    const partKeyFrom = `${fromLanguage.toLowerCase()}Part`
    const partKeyTo = `${toLanguage.toLowerCase()}Part`
    const wordKeyFrom = `${fromLanguage.toLowerCase()}Word`
    const wordKeyTo = `${toLanguage.toLowerCase()}Word`

    const fromPart = xInstance[partKeyFrom]
    const fromWord = xInstance[wordKeyFrom]

    const hasToLanguageWord = xInstance[wordKeyTo] !== undefined
    const hasToLanguagePart = xInstance[partKeyTo] !== undefined

    const hasToLanguage = hasToLanguagePart && hasToLanguageWord

    const canContinue = fromPart !== undefined &&
      fromWord !== undefined &&
      hasToLanguage
    const tooLong = fromPart.length > 102

    // This happens because not all instances have Bulgarian language
    // ============================================
    if (!canContinue || tooLong){
      console.log({xInstance})
      return false
    } 

    const fromWordBase: string = last(fromWord.split(' '))
    const words = wordsX(fromPart).map(x => x.toLowerCase())

    return words.includes(fromWordBase.toLowerCase()) ||
      bulgarianException(fromWordBase)
  }

  const filtered = filter(filterFn, db)

  const mapped: DataPattern[] = map<any, DataPattern>(xInstance => {
    const fromPart = xInstance[`${fromLanguage.toLowerCase()}Part`]
    const fromWord = xInstance[`${fromLanguage.toLowerCase()}Word`]
    const imageSrc = xInstance.imageSrc
    const toPart = xInstance[`${toLanguage.toLowerCase()}Part`]
    const toWord = xInstance[`${toLanguage.toLowerCase()}Word`]

    return {
      altTag: xInstance.altTag,
      fromPart,
      fromWord,
      imageSrc,
      toPart,
      toWord,
    }
  }, filtered)

  return mapped
}
