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
    // STORE_SWITCH
    default:
      return state
  }
}