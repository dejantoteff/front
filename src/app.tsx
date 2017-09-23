import './app.css'

import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react'
import { connect, Provider } from 'react-redux'
import {
  Route,
  Router,
} from 'react-router'
import Carrier from './carrier/component'
import {default as createStore, history} from './createStore'

const connectComponent = ({ mainStore }) => ({ mainStore })

const CarrierWrapped = connect(connectComponent)(Carrier)

class App extends React.Component<Props, {}> {
  constructor (props){
    super(props)
  }

  public componentDidMount () {
    this.props.dispatch({ type : 'ONCE' })
  }

  public render (){
    return(
      <ConnectedRouter history={ history }>

        <div>
          <Route
            component={ CarrierWrapped } exact={ true }
            path='/'
          />
          <Route
            component={ CarrierWrapped } exact={ true }
            path='/learning-meme'
          />
        </div>
      </ConnectedRouter>
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
