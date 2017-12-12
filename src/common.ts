import { createAction } from 'create-action'
import { NotifyInput } from 'notify'
import { SHARED_ADD_POINTS, SHARED_INIT, SHARED_SPEAK, LONG_DELAY } from './constants'

// RESELECT SELECTORS
import { createSelector } from 'reselect'

const fromLanguageSelector = store => store.fromLanguage
const toLanguageSelector = store => store.toLanguage
const textToSpeechSelector = store => store.textToSpeechFlag
const nameSelector = store => store.name

const languageSelector = createSelector(
  fromLanguageSelector,
  toLanguageSelector,
  (fromLanguage, toLanguage) => ({fromLanguage, toLanguage}) 
)

export const commonSelector = createSelector(
  fromLanguageSelector,
  toLanguageSelector,
  nameSelector,
  textToSpeechSelector,
  (fromLanguage, toLanguage, name,textToSpeechFlag) => ({fromLanguage, toLanguage,name,textToSpeechFlag}) 
)

interface StoreSelector {
  getState: () => any
}

export const storeSelector = createSelector(
  (store:StoreSelector) => store.getState().store,
  store => store
)

export const getLanguagePair = store => languageSelector(storeSelector(store))
export const getCommons = store => commonSelector(store.getState().store)

// COMMON ACTIONS
export const sharedInit = createAction(SHARED_INIT)
export const sharedAddPoints = createAction(SHARED_ADD_POINTS)
export const sharedSpeak = createAction(SHARED_SPEAK)

// SMALL
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
      ms: LONG_DELAY*2,
    },
    type: 'NOTIFY_SUCCESS',
  }

  return notifyAction
}

export const failLoginNotify = (): NotifyInput => {
  const notifyAction: NotifyInput = {
    payload: {
      message: 'No such user or wrong password',
      ms: LONG_DELAY*2,
    },
    type: 'NOTIFY_ERROR',
  }

  return notifyAction
}

export const invalidForm = () => {
  const x: NotifyInput = {
    payload: {
      message: 'Invalid email or password',
      ms: 2000,
    },
    type: 'NOTIFY_ERROR',
  }

  return x
}
