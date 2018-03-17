import { initialGet } from 'client-helpers'
import { darkblue3, green } from 'colors'

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
  info: {roughness: 0.3, fill: green, fillWeight: 3},
  random: {roughness: 0, active: randomFlag},
  refresh: {roughness: 0.6, fill: darkblue3, fillWeight: 2,},
  send: {roughness: 0.5, fill: darkblue3},
  stepForward: {roughness: 0.5, fill: darkblue3},
  volumeDown: {roughness: 0, active: textToSpeechFlag, fillWeight: 2},
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
