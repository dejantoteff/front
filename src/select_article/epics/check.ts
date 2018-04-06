import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { SELECT_ARTICLE_CHECK } from '../../constants'
import { clickReady } from '../actions'

export const checkEpic = (
  action$: ActionsObservable<SelectArticleCheckAction>,
  store: ObservableStore,
): Observable<Action> =>
  action$
    .ofType(SELECT_ARTICLE_CHECK)
    .filter(() => canProceed(store))
    .map(() => clickReady(getNewWordList(store).newWordList))

function canProceed(store: ObservableStore){
  const { changed }  = getNewWordList(store)

  return changed
}

function getNewWordList(store: ObservableStore){
  const { wordList } = store.getState().selectArticleStore.currentInstance
  let changed = false
  const newWordList = wordList.map(_ => {

    const ok = typeof _ === 'object' && _.solved

    if (typeof _ === 'string' || ok){

      return _
    }
    changed = true

    const newArticleSet = _.articleSet.map(x => {
      const status = x.value === _.correct ?
        'CORRECT' :
        'WRONG'

      return {
        ...x,
        status,
      }
    })

    return {
      ..._,
      solved: true,
      articleSet: newArticleSet,
    }
  })

  return {newWordList, changed}
}
