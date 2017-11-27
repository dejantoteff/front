import * as React from 'react'

export class Main extends React.Component<MainProps, {}> {
  constructor(props) {
    super(props)
  }

  public render() {
    return (<div>main_{this.props.mainStore.mainFoo}</div>)
  }
}
