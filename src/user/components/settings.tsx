import * as React from 'react'
import { Form, SettingsContainer } from '../styled'

export class UserSettings extends React.Component<UserProps, {}> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return <SettingsContainer>
      <Form>
        <div>Points: {this.props.userStore.data.points}</div>

        <div>Member since: {this.props.userStore.data.memberSince}</div>

        <div>Random flag: {this.props.userStore.data.randomFlag.toString()}</div>

        <div>
          Text-to-speech flag: {this.props.userStore.data.textToSpeechFlag.toString()}
        </div>
      </Form>
    </SettingsContainer>
  }
}
