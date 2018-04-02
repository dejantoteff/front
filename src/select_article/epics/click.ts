import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { SELECT_ARTICLE_CLICK } from '../../constants'
import { clickReady } from '../actions'

export const clickEpic = (
  action$: ActionsObservable<SelectArticleClickAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$.ofType(SELECT_ARTICLE_CLICK)
  .switchMap((action: any) =>

    /**
     * Keep the long form because of textToSpeech
     */
    new Observable(observer => {
      const { wordList } = store.getState().selectArticleStore.currentInstance

      const isCorrect = action.payload.word === action.payload.article.correct

      if(isCorrect){
        console.log('emit +1')
      }

      const newWordList = wordList.map(_ => {
        if(typeof _ !== 'string' && _.index === action.payload.article.index){
          return {
            ..._,
            solved: true
          }
        }

        return _
      })

      observer.next(clickReady(newWordList))

      observer.complete()
    })
  )