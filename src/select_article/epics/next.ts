import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { wordsX } from 'string-fn'

import { SELECT_ARTICLE_NEXT } from '../../constants'
import { getNextIndex } from '../../_helpers/getNextIndex'
import { allArticles, whichArticleSet } from '../../_modules/filterSelectArticle'
import { nextReady } from '../actions';

export const nextEpic = (
  action$: ActionsObservable<SelectArticleNextAction>,
  store: ObservableStore,
): Observable<Action> =>

  action$.ofType(SELECT_ARTICLE_NEXT)
  .switchMap(() =>

    /**
     * Keep the long form because of textToSpeech
     */
    new Observable(observer => {
      const {db, oldCurrentIndex, toLanguage} = getter(store)
      const currentIndex = getNextIndex({
        index: oldCurrentIndex,
        length: db.length,
      })

      const instance = db[currentIndex]
      const translated = instance[`${toLanguage}Part`]
      const imageSrc = instance.imageSrc

      const words = wordsX(instance.dePart)
      let counter = 0

      const wordList: ArticleWordList = words.map(word => {
        if(!allArticles.includes(word.toLowerCase())){
          
          return word
        }
        const articleSet = whichArticleSet(word.toLowerCase())
        
        /**
         * Hold reference to the original case of the word 
         */
        return {
          solved: false,
          correct: word.toLowerCase(),
          word,
          articleSet,
          index: counter++
        }
      })

      const currentInstance = {
        wordList,
        translated,
        imageSrc
      }

      observer.next(nextReady({
        currentInstance, 
        currentIndex
      }))

      observer.complete()
    })
  )    

function getter(store: ObservableStore){
  const {
    currentIndex,
    db,
  } = store.getState().selectArticleStore
  const {
    toLanguage,
  } = store.getState().store

  return {db, oldCurrentIndex: currentIndex, toLanguage: toLanguage.toLowerCase()}
}  