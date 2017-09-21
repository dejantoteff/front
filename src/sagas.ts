import { push } from 'connected-react-router'
import {
  delay,
  eventChannel,
} from 'redux-saga'
import {
  take,
  all,
  put,
  select,
  call,
} from 'redux-saga/effects'

// import PouchDB from 'pouchdb'
// PouchDB.plugin(require('pouchdb-authentication'))

const getMainStore = store => store.mainStore
const getPassword = store => store.mainStore.password
const getLogged = store => store.mainStore.logged

function *componenentDidInitSaga () {
  while (true) {
    try {
      yield take('INIT_READY')
    } catch (err) {

    }
  }
}

export default function *rootSaga () {
  return yield all([
    componenentDidInitSaga(),
  ])
}
