import * as React from 'react'
import { connect } from 'react-redux'
import { Container } from './container'
import { IN, OUT } from './constants'

interface NotifyProps{
  dispatch: any
  notifyStore: any
}

export class NotifyComponent extends React.Component<NotifyProps, {}> {

  constructor(props: NotifyProps) {
    super(props)
  }

  public render() {
    const flag = this.props.notifyStore.status === IN ||
      this.props.notifyStore.status === OUT

    return (<div>
        {flag &&
        <Container {...this.props.notifyStore}>
          <div>{this.props.notifyStore.message}</div>
        </Container>
      }
      </div>)
    }
  }

const connectComponent = ({ notifyStore }) => ({ notifyStore })

export const Notify = connect(connectComponent)(NotifyComponent)
