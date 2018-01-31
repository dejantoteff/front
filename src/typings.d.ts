// USER ACTION INTERFACES
////////////
interface UserSubmit {
  email: string
  password: string
}
interface UserRegisterAction { type: USER_REGISTER, payload: UserSubmit }
interface UserLoginAction { type: USER_LOGIN, payload: UserSubmit }
interface UserInitAction { type: USER_INIT }

// WRITE SENTENCE ACTION INTERFACES
////////////
interface WriteSentenceListenAction { type: WRITE_SENTENCE_LISTEN, payload: any }
interface WriteSentenceInitAction { type: WRITE_SENTENCE_INIT | SET_DB }
interface WriteSentenceNextAction { type: WRITE_SENTENCE_NEXT }
interface WriteSentenceCheckAction { type: WRITE_SENTENCE_CHECK }
interface WriteSentenceStepAction { type: WRITE_SENTENCE_STEP }

// LEARNING MEME ACTION INTERFACES
////////////
interface LearningMemeInitAction { type: LEARNING_MEME_INIT | SET_DB }
interface LearningMemeNextAction { type: LEARNING_MEME_NEXT }
interface LearningMemeListenAction { type: LEARNING_MEME_LISTEN, payload: any }
interface LearningMemeCheckAction { type: LEARNING_MEME_CHECK, payload: string }
interface LearningMemeStopAction { type: LEARNING_MEME_STOP }
interface LearningMemeSpeechInputAction { type: LEARNING_MEME_NEXT | LEARNING_MEME_STOP }

// CHOOSE WORD ACTION INTERFACES
////////////
interface ChooseWordCheckAction { type: CHOOSE_WORD_CHECK }
interface ChooseWordInitAction { type: CHOOSE_WORD_INIT | SET_DB }
interface ChooseWordSetNextAction { type: CHOOSE_WORD_SET_NEXT }
interface ChooseWordNextAction { type: CHOOSE_WORD_NEXT }
interface ChooseWordStepAction { type: CHOOSE_WORD_STEP }
interface ChooseWordStopAction { type: CHOOSE_WORD_STOP }

// OTHER ACTION INTERFACES
////////////
type GeneralTypes = LANGUAGE_CHANGE |
  LANGUAGE_CHANGE_CLICK |
  CHOOSE_WORD_INIT_READY

interface GeneralAction { type: GeneralTypes }

interface SharedAddPointsAction { type: SHARED_ADD_POINTS, payload?: any }
interface SharedSpeakAction { type: SHARED_SPEAK, payload: 'fromPart' | 'toPart' }

type Settings = SETTINGS_TEXT_TO_SPEECH | SETTINGS_RANDOM
interface SharedChangeSettingsAction { type: Settings }

interface PouchReadyAction { type: POUCH_READY, payload: any }

interface PouchUserReadyAction {
  type: POUCH_USER_READY
  payload: {
    userDB: PouchInstance
    data: any,
  }
}

interface InitAction { type: 'INIT' }

// TYPES
////////////
type Language = 'EN' | 'DE' | 'BG'
type Delay = (ms: number) => Promise<string>
type Sync = () => Promise<SyncOutput>
type SetDB = (input: Store) => Promise<DBInstance[]>
type InitPouch = (input: Pouch) => SyncOutput

// ROOT
////////////
interface DBInstance {
  bgPart?: string
  bgWord?: string
  dePart: string
  deWord: string
  enPart: string
  enWord: string
  imageSrc?: string | false
  imageSrcOrigin?: string
}

interface Store {
  db?: DBInstance[]
  dbCloud?: PouchInstance
  dbLocal?: PouchInstance
  fromLanguage: Language
  instructions: string
  logged: boolean
  name: string
  toggleLanguage: boolean
  points: number
  randomFlag: boolean
  ready: boolean
  textToSpeechFlag: boolean
  toLanguage: Language
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
////////////
interface NavigationStore {
  active: boolean
}

interface NavigationProps extends BaseProps {
  navigationStore: NavigationStore
}

// WRITE_SENTENCE
////////////
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
////////////
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
////////////
interface ChooseWordStore {
  ready: boolean
  db?: DataPattern[]
  fillerWords?: Fillers
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
////////////
interface UserStore {
  logged: boolean
  ready: boolean
  userDB?: any
  data?: any
}

interface UserProps extends BaseProps {
  userStore: UserStore
}

// POUCH
////////////
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

// OTHER
////////////
interface Fillers {
  [index: number]: string[]
}

type GetState = () => ({
  learningMemeStore?: LearningMemeStore
  writeSentenceStore?: WriteSentenceStore
  chooseWordStore?: ChooseWordStore
  userStore?: UserStore
  store?: Store,
})

interface ObservableStore {
  getState: GetState
}

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

interface SyncOutput {
  dbLocal: PouchInstance
  dbCloud: PouchInstance
  dbName: string
  dbURL: string
}

interface GetNextIndex {
  length: number
  index: number
}

interface Action {
  type: string
  payload?: any
}
// GLOBAL
////////////
declare var webkitSpeechRecognition: any

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
  __REDUX_DEVTOOLS_EXTENSION__: any
  webkitSpeechRecognition: any
}

// CONSTANTS
////////////
type SET_DB = 'SET_DB'
type LANGUAGE_CHANGE = 'languageChange'
type LANGUAGE_CHANGE_CLICK = 'languageChange@CLICK'
// POUCH
type POUCH_READY = 'pouch@READY'
type POUCH_USER_READY = 'pouch@USER_READY'
type POUCH_USER_CHANGE = 'pouch@USER_CHANGE'
type POUCH_SYNC_CHANGE = 'pouch@SYNC_CHANGE'
// SHARED
type SHARED_ADD_POINTS = 'shared@ADD_POINTS'
type SHARED_INIT = 'shared@INIT'
type SHARED_SHOW_ANSWER = 'shared@SHOW_ANSWER'
type SHARED_SPEAK = 'shared@SPEAK'
// SETTINGS
type SETTINGS_RANDOM = 'settings@RANDOM'
type SETTINGS_TEXT_TO_SPEECH = 'settings@TEXT_TO_SPEECH'
// USER
type USER_REGISTER = 'user@REGISTER'
type USER_LOGIN = 'user@LOGIN'
type USER_INIT = 'user@INIT'
// WRITE_SENTENCE
type WRITE_SENTENCE_LISTEN = 'writeSentence@LISTEN'
type WRITE_SENTENCE_INIT = 'writeSentence@INIT'
type WRITE_SENTENCE_NEXT = 'writeSentence@NEXT'
type WRITE_SENTENCE_CHECK = 'writeSentence@CHECK'
type WRITE_SENTENCE_STEP = 'writeSentence@STEP'
// CHOOSE_WORD
type CHOOSE_WORD_CHECK = 'chooseWord@CHECK'
type CHOOSE_WORD_INIT = 'chooseWord@INIT'
type CHOOSE_WORD_NEXT = 'chooseWord@NEXT'
type CHOOSE_WORD_SET_NEXT = 'chooseWord@SET_NEXT'
type CHOOSE_WORD_STEP = 'chooseWord@STEP'
type CHOOSE_WORD_STOP = 'chooseWord@STOP'
type CHOOSE_WORD_INIT_READY = 'chooseWord@INIT_READY'
// LEARNING_MEME
type LEARNING_MEME_INIT = 'learningMeme@INIT'
type LEARNING_MEME_NEXT = 'learningMeme@NEXT'
type LEARNING_MEME_LISTEN = 'learningMeme@LISTEN'
type LEARNING_MEME_CHECK = 'learningMeme@CHECK'
type LEARNING_MEME_STOP = 'learningMeme@STOP'
