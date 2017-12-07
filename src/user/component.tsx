import './style.less'

import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { init } from './actions'
import { UserForm } from './components/form'

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
        {!this.props.userStore.logged && <UserForm {...this.props} />}
      </div>}

    </div>
  }
}

const connectComponent = ({ userStore }) => ({ userStore })

export const UserWrapped = connect(connectComponent)(User)
