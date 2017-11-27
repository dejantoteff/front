import { createReducer } from '../common'
import { TOGGLE } from './actions'
export interface InitialState{
  activeMenu: boolean
}
const initialState: InitialState = {
  activeMenu: false,
}

const reactions = {
  [TOGGLE]: (state: InitialState, action: any) => ({
    ...state,
    activeMenu: !state.activeMenu,
  }),
}

export default createReducer({initialState, reactions})
