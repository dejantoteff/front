import { combineReducers } from 'redux'

const initialState = {}

const reactions = {
  X: (state: any, action: any) => ({
    ...state,
    x : true,
  }),
}

const mainStore = (state = initialState, action: any) => {
  if (Object.keys(reactions).includes(action.type)) {
    return reactions[ action.type ](state, action)
  }

  return state
}

export default combineReducers(
  {
    mainStore,
  },
)
