import './root/rxImports'

// STYLE
import './carrier/style.less'
import './choose_word/style.less'
import './learning_meme/style.less'
import './navigation/style.less'
import './user/style.less'
import './write_sentence/style.less'

// COMPONENTS
import { Notify } from 'notify/component'
import { CarrierWrapped } from './carrier/component'
import { NavigationWrapped } from './navigation/component'

import { ChooseWordWrapped } from './choose_word/component'
import { LearningMemeWrapped } from './learning_meme/component'
import { UserWrapped } from './user/component'
import { WriteSentenceWrapped } from './write_sentence/component'

// EPICS
import { rootEpic } from './root/epics/'
import { rootReducer } from './root/reducers'

import { init } from './root/actions'

// INTERNAL_MODULES
import { getPouchDB } from './modules/getPouchDB'
import { initPouchDB } from './modules/initPouchDB'

// IMPORTS
import { createEpicMiddleware } from 'redux-observable'
import { Observable } from 'rxjs/Observable'

import * as React from 'react'
import { render } from 'react-dom'

// import {whyDidYouUpdate} from 'why-did-you-update'
// whyDidYouUpdate(React)

import { connect, Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'

import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { Route } from 'react-router-dom'
const history = createBrowserHistory()

const post: PostRequest = async (url, body) => {
  return (fetch as any)(url, {
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
}

const getJSONModule: GetRequest = async (url) => {
  const result = await (fetch as any)(url, {
    method: 'GET',
  })

  return result.json()
}

const postRequest = (url, body) => Observable.fromPromise(post(url, body))
const getJSON = (url) => Observable.fromPromise(getJSONModule(url))

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
  getPouchDB: getPouchDB,
  getJSON: getJSON,
  initPouchDB: initPouchDB,
  postRequest: postRequest,
}

const epicMiddleware = createEpicMiddleware(rootEpic, { dependencies })

// CREATE_STORE
const createdStore = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancers(applyMiddleware(routerMiddleware(history), epicMiddleware)),
)

// ROOT_COMPONENT
class Root extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props)
  }

  public componentDidMount() {
    this.props.dispatch(init())
  }

  public render() {
    return <div>
      <Notify />
      <CarrierWrapped />
      <ConnectedRouter history={history}>
        <div>
          <NavigationWrapped />
          <Route component={ChooseWordWrapped} exact={true} path='/' />
          <Route component={ChooseWordWrapped} exact={true} path='/choose-word' />
          <Route component={LearningMemeWrapped} exact={true} path='/learning-meme' />
          <Route component={WriteSentenceWrapped} exact={true} path='/write-sentence' />
          <Route component={UserWrapped} exact={true} path='/user' />
        </div>
      </ConnectedRouter>
    </div>
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

if (module.hot) {
  module.hot.accept('./root/epics/', () => {
    const rootEpicHot = require('./root/epics/').default
    epicMiddleware.replaceEpic(rootEpicHot)
  })
}
