export function sharedAddPoints(action: Action, state: Store): Store{
  const newValue = state.points + Number(action.payload)
  
  if(!state.logged){

    localStorage.setItem('points', `${newValue}`)
  }

  return {
    ...state,
    points: newValue,
  }
}