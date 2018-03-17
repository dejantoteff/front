export function settingsTextToSpeech(action: Action, state: Store): Store {
  const newValue = !state.textToSpeechFlag

  if (!state.logged) {

    localStorage.setItem('textToSpeechFlag', `${newValue}`)
  }

  const roughData = {
    ...state.roughData,
    volumeDown: {
      ...state.roughData.volumeDown,
      active: newValue,
    },
  }

  return {
    ...state,
    roughData,
    textToSpeechFlag: newValue,
  }
}
