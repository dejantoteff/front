import { delay } from 'rambdax'
import { SHORT_DELAY } from '../constants'

function normalizeLanguage(language: Language): string {
  return `${language.toLowerCase()}-${language}`
}

export function listen(language: Language): Promise<string> {
  return new Promise(resolve => {
    const recognition = new webkitSpeechRecognition()
    recognition.lang = normalizeLanguage(language)
    recognition.interimResults = false
    recognition.continious = false
    recognition.maxAlternatives = 1
    recognition.start()
    recognition.onerror = err => {
      console.log(err)

      recognition.stop()
      resolve('ERROR')
    }
    recognition.onresult = event => {
      recognition.stop()

      delay(SHORT_DELAY).then(() => {
        resolve(event.results[0][0].transcript)
      })
    }
  })
}
