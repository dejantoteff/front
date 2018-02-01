import * as React from 'react'

export class UserSettings extends React.Component<UserProps, {}> {
  private base: string

  constructor(props: any) {
    super(props)
    this.base = 'user__settings'
  }

  public render() {
    return <div className={`${this.base}--container`}>
      <div className={`${this.base}`}>

        <div>Points: {this.props.userStore.data.points}</div>

        <div>Member since: {this.props.userStore.data.memberSince}</div>

        <div>Random flag: {this.props.userStore.data.randomFlag.toString()}</div>

        <div>
          Text-to-speech flag: {this.props.userStore.data.textToSpeechFlag.toString()}
        </div>

      </div>
    </div>
  }
}
