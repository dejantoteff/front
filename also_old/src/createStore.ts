import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore as createStoreModule,
} from 'redux'

import { notifyStore } from 'notify/reducers'
import createSagaMiddleware from 'redux-saga'
import { mainStore } from './main/reducers'
import { xStore } from './x/reducers'

import { notifySagas } from 'notify/sagas'
import { mainSagas } from './main/sagas'
import xSagas from './x/sagas'

import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()

const composeEnhancers = process.env.NODE_ENV === 'production' ?
  compose :
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === undefined ?
    compose :
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export function createStore() {
  const sagaMiddleware = createSagaMiddleware()

  const mainReducers = combineReducers({
    mainStore,
    notifyStore,
    xStore,
  })

  const willReturn = createStoreModule(
    connectRouter(history)(mainReducers),
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
  )

  sagaMiddleware.run(notifySagas)
  sagaMiddleware.run(mainSagas)
  sagaMiddleware.run(xSagas)

  return willReturn
}
