import { initialGet } from 'client-helpers'

const randomFlag = initialGet({
  defaultValue: false,
  key: 'randomFlag',
})
const textToSpeechFlag = initialGet({
  defaultValue: true,
  key: 'textToSpeechFlag',
})
const points = initialGet({
  defaultValue: 0,
  key: 'points',
})
const fromLanguage = initialGet<Language>({
  defaultValue: 'DE',
  key: 'fromLanguage',
})
const toLanguage = initialGet<Language>({
  defaultValue: 'EN',
  key: 'toLanguage',
})

export function getInitialState(): Store {
  return {
    fromLanguage: fromLanguage,
    instructions: '',
    logged: false,
    name: '',
    points: points,
    randomFlag: randomFlag,
    ready: false,
    textToSpeechFlag: textToSpeechFlag,
    toLanguage: toLanguage,
    toggleLanguage: false,
  }
}
