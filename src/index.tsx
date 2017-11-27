import './root/rxImports'

import { createEpicMiddleware } from 'redux-observable'
import { Observable } from 'rxjs/Observable'

import * as React from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'

import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { Route } from 'react-router-dom'
export const history = createBrowserHistory()

import { rootEpic } from './root/epics/'
import { rootReducer } from './root/reducers'

import { ChooseWordWrapped } from './choose_word/component'
import { NavigationWrapped } from './navigation/component'
import { init } from './root/actions'

// BOILERPLATE
const id = 'react-container'
const element = document.createElement('div')
element.setAttribute('id', id)
document.body.appendChild(element)

const composeEnhancers = process.env.NODE_ENV === 'production' ?
  compose :
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === undefined ?
    compose :
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

// EPIC_DEPENDENCIES
const dependencies = {
  getRequest: Observable.ajax,
}

const epicMiddleware = createEpicMiddleware(rootEpic, { dependencies })

// CREATE_STORE
const createdStore = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancers(applyMiddleware(routerMiddleware(history), epicMiddleware)),
)

// ROOT_COMPONENT
class Root extends React.Component<Props, {}> {
  constructor(props) {
    super(props)
    console.log(props, 'root')
  }

  public componentDidMount() {
    this.props.dispatch(init())
  }

  public render() {
    return <ConnectedRouter history={history}>
      <div>
        <Route component={ChooseWordWrapped} exact={true} path='/' />
        <Route component={NavigationWrapped} exact={true} path='/nav' />
      </div>
    </ConnectedRouter>
  }
}

// CONNECT_COMPONENT
const connectRootComponent = ({
  store,
  navigationStore,
  chooseWordStore,
}) => ({
    chooseWordStore,
    navigationStore,
    store,
  })

const RootWrapped = connect(connectRootComponent)(Root)

render(
  <Provider store={createdStore}>
    <RootWrapped />
  </Provider>,
  document.getElementById(id),
)

if ((module as any).hot) {
  (module as any).hot.accept('./root/epics/', () => {
    const rootEpic = require('./root/epics/').default
    epicMiddleware.replaceEpic(rootEpic)
  })
}
