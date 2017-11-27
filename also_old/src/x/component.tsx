import * as React from 'react'
import { Link } from 'react-router-dom'
import { toggle } from './actions'

interface XProps extends Props {
  xStore: InitialStateX
}

export default class App extends React.Component<XProps, {}> {

  constructor(props) {
    super(props)
    this.onToggle = this.onToggle.bind(this)
  }

  public onToggle() {
    this.props.dispatch(toggle())
  }

  public render() {

    return <div className={this.props.xStore.foo}>
      <button
        onClick={this.onToggle}
        type='button'
      >
        Toggle {`${this.props.xStore.fooX}`}
      </button>
    </div>
  }
}
