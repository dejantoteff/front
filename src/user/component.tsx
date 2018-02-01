import * as React from 'react'
import { connect } from 'react-redux'
import { UserForm } from './components/form'
import { UserSettings } from './components/settings'

export class User extends React.Component<UserProps, {}> {
  private base: string

  constructor(props: any) {
    super(props)
    this.base = 'user'
  }

  public render() {
    return <div>
      <div className={`${this.base}__container`}>

        {this.props.userStore.ready && <UserSettings {...this.props} />}
        {!this.props.store.logged && <UserForm {...this.props} />}

      </div>

    </div>
  }
}

const connectComponent = ({ userStore, store }) => ({ userStore, store })

export const UserWrapped = connect(connectComponent)(User)
