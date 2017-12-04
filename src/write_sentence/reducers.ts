const initialState = {
  ready: false,
}

export function writeSentenceStore(
  state: WriteSentenceStore = initialState,
  action: Action,
): WriteSentenceStore {

  switch (action.type) {
    case 's':
      return {
        ...state,
      }
    default:
      return state
  }
}
