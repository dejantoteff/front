export function settingsTextToSpeech(action: Action, state: Store): Store {
  const newValue = !state.textToSpeechFlag

  if (!state.logged) {

    localStorage.setItem('textToSpeechFlag', `${newValue}`)
  }

  return {
    ...state,
    textToSpeechFlag: newValue,
  }
}
