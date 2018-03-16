import { initialGet } from 'client-helpers'
import { dark3, green } from 'colors'

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

const roughData: RoughData = {
  info: {roughness: 0.3, fill: green},
  random: {roughness: 0.4, active: randomFlag},
  refresh: {roughness: 0.5, fill: dark3},
  send: {roughness: 0.3, fill: dark3},
  stepForward: {roughness: 0.7, fill: dark3},
  volumeDown: {roughness: 0.4, active: textToSpeechFlag},
}

export function getInitialState(): Store {

  return {
    fromLanguage,
    instructions: '',
    logged: false,
    name: '',
    points,
    randomFlag,
    ready: false,
    roughData,
    textToSpeechFlag,
    toLanguage,
    toggleLanguage: false,
  }
}
