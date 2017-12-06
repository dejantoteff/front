import './style.less'

import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { UserForm } from './components/form'
import { init } from './actions';

export class User extends React.Component<UserProps, {}> {
  private base: string

  constructor(props: any) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.base = 'user'
  }

  public onClick() {
  }

  componentDidMount(){
    this.props.dispatch(init())
  }

  public render() {
    return <div>
      {this.props.userStore.ready && <div className={`${this.base}__container`}>
        <UserForm {...this.props} />
      </div>}

    </div>
  }
}

const connectComponent = ({ userStore }) => ({ userStore })

export const UserWrapped = connect(connectComponent)(User)
