import './main/style.less'
import './main/style.scss'
import './x/style.css'
import 'notify/style.css'

import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react'
import { connect, Provider } from 'react-redux'
import { Route, Router } from 'react-router'
import { createStore, history } from './createStore'

import { Notify } from 'notify/component'
import { Main } from './main/component'
import X from './x/component'

const connectComponent = ({ mainStore }) => ({ mainStore })
const connectX = x => input => ({ [x]: input[x] })

const MainWrapped = connect(connectComponent)(Main)
const XWrapped = connect(connectX('xStore'))(X)

interface RouterComponentProps extends Props {
  mainStore: MainInitialState
}

class RouterComponent extends React.Component<RouterComponentProps, {}> {
  constructor(props: RouterComponentProps) {
    super(props)
  }

  public render() {
    return (
      <div>
        <ConnectedRouter history={history}>
          <div>
            <Notify />
            <Route component={XWrapped} exact={true} path='/' />
            <Route component={MainWrapped} exact={true} path='/x' />
          </div>
        </ConnectedRouter>
      </div>
    )
  }
}

const RouterComponentWrapped = connect(connectComponent)(RouterComponent as any)

const store = createStore()

export const App = () => (
  <Provider store={store}>
    <RouterComponentWrapped />
  </Provider>
)
