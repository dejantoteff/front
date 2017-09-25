import './app.css'
import './carrier/style.css'

import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react'
import { connect, Provider } from 'react-redux'
import {
  Route,
  Router,
} from 'react-router'
import {default as createStore, history} from './createStore'

import Carrier from './carrier/component'
import Home from './home/component'
import LearningMeme from './learning_meme/component'

const connectComponent = ({ mainStore }) => ({ mainStore })

const connectX = x => input => {
  console.log(x)

  return {[x]: input[x]}
}

const CarrierWrapped = connect(connectComponent)(Carrier)
const HomeWrapped = connect(connectComponent)(Home)
const LearningMemeWrapped = connect(connectX('learningMeme'))(LearningMeme)

class App extends React.Component<Props, {}> {
  constructor (props) {
    super(props)
  }

  public componentDidMount () {
    this.props.dispatch({ type : 'ONCE' })
  }

  public render() {
    return(
      <div>
      <CarrierWrapped />
      <ConnectedRouter history={ history }>

        <div>
          <Route
            component={ HomeWrapped } exact={ true }
            path='/'
          />
          <Route
            component={ LearningMemeWrapped } exact={ true }
            path='/learning-meme'
          />
        </div>
      </ConnectedRouter>
      </div>
    )
  }
}

const AppWrapped = connect(connectComponent)(App)

const store = createStore()

const AppExport = () =>
  <Provider store={ store }>
    <AppWrapped />
  </Provider>

export default AppExport
