interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
  __REDUX_DEVTOOLS_EXTENSION__: any
}

interface CreateReducer {
  initialState: object,
  reactions: object
}

// type CreateReducerFn<T> = (input: CreateReducer) => T

interface Action {
  type: string
  payload?: any
}

interface Store {
  inventory: number
}

interface InitialState {
  store: Store
}

interface BaseProps {
  dispatch(input: Action): void
}

interface Props extends BaseProps {
  store: Store
  navigationStore: NavigationStore
}

interface NavigationStore {
  active: boolean
}

interface NavigationProps extends BaseProps {
  navigationStore: NavigationStore
  store: Store
}

interface Init { type: 'INIT', payload?: any }

interface Toggle { type: 'TOGGLE', payload?: any }
