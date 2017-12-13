import './style.less'

import * as React from 'react'
import { connect } from 'react-redux'

import { init } from './actions'
import { UserForm } from './components/form'
import { UserSettings } from './components/settings'

export class User extends React.Component<UserProps, {}> {
  private base: string
  constructor(props: any) {
    super(props)
    this.base = 'user'
  }
  public componentDidMount() {
    this.props.dispatch(init())
  }
  public render() {
    return <div>
      {this.props.userStore.ready && <div className={`${this.base}__container`}>

        {this.props.userStore.logged ?
          <UserSettings {...this.props} /> :
          <UserForm {...this.props} />}

      </div>}

    </div>
  }
}

const connectComponent = ({ userStore }) => ({ userStore })

export const UserWrapped = connect(connectComponent)(User)
