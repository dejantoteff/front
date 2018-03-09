// ACTION_INTERFACES
interface GuessWordInitReadyAction { type: GUESS_WORD_INIT_READY, payload?: any }
interface GuessWordNextAction { type: GUESS_WORD_NEXT, payload?: any }
interface GuessWordInitAction { type: GUESS_WORD_INIT | INIT_READY }

interface ChooseWordClickAction { type: CHOOSE_WORD_CLICK, payload?: any }

interface UserSubmit {
  email: string
  password: string
}
interface UserRegisterAction { type: USER_REGISTER, payload: UserSubmit }
interface UserLoginAction { type: USER_LOGIN, payload: UserSubmit }
interface UserInitAction { type: USER_INIT }

interface WriteSentenceListenAction { type: WRITE_SENTENCE_LISTEN, payload: any }
interface WriteSentenceInitAction { type: WRITE_SENTENCE_INIT | INIT_READY }
interface WriteSentenceNextAction { type: WRITE_SENTENCE_NEXT }
interface WriteSentenceCheckAction { type: WRITE_SENTENCE_CHECK }
interface WriteSentenceStepAction { type: WRITE_SENTENCE_STEP }

interface LearningMemeInitAction { type: LEARNING_MEME_INIT | INIT_READY }
interface LearningMemeNextAction { type: LEARNING_MEME_NEXT }
interface LearningMemeListenAction { type: LEARNING_MEME_LISTEN, payload: any }
interface LearningMemeCheckAction { type: LEARNING_MEME_CHECK, payload: string }
interface LearningMemeStopAction { type: LEARNING_MEME_STOP }
interface LearningMemeSpeechInputAction {
  type: LEARNING_MEME_NEXT | LEARNING_MEME_STOP
}

interface ChooseWordCheckAction { type: CHOOSE_WORD_CHECK }
interface ChooseWordInitAction { type: CHOOSE_WORD_INIT | INIT_READY }
interface ChooseWordSetNextAction { type: CHOOSE_WORD_SET_NEXT }
interface ChooseWordNextAction { type: CHOOSE_WORD_NEXT }
interface ChooseWordStepAction { type: CHOOSE_WORD_STEP }
interface ChooseWordStopAction { type: CHOOSE_WORD_STOP }

interface GeneralAction { type: GeneralTypes }

interface SharedAddPointsAction { type: SHARED_ADD_POINTS, payload?: any }
interface SharedSpeakAction { type: SHARED_SPEAK, payload: 'fromPart' | 'toPart' }

type Settings = SETTINGS_TEXT_TO_SPEECH | SETTINGS_RANDOM
interface SharedChangeSettingsAction { type: Settings }

interface PouchUserReadyAction {
  type: POUCH_USER_READY
  payload: {
    userDBCloud: any,
    data: any,
  }
}
interface InitAction { type: 'INIT' }
interface InitReadyAction { type: INIT_READY, payload: any }

// TYPES
////////////
type GeneralTypes = LANGUAGE_CHANGE |
  LANGUAGE_CHANGE_CLICK |
  CHOOSE_WORD_INIT_READY

type Language = 'EN' | 'DE' | 'BG'
type Delay = (ms: number) => Promise<string>
type SetDB = (input: Store) => Promise<DBInstance[]>
// ROOT
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
  userDBCloud?: any
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
interface UserStore {
  data?: any
  ready: boolean
}
interface UserProps extends BaseProps {
  userStore: UserStore
  store: Store
}
// INJECT_COMPONENT_MARKER
// GUESS_WORD
interface GuessWordStore {
  ready: boolean
  listen: boolean
  word: string
  db: DBInstance[]
  currentIndex: number
  currentInstance?: DBInstance
  question: string
  answer: string
  related: string[]
  translated: string
}

interface GuessWordProps extends BaseProps {
  guessWordStore: GuessWordStore
  store: Store
}

// OTHER
////////////
interface FractionGetters {
  getFraction(fraction: number): number
  getSubFraction(child: number, parrent: number): number
}

interface Fillers {
  [index: number]: string[]
}

type GetState = () => ({
  learningMemeStore?: LearningMemeStore
  writeSentenceStore?: WriteSentenceStore
  chooseWordStore?: ChooseWordStore
  userStore?: UserStore
  guessWordStore?: GuessWordStore
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

interface GetNextIndex {
  length: number
  index: number
}

interface Action {
  type: string
  payload?: any
}

type PostRequest = (url: string, body: object) => Promise<Response>
type GetRequest = (url: string) => Promise<Response>
// GLOBAL
////////////
declare var webkitSpeechRecognition: any

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
  __REDUX_DEVTOOLS_EXTENSION__: any
  webkitSpeechRecognition: any
}

// CONSTANTS
type GUESS_WORD_INIT_READY = 'guessWord@INIT_READY'
type GUESS_WORD_NEXT = 'guessWord@NEXT'
type GUESS_WORD_INIT = 'guessWord@INIT'
type CHOOSE_WORD_CLICK = 'chooseWord@CLICK'
type INIT_READY = 'INIT_READY'
type LANGUAGE_CHANGE = 'languageChange'
type LANGUAGE_CHANGE_CLICK = 'languageChange@CLICK'
type POUCH_USER_READY = 'POUCH_USER_READY'

type SHARED_ADD_POINTS = 'shared@ADD_POINTS'
type SHARED_INIT = 'shared@INIT'
type SHARED_SHOW_ANSWER = 'shared@SHOW_ANSWER'
type SHARED_SPEAK = 'shared@SPEAK'

type SETTINGS_RANDOM = 'settings@RANDOM'
type SETTINGS_TEXT_TO_SPEECH = 'settings@TEXT_TO_SPEECH'

type USER_REGISTER = 'user@REGISTER'
type USER_LOGIN = 'user@LOGIN'
type USER_INIT = 'user@INIT'

type WRITE_SENTENCE_LISTEN = 'writeSentence@LISTEN'
type WRITE_SENTENCE_INIT = 'writeSentence@INIT'
type WRITE_SENTENCE_NEXT = 'writeSentence@NEXT'
type WRITE_SENTENCE_CHECK = 'writeSentence@CHECK'
type WRITE_SENTENCE_STEP = 'writeSentence@STEP'

type CHOOSE_WORD_CHECK = 'chooseWord@CHECK'
type CHOOSE_WORD_INIT = 'chooseWord@INIT'
type CHOOSE_WORD_NEXT = 'chooseWord@NEXT'
type CHOOSE_WORD_SET_NEXT = 'chooseWord@SET_NEXT'
type CHOOSE_WORD_STEP = 'chooseWord@STEP'
type CHOOSE_WORD_STOP = 'chooseWord@STOP'
type CHOOSE_WORD_INIT_READY = 'chooseWord@INIT_READY'

type LEARNING_MEME_INIT = 'learningMeme@INIT'
type LEARNING_MEME_NEXT = 'learningMeme@NEXT'
type LEARNING_MEME_LISTEN = 'learningMeme@LISTEN'
type LEARNING_MEME_CHECK = 'learningMeme@CHECK'
type LEARNING_MEME_STOP = 'learningMeme@STOP'
