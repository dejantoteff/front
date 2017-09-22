declare function require(name: string): string

declare var process: {
   env: {
       NODE_ENV: string,
   },
}

interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any }

interface ReduxAction {
  type: string
  payload?: any
}

interface Props {
    dispatch (input: ReduxAction): void
}
