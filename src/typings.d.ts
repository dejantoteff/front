// ACTION_INTERFACES
interface UserSubmit {
  email: string
  password: string
}
interface UserRegisterAction { type: 'USER_REGISTER', payload: UserSubmit }
interface UserLoginAction { type: 'USER_LOGIN', payload: UserSubmit }
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
interface LearningMemeCheckAction { type: 'LEARNING_MEME_CHECK', payload: string }
interface LearningMemeStopAction { type: 'LEARNING_MEME_STOP' }
interface LearningMemeSpeechInputAction { type: 'LEARNING_MEME_NEXT' | 'LEARNING_MEME_STOP' }

interface ChooseWordCheckAction { type: 'CHOOSE_WORD_CHECK' }
interface ChooseWordInitAction { type: 'CHOOSE_WORD_INIT' | 'SET_DB' }
interface ChooseWordListenAction { type: 'CHOOSE_WORD_LISTEN' }
interface ChooseWordNextAction { type: 'CHOOSE_WORD_NEXT' }
interface ChooseWordStepAction { type: 'CHOOSE_WORD_STEP' }
interface ChooseWordStopAction { type: 'CHOOSE_WORD_STOP' }

interface SharedAddPointsAction { type: 'SHARED_ADD_POINTS', payload?: any }

type Settings = 'SETTINGS_TEXT_TO_SPEECH' | 'SETTINGS_RANDOM'
interface SharedChangeSettingsAction { type: Settings }

interface PouchReadyAction { type: 'POUCH_READY', payload: any }

interface PouchUserReadyAction {
  type: 'POUCH_USER_READY'
  payload: {
    userDB: PouchInstance
    data: any,
  }
}

interface InitAction { type: 'INIT' }

interface SharedSpeakAction { type: 'SHARED_SPEAK', payload: 'fromPart' | 'toPart' }
// ANY
interface GetDB {
  fromLanguage: string
  toLanguage: string
  db: DBInstance[]
}

interface DataPattern {
  imageSrc: string
  fromWord: string
  toWord: string
  fromPart: string
  toPart: string
}
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

// ROOT
interface Store {
  ready: boolean
  randomFlag: boolean
  textToSpeechFlag: boolean
  points: number
  logged: boolean
  name: string
  fromLanguage: Languages
  toLanguage: Languages
  instructions: string
  dbLocal?: PouchInstance
  dbCloud?: PouchInstance
  db?: DBInstance[]
}

interface InitialState {
  store: Store
}

interface BaseProps {
  dispatch: any
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
}

// WRITE_SENTENCE
interface WriteSentenceQuestion {
  visible: string
  hidden: string
}

interface WriteSentenceStore {
  ready: boolean
  db?: DataPattern[]
  currentInstance?: DataPattern
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
  db?: DataPattern[]
  currentInstance?: DataPattern
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
  db?: DataPattern[]
  fillerWords?: object
  currentInstance?: DataPattern
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
  userDB?: any
  data?: any
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
  new(a: any, b: any): any
  sync(a: any, b: any, c: any): any
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
