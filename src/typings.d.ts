// ACTION_INTERFACES
interface SelectArticleNextAction { type: SELECT_ARTICLE_NEXT, payload?: any }
interface SelectArticleInitReadyAction { type: SELECT_ARTICLE_INIT_READY, payload?: any }
interface SelectArticleInitAction { type: SELECT_ARTICLE_INIT | INIT_READY}
interface InfoAction { type: INFO, payload?: any }
interface GuessWordCheckAction { type: GUESS_WORD_CHECK, payload?: any }
interface GuessWordInitAction { type: GUESS_WORD_INIT | INIT_READY }
interface GuessWordInitReadyAction { type: GUESS_WORD_INIT_READY }
interface GuessWordInputAction { type: GUESS_WORD_INPUT, payload: any }
interface GuessWordNextAction { type: GUESS_WORD_NEXT }

interface UserSubmit {
  email: string
  password: string
}
interface UserRegisterAction { type: USER_REGISTER, payload: UserSubmit }
interface UserLoginAction { type: USER_LOGIN, payload: UserSubmit }
interface UserInitAction { type: USER_INIT }

interface WriteSentenceListenAction {
  type: WRITE_SENTENCE_LISTEN,
  payload: any
}
interface WriteSentenceInitAction { type: WRITE_SENTENCE_INIT | INIT_READY }
interface WriteSentenceInitReadyAction { type: WRITE_SENTENCE_INIT_READY }
interface WriteSentenceNextAction { type: WRITE_SENTENCE_NEXT }
interface WriteSentenceCheckAction { type: WRITE_SENTENCE_CHECK }
interface WriteSentenceStepAction { type: WRITE_SENTENCE_STEP }

interface LearningMemeInitAction { type: LEARNING_MEME_INIT | INIT_READY }
interface LearningMemeInitReadyAction { type: LEARNING_MEME_INIT_READY }
interface LearningMemeNextAction { type: LEARNING_MEME_NEXT }
interface LearningMemeListenAction { type: LEARNING_MEME_LISTEN, payload: any }
interface LearningMemeCheckAction { type: LEARNING_MEME_CHECK, payload: string }
interface LearningMemeStopAction { type: LEARNING_MEME_STOP }
interface LearningMemeSpeechInputAction {
  type: LEARNING_MEME_NEXT | LEARNING_MEME_STOP
}

interface ChooseWordClickAction { type: CHOOSE_WORD_CLICK, payload?: any }
interface ChooseWordCheckAction { type: CHOOSE_WORD_CHECK }
interface ChooseWordInitAction { type: CHOOSE_WORD_INIT | INIT_READY }
interface ChooseWordInitReadyAction { type: CHOOSE_WORD_INIT_READY }
interface ChooseWordNextReadyAction { type: CHOOSE_WORD_NEXT_READY }
interface ChooseWordNextAction { type: CHOOSE_WORD_NEXT }
interface ChooseWordStepAction { type: CHOOSE_WORD_STEP }
interface ChooseWordStopAction { type: CHOOSE_WORD_STOP }

interface GeneralAction { type: GeneralTypes }
interface NotifyAction { type: NotifyTypes }

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
  ROUTER_CHANGE |
  LEARNING_MEME_INIT |
  CHOOSE_WORD_INIT |
  GUESS_WORD_INIT |
  WRITE_SENTENCE_INIT

type NotifyTypes = LANGUAGE_CHANGE_CLICK

type Language = 'EN' | 'DE' | 'BG'
type Delay = (ms: number) => Promise<string>
type SetDB = (input: Store) => Promise<DBInstance[]>
// ROOT
interface DBInstance {
  bgPart?: string
  bgWord?: string
  bgRelated?: string[]
  dePart: string
  deWord: string
  deRelated?: string[]
  enPart: string
  enWord: string
  enRelated?: string[]
  imageSrc?: string | false
  imageSrcOrigin?: string
}

interface RoughData {
  [namespace: string]: {
    roughness?: number
    fill?: string
    fillWeight?: number
    active?: boolean,
  }
}

interface Store {
  db?: DBInstance[]
  fromLanguage: Language
  instructions: string
  logged: boolean
  name: string
  points: number
  randomFlag: boolean
  ready: boolean
  roughData: RoughData
  textToSpeechFlag: boolean
  toLanguage: Language
  toggleLanguage: boolean
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
  store: Store
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
  convertedImage: string | false
  db?: DataPattern[]
  currentInstance?: DataPattern
  question: string
  currentIndex: number
  listen: boolean
  inputState: string
  sentence: {
    hidden: string
    visible: string,
  }
}

interface LearningMemeProps extends BaseProps {
  learningMemeStore: LearningMemeStore
}
// CHOOSE_WORD
interface ChooseWordStore {
  correctAnswer: string[]
  currentIndex: number
  currentInstance?: DataPattern
  db?: DataPattern[]
  fillerWords?: Fillers
  index: number
  localPoints: number
  listen: boolean
  question: string[][]
  ready: boolean
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
// INJECT_COMPONENT
// SELECT_ARTICLE
interface SelectArticleStore {
  ready: boolean
  listen: boolean
  currentIndex: number
  db: DBInstance[]
  currentInstance: {
    wordList: ArticleWordList
    imageSrc: string
    translated: string
  }
}

interface SelectArticleProps extends BaseProps{
  selectArticleStore: SelectArticleStore
  store: Store
}

interface WithArticle{
  solved: boolean,
  correct: string
  word: string
  articleSet: string[]
  index: number
}

type ArticleWordList = Array<string|WithArticle>
// GUESS_WORD
interface GuessWordStore {
  answer: string
  currentIndex: number
  currentInstance?: DataPattern
  db: DBInstance[]
  inputState: string
  listen: boolean
  question: string
  ready: boolean
  related: string[]
  translated: string
  wordQuestion: string
  wordAnswer: string
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
  learningMemeStore: LearningMemeStore
  writeSentenceStore: WriteSentenceStore
  chooseWordStore: ChooseWordStore
  userStore: UserStore
  selectArticleStore: SelectArticleStore
  guessWordStore: GuessWordStore
  store: Store,
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
  requestIdleCallback: any
}

// CONSTANTS
type SELECT_ARTICLE_NEXT = 'selectArticle@NEXT'
type SELECT_ARTICLE_INIT_READY = 'selectArticle@INIT_READY'
type SELECT_ARTICLE_INIT = 'selectArticle@INIT'
type GUESS_WORD_INIT_READY = 'guessWord@INIT_READY'
type GUESS_WORD_NEXT = 'guessWord@NEXT'
type GUESS_WORD_CHECK = 'guessWord@CHECK'
type GUESS_WORD_INIT = 'guessWord@INIT'
type GUESS_WORD_INPUT = 'guessWord@INPUT'

type LANGUAGE_CHANGE = 'languageChange'
type LANGUAGE_CHANGE_CLICK = 'languageChange@CLICK'

type INFO = 'INFO'
type INIT_READY = 'INIT_READY'
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
type WRITE_SENTENCE_INIT_READY = 'writeSentence@INIT_READY'
type WRITE_SENTENCE_NEXT = 'writeSentence@NEXT'
type WRITE_SENTENCE_CHECK = 'writeSentence@CHECK'
type WRITE_SENTENCE_STEP = 'writeSentence@STEP'

type CHOOSE_WORD_CHECK = 'chooseWord@CHECK'
type CHOOSE_WORD_INIT = 'chooseWord@INIT'
type CHOOSE_WORD_CLICK = 'chooseWord@CLICK'
type CHOOSE_WORD_NEXT = 'chooseWord@NEXT'
type CHOOSE_WORD_NEXT_READY = 'chooseWord@NEXT_READY'
type CHOOSE_WORD_STEP = 'chooseWord@STEP'
type CHOOSE_WORD_STOP = 'chooseWord@STOP'
type CHOOSE_WORD_INIT_READY = 'chooseWord@INIT_READY'

type LEARNING_MEME_INIT = 'learningMeme@INIT'
type LEARNING_MEME_INIT_READY = 'learningMeme@INIT_READY'
type LEARNING_MEME_NEXT = 'learningMeme@NEXT'
type LEARNING_MEME_LISTEN = 'learningMeme@LISTEN'
type LEARNING_MEME_CHECK = 'learningMeme@CHECK'
type LEARNING_MEME_STOP = 'learningMeme@STOP'

type ROUTER_CHANGE = '@@router/LOCATION_CHANGE'
