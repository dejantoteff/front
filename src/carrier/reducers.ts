const initialState = {
  active: true,
}

export function Store(
  state: Store = initialState,
  action: Action,
): Store {

  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        active: !state.active,
      }
    default:
      return state
  }
}
