declare module 'pouchdb' {
  var PouchDB: any
  export default PouchDB
}

interface Pouch {
  plugin: any
  new(a, b): any
  sync(a, b, c): any
}

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
  __REDUX_DEVTOOLS_EXTENSION__: any
}

interface Action {
  type: string
  payload?: any
}

interface Store {
  ready: boolean
  dbLocal?: PouchInstance
  dbCloud?: PouchInstance
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

interface DBInstance {
  dePart: string
  enPart: string
}

interface ChooseWordStore {
  db: DBInstance[]
  fillerWords: object
  ready: boolean,
  currentInstance: string[][],
  currentIndex: number,
  index: number
}

interface ChooseWordProps extends BaseProps {
  chooseWordStore: ChooseWordStore
}

// ACTION_INTERFACES
interface Init { type: 'INIT', payload?: any }

interface Toggle { type: 'TOGGLE', payload?: any }

// TYPES
type Delay = (ms: number) => Promise<string>
type Work = () => Promise<WorkOutput>
type InitPouch = (input: Pouch) => WorkOutput

// OTHER_INTERFACES
interface WorkOutput {
  dbLocal: PouchInstance
  dbCloud: PouchInstance
  dbName: string
  dbURL: string
}

interface PouchInstance {
  get(x): Promise<any>
}
