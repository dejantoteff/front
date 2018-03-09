import * as React from 'react'
import { logout } from '../actions'
import { Form, SettingsContainer } from '../styled'

export class UserSettings extends React.Component<UserProps, {}> {
  constructor(props: any) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  public onClick() {
    this.props.dispatch(logout())
  }
  public render() {
    const randomFlag = this.props.userStore.data.randomFlag.toString()
    const textToSpeech = this.props.userStore.data.textToSpeechFlag.toString()

    return (
      <SettingsContainer>
        <Form>

          <div>Points: {this.props.userStore.data.points}</div>

          <div>Member since: {this.props.userStore.data.memberSince}</div>

          <div>Random flag: {randomFlag}</div>

          <div>
            Text-to-speech flag: {textToSpeech}
          </div>

          <div>
            <button
              onClick={this.onClick}
            >
              Logout
            </button>
          </div>

        </Form>
      </SettingsContainer>
    )
  }
}
