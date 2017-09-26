import {prop} from 'rambda'
import { delay, eventChannel } from 'redux-saga'
import { all, call, put, select, take } from 'redux-saga/effects'
import { TOGGLE  } from './actions'

function* toggleMenuSaga() {
  while (true) {
    try {
      yield take(TOGGLE)
    } catch (err) {
      console.log(err)
    }
  }
}

export default function* rootSaga() {
  return yield all([toggleMenuSaga()])
}
