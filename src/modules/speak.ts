interface Speak {
  text: string
  language: Languages
}

const RATE = 0.91

const synth = window.speechSynthesis

export function speak(input: Speak): Promise<void> {
  return new Promise(resolve => {
    const utterThis = new SpeechSynthesisUtterance()
    utterThis.text = input.text
    utterThis.lang = input.language.toLowerCase()
    utterThis.rate = RATE
    synth.speak(utterThis)
    utterThis.onend = () => {
      resolve()
    }
  })
}
