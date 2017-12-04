// ACTION_INTERFACES
interface LearningMemeInitAction { type: 'LEARNING_MEME_INIT' | 'SET_DB' }
interface LearningMemeNextAction { type: 'LEARNING_MEME_NEXT' }
interface LearningMemeCheckAction { type: 'LEARNING_MEME_CHECK' }

interface ChooseWordCheckAction { type: 'CHOOSE_WORD_CHECK' }
interface ChooseWordInitAction { type: 'CHOOSE_WORD_INIT' | 'SET_DB' }
interface ChooseWordListenAction { type: 'CHOOSE_WORD_LISTEN' }
interface ChooseWordNextAction { type: 'CHOOSE_WORD_NEXT' }
interface ChooseWordStepAction { type: 'CHOOSE_WORD_STEP' }

interface PouchReadyAction { type: 'POUCH_READY', payload: any }
interface InitAction { type: 'INIT' }
interface SharedSpeakAction { type: 'SHARED_SPEAK', payload: Languages }

// TYPES
type Languages = 'EN' | 'DE'

type Delay = (ms: number) => Promise<string>
type Sync = () => Promise<SyncOutput>
type SetDB = (input: Store) => Promise<DBInstance[]>
type InitPouch = (input: Pouch) => SyncOutput

// GENERIC
interface DBInstance {
  dePart: string
  enPart: string
  imageSrc?: string | false
  imageSrcOrigin?: string
}

interface DBInstanceImage {
  dePart: string
  enPart: string
  enWord: string
  deWord: string
  imageSrc: string
  imageSrcOrigin?: string
}

// ROOT
interface Store {
  ready: boolean
  points: number
  logged: boolean
  name: string
  instructions: string
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
  // navigationStore: NavigationStore
}

// NAVIGATION
interface NavigationStore {
  active: boolean
}

interface NavigationProps extends BaseProps {
  navigationStore: NavigationStore
  store: Store
}

// LEARNING_MEME
interface LearningMemeStore {
  ready: boolean
  db?: DBInstanceImage[]
  currentInstance?: DBInstanceImage
  question?: string
  currentIndex?: number
  listen?: boolean
  inputState?: string
  sentence?: {
    hidden: string
    visible: string,
  }
}

interface LearningMemeProps extends BaseProps {
  learningMemeStore: LearningMemeStore
}

// CHOOSE_WORD
interface ChooseWordStore {
  ready: boolean
  db?: DBInstance[]
  fillerWords?: object
  currentInstance?: DBInstance
  question?: string[][]
  correctAnswer?: string[]
  currentIndex?: number
  listen?: boolean
  index?: number
}

interface ChooseWordProps extends BaseProps {
  chooseWordStore: ChooseWordStore
}

// OTHER_INTERFACES
interface SyncOutput {
  dbLocal: PouchInstance
  dbCloud: PouchInstance
  dbName: string
  dbURL: string
}

// COMMON
interface GetNextIndex {
  length: number
  index: number
}

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
declare var webkitSpeechRecognition: any

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
  __REDUX_DEVTOOLS_EXTENSION__: any
  webkitSpeechRecognition: any
}

interface Action {
  type: string
  payload?: any
}
