import { combineReducers } from 'redux'
import carrierReducers from './carrier/reducers'
import {createReducer} from './common'
const initialState = {}

const reactions = {
  X: (state: any, action: any) => ({
    ...state,
    x : true,
  }),
}
const mainStore = createReducer({initialState, reactions})

export default combineReducers(
  {
    carrierReducers,
    mainStore,
  },
)
