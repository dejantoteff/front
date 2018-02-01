import { createAction } from 'create-action'
import { NotifyInput } from 'notify'
// RESELECT SELECTORS
import { createSelector } from 'reselect'
import {
  DB_URL,
  DB_URL_PROD,
  LONG_DELAY,
  SHARED_ADD_POINTS,
  SHARED_INIT,
  SHARED_SPEAK,
} from './constants'

const fromLanguageSelector = store => store.fromLanguage
const nameSelector = store => store.name
const randomSelector = store => store.randomFlag
const textToSpeechSelector = store => store.textToSpeechFlag
const toLanguageSelector = store => store.toLanguage

const languageSelector = createSelector(
  fromLanguageSelector,
  toLanguageSelector,
  (fromLanguage, toLanguage) => ({ fromLanguage, toLanguage }),
)

export const commonSelector = createSelector(
  fromLanguageSelector,
  nameSelector,
  randomSelector,
  textToSpeechSelector,
  toLanguageSelector,
  (
    fromLanguage,
    name,
    randomFlag,
    textToSpeechFlag,
    toLanguage,
  ) => ({
    fromLanguage,
    name,
    randomFlag,
    textToSpeechFlag,
    toLanguage,
  }),
)

interface StoreSelector {
  getState(): any
}

export const storeSelector = createSelector(
  (store: StoreSelector) => store.getState().store,
  store => store,
)

export const getLanguagePair = store => languageSelector(storeSelector(store))
export const getCommons = store => commonSelector(store.getState().store)
// COMMON ACTIONS
export const sharedInit = createAction(SHARED_INIT)
export const sharedAddPoints = createAction(SHARED_ADD_POINTS)
export const sharedSpeak = createAction(SHARED_SPEAK)
// OTHER
export function getURL() {
  return process.env.NODE_ENV === 'production' ?
    DB_URL_PROD :
    DB_URL
}

export function getNextIndex(input: GetNextIndex) {
  const next = input.index + 1

  return next === input.length ?
    0 :
    next
}
// NOTIFY
export const successLoginNotify = (): NotifyInput => {
  const notifyAction: NotifyInput = {
    payload: {
      message: 'Successfully signed in',
      ms: LONG_DELAY,
    },
    type: 'notify@SUCCESS',
  }

  return notifyAction
}

export const failLoginNotify = (): NotifyInput => {
  const notifyAction: NotifyInput = {
    payload: {
      message: 'No such user or wrong password',
      ms: LONG_DELAY,
    },
    type: 'notify@ERROR',
  }

  return notifyAction
}

export const invalidForm = () => {
  const x: NotifyInput = {
    payload: {
      message: 'Invalid email or password',
      ms: 2000,
    },
    type: 'notify@ERROR',
  }

  return x
}
