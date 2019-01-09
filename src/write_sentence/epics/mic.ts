import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { distanceGerman } from 'string-fn'
import { WRITE_SENTENCE_READY } from '../../constants'

import { getter } from 'client-helpers'
import { delay, path, switcher } from 'rambdax'
import { normalizeLanguage } from '../../_helpers/mini/normalizeLanguage'
import { getCommons } from '../../_modules/selectors';
import { sharedAddPoints } from '../../root/actions'
import { setIndex, stop } from '../actions'

// const BUFFER = 700
const DEFAULT_PAUSE = 1433
// let pause
const fromLanguage = getter<Language>('fromLanguage')
const recognition = new webkitSpeechRecognition()

function acceptSpeechAnt(): Promise<string>{
  // EVENT EMITTER
  return new Promise(resolve => {
    // let lock = false
    
    const detect = event =>  {
      const spoken = event.results[0][0].transcript
      // lock = true
      recognition.stop()
      return resolve(spoken)
    }
  
    const restart = e => {
      if (e.error) console.warn('ACCEPT_SPEECH')
      // if(lock) return
      recognition.stop()
      delay(DEFAULT_PAUSE).then(() => recognition.start())
    }
  
    recognition.lang = normalizeLanguage(fromLanguage)
    recognition.interimResults = false
    recognition.continious = true
    recognition.maxAlternatives = 1
  
    recognition.onerror = restart
    recognition.onresult = detect
    recognition.onspeechend = restart
  
    recognition.start()
  })

}

const greaterThen = x => y => x > y

function calculatePointsAnt(spoken, sentence): number{
  const distance = distanceGerman(
    spoken,
    sentence
  )
  const rate = switcher<number>(sentence.length)
    .is(x => x > 60, 1.4)
    .is(x => x > 45, 1.3)
    .default(1.15)

  const better = Math.floor(distance/rate)

  return switcher<number>(better)
    .is(x => x>20, 0)
    .is(x => x>16, 1)
    .is(x => x>12, 2)
    .is(x => x>9, 3)
    .default(13 - better)
}

export const micEpic = (
  action$: ActionsObservable<WriteSentenceMicAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(WRITE_SENTENCE_READY)
    .switchMap(() => {
      console.log({b:12})
      return new Observable(observer => {
        const { textToSpeechFlag, fromLanguage } = getCommons(store)
        acceptSpeechAnt().then(spoken => {
          const sentence = path(
            'writeSentenceStore.currentInstance.fromPart',
            store.getState()
          )
          const points = calculatePointsAnt(
            spoken,
            sentence
          )
          console.log({points,a:1})

          if (points > 0) observer.next(sharedAddPoints(points))

          observer.next(stop())
          if (textToSpeechFlag) observer.next(fromLanguage)
  
          observer.complete()
        })
      })
    })
    