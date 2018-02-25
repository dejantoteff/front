import * as React from 'react'
import { connect } from 'react-redux'
import { UserForm } from './components/form'
import { UserSettings } from './components/settings'
import { Container } from './styled'

export class User extends React.Component<UserProps, {}> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return <div>
      <Container>

        {!this.props.store.logged && <UserForm {...this.props} />}
        {this.props.userStore.ready && <UserSettings {...this.props} />}

      </Container>

    </div>
  }
}

const connectComponent = ({ userStore, store }) => ({ userStore, store })

export const UserWrapped = connect(connectComponent)(User)
