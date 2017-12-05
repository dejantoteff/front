// ACTION_INTERFACES
interface UserSubmitAction { type: 'USER_REQUEST_REGISTER' | 'USER_REQUEST_LOGIN' }
interface UserInitAction { type: 'USER_INIT' }

interface WriteSentenceInitAction { type: 'WRITE_SENTENCE_INIT' | 'SET_DB' }
interface WriteSentenceNextAction { type: 'WRITE_SENTENCE_NEXT' }
interface WriteSentenceListenAction { type: 'WRITE_SENTENCE_LISTEN', payload: any }
interface WriteSentenceCheckAction { type: 'WRITE_SENTENCE_CHECK' }
interface WriteSentenceStepAction { type: 'WRITE_SENTENCE_STEP' }
interface WriteSentenceInitAction { type: 'WRITE_SENTENCE_INIT' | 'SET_DB' }

interface LearningMemeInitAction { type: 'LEARNING_MEME_INIT' | 'SET_DB' }
interface LearningMemeNextAction { type: 'LEARNING_MEME_NEXT' }
interface LearningMemeListenAction { type: 'LEARNING_MEME_LISTEN', payload: any }
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
  enWord: string
  deWord: string
  imageSrc?: string | false
  imageSrcOrigin?: string
}

interface DBInstanceImage extends DBInstance {
  imageSrc: string
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
}

// NAVIGATION
interface NavigationStore {
  active: boolean
}

interface NavigationProps extends BaseProps {
  navigationStore: NavigationStore
  store: Store
}

// WRITE_SENTENCE
interface WriteSentenceQuestion {
  visible: string
  hidden: string
}

interface WriteSentenceStore {
  ready: boolean
  db?: DBInstanceImage[]
  currentInstance?: DBInstanceImage
  index?: number
  currentIndex?: number
  listen?: boolean
  inputState?: string
  question?: WriteSentenceQuestion[]
}

interface WriteSentenceProps extends BaseProps {
  writeSentenceStore: WriteSentenceStore
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

// USER
interface UserStore {
  logged: boolean
  ready: boolean
}

interface UserProps extends BaseProps {
  userStore: UserStore
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
