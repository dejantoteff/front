import { initialGet } from 'client-helpers'

const randomFlag = initialGet({
  defaultValue: false,
  key: 'randomFlag',
  type: 'boolean',
})
const textToSpeechFlag = initialGet({
  defaultValue: true,
  key: 'textToSpeechFlag',
  type: 'boolean',
})
const points = initialGet({
  defaultValue: 0,
  key: 'points',
  type: 'number',
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
