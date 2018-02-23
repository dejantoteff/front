import './root/rxImports'

// STYLE
import './carrier/style.less'
import './choose_word/style.less'
import './learning_meme/style.less'
import './navigation/style.less'
import './user/style.less'
import './write_sentence/style.less'

// IMPORTS
import * as React from 'react'
import { render } from 'react-dom'

import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware,
} from 'connected-react-router'

import { createBrowserHistory } from 'history'
import { connect, Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
const history = createBrowserHistory()

// COMPONENTS
import { Notify } from 'notify/component'
import { CarrierWrapped } from './carrier/component'
import { ChooseWordWrapped } from './choose_word/component'
import { LearningMemeWrapped } from './learning_meme/component'
import { NavigationWrapped } from './navigation/component'
import { UserWrapped } from './user/component'
import { WriteSentenceWrapped } from './write_sentence/component'

// INTERNAL_MODULES
import { getJSON as getJSONModule } from './_modules/getJSON'
import { getPouchDB } from './_modules/getPouchDB'
import { getUserData as getUserDataModule } from './_modules/getUserData'
import { post } from './_modules/post'
import { init } from './root/actions'
import { combinedReducers } from './root/combinedReducers'

const postRequest = (url, body) => Observable.fromPromise(post(url, body))
const getJSON = url => Observable.fromPromise(getJSONModule(url))
const getUserData = getPouchModule => Observable.fromPromise(
  getUserDataModule(getPouchModule),
)

// EPICS
import { rootEpic } from './root/epics/'
const dependencies = {
  getJSON: getJSON,
  getPouchDB: getPouchDB,
  getUserData: getUserData,
  postRequest: postRequest,
}

const epicMiddleware = createEpicMiddleware(rootEpic, { dependencies })

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

// CREATE_STORE
const createdStore = createStore(
  connectRouter(history)(combinedReducers),
  composeEnhancers(
    applyMiddleware(routerMiddleware(history),
      epicMiddleware),
  ),
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

          <Route
            component={WriteSentenceWrapped}
            exact={true}
            path='/'
          />

          <Route
            component={LearningMemeWrapped}
            exact={true}
            path='/learning-meme'
          />

          <Route
            component={WriteSentenceWrapped}
            exact={true}
            path='/write-sentence'
          />

          <Route
            component={ChooseWordWrapped}
            exact={true}
            path='/choose-word'
          />

          <Route
            component={UserWrapped}
            exact={true}
            path='/user'
          />
        </div>
      </ConnectedRouter>
    </div>
  }
}

// CONNECT_COMPONENT
const connectRootComponent = ({
  store,
  navigationStore,
}) => ({
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
