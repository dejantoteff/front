import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { maskSentence, maskWords } from 'string-fn'
import { getNextIndex } from '../../_helpers/getNextIndex'
import { glueRelated } from '../../_helpers/glueRelated'
import { GUESS_WORD_NEXT } from '../../constants'
import { nextReady } from '../actions'

const createWords = x => {
  const [words] = x.split(',')

  return {
    word: maskWords({ words }),
    words: words.split(' '),
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
  const translatedKey = `${toLanguage.toLowerCase()}Part`

  const related = glueRelated(currentInstance[relatedKey])
  const { word, words } = createWords(currentInstance[wordKey])
  const sentence = currentInstance[key]
  const translated = currentInstance[translatedKey]

  const { hidden, visible } = maskSentence({ sentence, words })
  const question = visible.join(' ')
  const answer = hidden.join(' ')

  const payload = {
    answer,
    currentInstance,
    question,
    related,
    translated,
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