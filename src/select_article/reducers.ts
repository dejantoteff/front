import { SELECT_ARTICLE_INIT_READY } from '../constants'

const initialState = {
  "ready": false,
  "currentIndex": -1,
  "db": [],
  "currentInstance": {}
}
  
export function selectArticleStore(
  state: SelectArticleStore = initialState,
  action: Action,
): SelectArticleStore {

  switch (action.type) {
    case SELECT_ARTICLE_INIT_READY:
      return {
        ...state,
        currentIndex: -1,
        ...action.payload
      }
    default:
      return state
  }
}