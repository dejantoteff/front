import { setter } from 'client-helpers'
export function settingsRandom(action: Action, state: Store): Store {
  const newValue = !state.randomFlag

  if (!state.logged) { setter('randomFlag', newValue) }

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
