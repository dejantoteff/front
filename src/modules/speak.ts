type Languages = 'en' | 'de'

interface Speak {
  text: string
  language: Languages
}

const synth = window.speechSynthesis

// TODO change language direction
export function speak(input: Speak) {
  const utterThis = new SpeechSynthesisUtterance(input.text)
  utterThis.lang = input.language
  utterThis.rate = 0.91
  synth.speak(utterThis)
}
