import { maybe } from 'rambdax'
interface Speak {
  text: string
  language: Language
}
interface Options {
  lang: string
  rate: number
  volume: number
  pitch: number
}

const synth = window.speechSynthesis
const utterThis = new SpeechSynthesisUtterance()

const enOptions = {
  lang: 'en-US',
  rate: 0.75,
  volume: 1,
  pitch: 0.9,
}
const deOptions = {
  ...enOptions,
  rate: 0.8,
  lang: 'de-DE',
}

function getOptions(input: Speak) {
  return maybe<false | Options>(
    input.language === 'EN',
    enOptions,
    input.language === 'DE' ? deOptions : false
  )
}

export function speak(input: Speak): Promise<void> {
  return new Promise(resolve => {
    const options = getOptions(input)
    if (options === false) { return resolve() }

    utterThis.lang = options.lang
    utterThis.pitch = options.pitch
    utterThis.rate = options.rate
    utterThis.text = input.text
    utterThis.volume = options.volume

    synth.speak(utterThis)
    utterThis.onend = () => {
      resolve()
    }
  })
}
