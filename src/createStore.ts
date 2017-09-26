import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'

import carrierSagas from './carrier/sagas'
import rootSagas from './sagas'

import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()

let composeEnhancers: any
if (process.env.NODE_ENV === 'production') {
  composeEnhancers = compose
} else if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === undefined) {
  composeEnhancers = compose
} else {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
}

export default function configureStore () {
  const sagaMiddleware = createSagaMiddleware()
  const mainStore = createStore(
    connectRouter(history)(reducers),
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
  )

  sagaMiddleware.run(rootSagas)
  sagaMiddleware.run(carrierSagas)

  return mainStore
}
