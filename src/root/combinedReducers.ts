import { combineReducers } from 'redux'

// IMPORT_STORES
import { notifyStore } from 'notify/reducers'
import { chooseWordStore } from '../choose_word/reducers'
import { guessWordStore } from '../guess_word/reducers'
import { learningMemeStore } from '../learning_meme/reducers'
import { lessonStore } from '../lesson/reducers'
import { selectArticleStore } from '../select_article/reducers'
import { writeSentenceStore } from '../write_sentence/reducers'
import { navigationStore } from './navigation/reducers'
import { store } from './reducers'

const allReducers = {
  // CONNECT_STORES
  lessonStore,
  selectArticleStore,
  chooseWordStore,
  guessWordStore,
  learningMemeStore,
  navigationStore,
  notifyStore,
  store,
  writeSentenceStore,
}

export const combinedReducers = combineReducers(allReducers)
