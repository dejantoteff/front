import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { maskSentence } from 'string-fn'
import { getNextIndex } from '../../_helpers/getNextIndex'
import { glueRelated } from '../../_helpers/glueRelated'
import { GUESS_WORD_NEXT } from '../../constants'
import { nextReady } from '../actions'

const createWords = x => {
  const [word] = x.split(',')

  return {
    word,
    words: word.split(' '),
  }
}

function createInstance(store: ObservableStore): Action {
  const { fromLanguage, toLanguage } = store.getState().store
  const { db, currentIndex } = store.getState().guessWordStore

  const newIndex = getNextIndex({ length: db.length, index: currentIndex })
  const currentInstance = db[newIndex]

  const relatedKey = `${fromLanguage.toLowerCase()}Related`
  const wordKey = `${fromLanguage.toLowerCase()}Word`
  const key = `${fromLanguage.toLowerCase()}Part`

  const related = glueRelated(currentInstance[relatedKey])
  const { word, words } = createWords(currentInstance[wordKey])
  const sentence = currentInstance[key]

  const { hidden, visible } = maskSentence({ sentence, words })

  const payload = {
    currentInstance,
    hidden,
    visible,
    related,
    sentence,
    word,
  }

  return nextReady(payload)
}

export const nextEpic = (
  action$: ActionsObservable<GuessWordNextAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(GUESS_WORD_NEXT)
    .map(() => createInstance(store))
