import { Options } from 'notify'
import { all, put, take } from 'redux-saga/effects'
import { TOGGLE } from './actions'

function* toggleMenuSaga() {
  while (true) {
    try {
      yield take(TOGGLE)
      const notifyOptions: Options = { message: 'foo', type: 'NOTIFY_SUCCESS' }
      yield put(notifyOptions)
    } catch (err) {
      console.log(err)
    }
  }
}

export default function* rootSaga() {
  return yield all([
    toggleMenuSaga(),
  ])
}
