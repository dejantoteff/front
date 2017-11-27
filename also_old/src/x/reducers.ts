import { classnames } from 'classnames'
import { createReducer } from '../common'
import { TOGGLE } from './actions'

export const initialState: InitialStateX = {
  counter: 0,
  foo: 'x__passive',
  fooX: false,
}

const reactions = {
  X_TOGGLE: (state: InitialStateX, action: any) => ({
    ...state,
    counter: state.counter + 1,
    foo: classnames({
      x__active: () => state.counter % 2 === 0,
      x__passive: () => state.counter % 2 === 1,
    }),
    fooX: !state.fooX,
  }),

}

export const xStore = createReducer({ initialState, reactions })
