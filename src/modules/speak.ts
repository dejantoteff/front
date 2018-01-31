import { switcher } from 'rambdax'
interface Speak {
  text: string
  language: Language
}
interface Options {
  lang: string
  rate: number
}
const RATE = 0.91
const VOLUME = 0.53

const synth = window.speechSynthesis

const utterThis = new SpeechSynthesisUtterance()

function getOptions(input) {
  return switcher<false | Options>(input.language)
    .is('EN', { lang: 'en-US', rate: 1 })
    .is('DE', { lang: 'de-DE', rate: 0.88 })
    .default(false)
}

export function speak(input: Speak): Promise<void> {
  return new Promise(resolve => {
    const options = getOptions(input)
    if (options === false) {

      return resolve()
    }
    utterThis.text = input.text
    utterThis.volume = VOLUME
    utterThis.lang = options.lang
    utterThis.rate = options.rate
    synth.speak(utterThis)
    utterThis.onend = () => {
      resolve()
    }
  })
}
