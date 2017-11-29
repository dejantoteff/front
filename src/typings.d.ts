// POUCH
declare module 'pouchdb' {
  var PouchDB: any
  export default PouchDB
}

interface Pouch {
  plugin: any
  new(a, b): any
  sync(a, b, c): any
}

interface PouchInstance {
  get(x): Promise<any>
  allDocs(input?: object): Promise<any>
}

// BOILDERPLATE
interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
  __REDUX_DEVTOOLS_EXTENSION__: any
}

interface Action {
  type: string
  payload?: any
}

// ROOT
interface Store {
  ready: boolean
  dbLocal?: PouchInstance
  dbCloud?: PouchInstance
  db?: DBInstance[]
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

// GENERIC
interface DBInstance {
  dePart: string
  enPart: string
  imageSrc?: string | false
  imageSrcOrigin?: string
}

// NAVIGATION
interface NavigationStore {
  active: boolean
}

interface NavigationProps extends BaseProps {
  navigationStore: NavigationStore
  store: Store
}

// CHOOSE_WORD
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
interface ChooseWordInitAction { type: 'CHOOSE_WORD_INIT' | 'SET_DB', payload?: any }

interface PouchReadyAction { type: 'POUCH_READY', payload?: any }

interface InitAction { type: 'INIT', payload?: any }

interface ToggleAction { type: 'TOGGLE', payload?: any }

// TYPES
type Delay = (ms: number) => Promise<string>
type Sync = () => Promise<SyncOutput>
type SetDB = (input: Store) => Promise<DBInstance[]>
type InitPouch = (input: Pouch) => SyncOutput

// OTHER_INTERFACES
interface SyncOutput {
  dbLocal: PouchInstance
  dbCloud: PouchInstance
  dbName: string
  dbURL: string
}
