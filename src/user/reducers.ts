const initialState = {
  logged: false,
  ready: true
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
