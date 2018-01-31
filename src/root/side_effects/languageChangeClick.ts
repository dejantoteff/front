export function languageChangeClick(action: Action, state: Store): Store{
  localStorage.setItem('fromLanguage', action.payload.from)
  localStorage.setItem('toLanguage', action.payload.to)
  
  return {
    ...state,
    fromLanguage: action.payload.from,
    toLanguage: action.payload.to,
    toggleLanguage: !state.toggleLanguage,
  }
}