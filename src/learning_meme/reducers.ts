const initialState = {
  ready: true,
}

export function learningMemeStore(
  state: LearningMemeStore = initialState,
  action: Action,
): LearningMemeStore {

  switch (action.type) {
    case 'NAVIGATION_TOGGLE':
      return {
        ...state,
      }
    default:
      return state
  }
}
