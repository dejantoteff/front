import { delay } from 'rambdax'
import { SHORT_DELAY } from '../constants'

function normalizeLanguage(language: Language): string {
  return `${language.toLowerCase()}-${language}`
}
const WARN = 'Need to reload as speech recognition service stopped working'

export function listen(language: Language): Promise<string> {
  return new Promise(resolve => {
    const recognition = new webkitSpeechRecognition()
    recognition.lang = normalizeLanguage(language)
    recognition.interimResults = false
    recognition.continious = false
    recognition.maxAlternatives = 1
    recognition.start()
    recognition.onerror = err => {
      recognition.stop()
      confirm(WARN)
      window.location.reload(false)
    }
    recognition.onresult = event => {
      recognition.stop()

      delay(SHORT_DELAY).then(() => {
        resolve(event.results[0][0].transcript)
      })
    }
  })
}
