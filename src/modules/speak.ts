interface Speak {
  text: string
  language: Languages
}

const synth = window.speechSynthesis

export function speak(input: Speak) {
  const utterThis = new SpeechSynthesisUtterance()
  utterThis.text = input.text
  utterThis.lang = input.language.toLowerCase()
  utterThis.rate = 0.91
  synth.speak(utterThis)
}
