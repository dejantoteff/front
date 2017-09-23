require('./app.css')

import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import {
  Route,
  Router,
} from 'react-router'
import { Link } from 'react-router-dom'
import Carrier from './carrier/component'
import {default as createStore, history} from './createStore'

const connectComponent = ({ mainStore }) => ({ mainStore })

const CarrierWrapped = connect(connectComponent)(Carrier)
const base = 'navigation_panel'

class App extends React.Component<Props, {}> {
  constructor (props){
    super(props)
  }

  public componentDidMount () {
    this.props.dispatch({ type : 'ONCE' })
  }

  public render (){
    return(
      <div>
      <ConnectedRouter history={ history }>

        <div>
          <div className={ `${ base }__wrapper` }>
            <div className={ `${ base }__item` }>
              <Link to='/'>Home</Link>
            </div>
            <div className={ `${ base }__item` }>
              <Link to='/learning-meme'>Learning meme</Link>
            </div>

          </div>

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
    </div >
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
