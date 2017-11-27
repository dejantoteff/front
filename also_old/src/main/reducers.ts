import { createReducer } from '../common'

export const initialState: MainInitialState = {
  mainFoo: 'MAIN_BAR',
}

const reactions = {
  X: (state: any, action: any) => ({
    ...state,
    x: true,
  }),
}

export const mainStore = createReducer({ initialState, reactions })
