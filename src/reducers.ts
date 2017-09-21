import { combineReducers } from 'redux'

const initialState = {
  password     : false,
  db           : false,
  dbCloud      : false,
  dbDraftCloud : false,
  dbDraft      : false,
  logged       : false,
}

const reactions = {
  INIT_READY: (state: any, action:any) => ({
    ...state,
    logged : true,
  })
}

const mainStore = (state = initialState, action:any) => {
  if (Object.keys(reactions).includes(action.type)) {
    return reactions[ action.type ](state, action)
  }

  return state
}

export default combineReducers(
  {
    mainStore,
  }
)
