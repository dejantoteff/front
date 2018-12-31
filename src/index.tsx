// DEV_ONLY
// import './_helpers/socket'
import './root/carrier/style.css'
import './root/rxImports'

// LOCAL_STORAGE
///////////////////////////
import {initLocalState} from 'client-helpers'
import {rootInit} from './_modules/rootInit'
import { defaultState } from './constants'
initLocalState('SK', defaultState)

// IMPORTS
///////////////////////////
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware,
} from 'connected-react-router'
import * as React from 'react'
import { render } from 'react-dom'

import { connect, Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { Observable } from 'rxjs/Observable'

import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
const history = createBrowserHistory()

// COMPONENTS
///////////////////////////
import { Notify } from 'notify/component'
import { ChooseWordWrapped } from './choose_word/component'
import { GuessWordWrapped } from './guess_word/component'
import { LearningMemeWrapped } from './learning_meme/component'
import { LessonWrapped } from './lesson/component'
import { CarrierWrapped } from './root/carrier/component'
import { NavigationWrapped } from './root/navigation/component'
import { UserWrapped } from './root/user/component'
import { SelectArticleWrapped } from './select_article/component'
import { WriteSentenceWrapped } from './write_sentence/component'

// INTERNAL_MODULES
///////////////////////////
import { getJSON as getJSONModule } from './_modules/getJSON'
import { getPouchDB } from './_modules/getPouchDB'
import { getUserData as getUserDataModule } from './_modules/getUserData'

import { post } from './_modules/post'
import { init } from './root/actions'
import { combinedReducers } from './root/combinedReducers'

const postRequest = (
  url,
  body,
) => Observable.fromPromise(post(url, body))

const getJSON = url => Observable.fromPromise(
  getJSONModule(url),
)

const getUserData = getPouchModule => Observable.fromPromise(
  getUserDataModule(getPouchModule),
)

// EPICS
///////////////////////////
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
    applyMiddleware(
      routerMiddleware(history),
      epicMiddleware),
  ),
)

function NoSuchRoute(){
  return (
    <div>There is no such route</div>
  )
}

// ROOT_COMPONENT
class Root extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props)
    rootInit()
  }

  public componentDidMount() {
    this.props.dispatch(init())
  }

  public render() {
    return (
      <div>
        <Notify />
        <CarrierWrapped />
        <ConnectedRouter history={history}>
          <div>
            <NavigationWrapped />

            <Route
              component={LearningMemeWrapped}
              exact={true}
              path='/'
            />

            {/* ROUTES_MARKER */}
            <Route
              component={LessonWrapped}
              path='/lesson-*'
            />
            <Route
              component={SelectArticleWrapped}
              exact={true}
              path='/select-article'
            />

            <Route
              component={GuessWordWrapped}
              exact={true}
              path='/guess-word'
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
    )
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
