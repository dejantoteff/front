import { 
  SELECT_ARTICLE_INIT_READY, 
  SELECT_ARTICLE_NEXT_READY,
  SELECT_ARTICLE_UNMOUNT,
} from '../constants'

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
    case SELECT_ARTICLE_NEXT_READY:
      return {
        ...state,
        ready: true,
        ...action.payload
      }
    case SELECT_ARTICLE_UNMOUNT:
      return {
        ...state,
        ...initialState,
      }  
    default:
      return state
  }
}