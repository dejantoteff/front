export function settingsRandom(action: Action, state: Store): Store {
  const newValue = !state.randomFlag

  if (!state.logged) {

    localStorage.setItem('randomFlag', `${newValue}`)
  }

  const roughData = {
    ...state.roughData,
    random: {
      ...state.roughData.random,
      active: newValue,
    },
  }

  return {
    ...state,
    randomFlag: newValue,
    roughData,
  }
}
