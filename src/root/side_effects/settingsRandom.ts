export function settingsRandom(action: Action, state: Store): Store{
  const newValue = !state.randomFlag
  localStorage.setItem('randomFlag', `${newValue}`)
  
  return {
    ...state,
    randomFlag: newValue,
  }
}