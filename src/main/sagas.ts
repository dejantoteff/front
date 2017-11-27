import { all, call, put, select, take } from 'redux-saga/effects'
import { initSaga } from './sagas/initSaga'

export function* mainSagas() {
  return yield all([initSaga()])
}
