import * as React from 'react'

export class UserSettings extends React.Component<UserProps, {}> {
  private base: string

  constructor(props) {
    super(props)
    console.log(props);
    this.base = 'user__settings'
  }

  public render() {
    return  <div className={`${this.base}--container`}>
      <div className={`${this.base}`}>
        <div>Points: {this.props.userStore.data.points}</div>
        <div>Member since: {this.props.userStore.data.memberSince}</div>
        <div>Random flag: {this.props.userStore.data.random.toString()}</div>
        <div>Text-to-speak flag: {this.props.userStore.data.textToSpeak.toString()}</div>
      </div>
      </div>
  }
}