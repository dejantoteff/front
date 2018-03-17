export function settingsTextToSpeech(
  action: Action, 
  state: Store
): Store {
  const newValue = !state.textToSpeechFlag

  if (!state.logged) {

    localStorage.setItem('textToSpeechFlag', `${newValue}`)
  }

  const roughData = {
    ...state.roughData,
    textToSpeech: {
      ...state.roughData.textToSpeech,
      active: newValue,
    },
  }

  return {
    ...state,
    roughData,
    textToSpeechFlag: newValue,
  }
}
