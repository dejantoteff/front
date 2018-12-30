import { getterAnt  } from 'client-helpers'
import { darkblue3, green } from 'colors'
import { defaultState } from '../constants'

const {
  randomFlag,
  textToSpeechFlag,
  points,
  fromLanguage,
  toLanguage,
} = getterAnt(defaultState)

const changeLanguage = {
  roughness: 0.6,
  fill: darkblue3,
  fillWeight: 2,
}

const roughData: RoughData = {
  changeLanguage,
  info: { roughness: 0.3, fill: green, fillWeight: 3 },
  next: { roughness: 0.5, fill: darkblue3 },
  random: { roughness: 0, active: randomFlag },
  submit: { roughness: 0.5, fill: darkblue3 },
  textToSpeech: { roughness: 0, active: textToSpeechFlag, fillWeight: 2 },
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
