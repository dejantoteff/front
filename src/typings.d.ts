interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any }

interface ReduxAction {
  type: string
  payload?: any
}

interface Props {
  dispatch(input: ReduxAction): void
}

interface CreateReducer {
  initialState: object,
  reactions: object
}

interface InitialStateX {
  fooX: boolean,
  counter: number,
  foo: string
}

interface MainInitialState {
  mainFoo: string
}

interface MainProps extends Props {
  mainStore: MainInitialState
}
