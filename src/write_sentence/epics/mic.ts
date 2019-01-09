import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { NotifyInput } from 'notify'
import { distanceGerman } from 'string-fn'
import { WRITE_SENTENCE_MIC } from '../../constants'

import { path, switcher } from 'rambdax'
import { getCommons } from '../../_modules/selectors';
import { sharedAddPoints } from '../../root/actions'
import { micReady } from '../actions'

const greaterThen = x => y => y > x

function calculatePointsAnt(spoken, sentence): number{
  const distance = distanceGerman(
    spoken,
    sentence
  )
  const rate = switcher<number>(sentence.length)
    .is(greaterThen(60), 1.4)
    .is(greaterThen(45), 1.3)
    .default(1.15)

  const better = Math.floor(distance/rate)

  return switcher<number>(better)
    .is(greaterThen(20), 0)
    .is(greaterThen(16), 1)
    .is(greaterThen(12), 2)
    .is(greaterThen(9), 3)
    .default(13 - better)
}

function notify(input: string): NotifyInput{
  return {
    payload: { message: input, ms: 5000 },
    type: 'notify@INFO',
  }
}

const listenFilter = store => 
  store.getState().writeSentenceStore.listen 

export const micEpic = (
  action$: ActionsObservable<WriteSentenceMicAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(WRITE_SENTENCE_MIC)
    .filter(() => listenFilter(store))
    .switchMap(action =>
      new Observable(observer => {
        const spoken = action.payload
        const { textToSpeechFlag, fromLanguage } = getCommons(store)

        const sentence = path(
          'writeSentenceStore.currentInstance.fromPart',
          store.getState()
        )
        const points = calculatePointsAnt(
          spoken,
          sentence
        )
        if (points > 0)
          observer.next(sharedAddPoints(points))

        observer.next(micReady())
        observer.next(notify(spoken))
        if (textToSpeechFlag) observer.next(fromLanguage)

        observer.complete()
      })
    )
