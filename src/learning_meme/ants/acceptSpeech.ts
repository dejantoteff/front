import { getter } from 'client-helpers'
import { delay } from 'rambdax'
import { clickBee } from '../../_helpers/bees/click'
import { isNextBee } from '../../_helpers/bees/isNext'
import { normalizeLanguage } from '../../_helpers/mini/normalizeLanguage'
import { solvedAnt } from './solved'

const BUFFER = 500
let pause

async function detect(event) {
  const spoken = event.results[0][0].transcript
  console.log({spoken})

  if (isNextBee(spoken)) return clickBee('next')

  const input = document.getElementsByTagName('input')
  if (solvedAnt()) return

  input[0].value = spoken
  await delay(pause)

  clickBee('submit')
}

export function acceptSpeechAnt(){
  const fromLanguage = getter<Language>('fromLanguage')
  const recognition = new webkitSpeechRecognition()
  pause = getter<number>('pause') * 1000

  const restart = e => {
    if (e.error) console.warn('ACCEPT_SPEECH')

    recognition.stop()
    delay(BUFFER).then(() => recognition.start())
  }

  recognition.lang = normalizeLanguage(fromLanguage)
  recognition.interimResults = false
  recognition.continious = true
  recognition.maxAlternatives = 1

  recognition.onerror = restart
  recognition.onresult = detect
  recognition.onspeechend = restart

  recognition.start()
}
