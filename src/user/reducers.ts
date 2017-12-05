const initialState = {
  logged: false,
  ready: false
}

export function userStore(
  state: UserStore = initialState,
  action: Action,
): UserStore {

  switch (action.type) {
    default:
      return state
  }
}
