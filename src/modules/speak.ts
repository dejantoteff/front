interface Speak {
  text: string
  language: Languages
}

const RATE = 0.91
const VOLUME = 0.53

const synth = window.speechSynthesis

const utterThis = new SpeechSynthesisUtterance()

export function speak(input: Speak): Promise<void> {
  return new Promise(resolve => {
    utterThis.text = input.text
    utterThis.volume = VOLUME
    utterThis.lang = input.language.toLowerCase()
    utterThis.rate = RATE
    synth.speak(utterThis)
    utterThis.onend = () => {
      console.log('speak.done')

      resolve()
    }
  })
}
