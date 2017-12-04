import './style.less'

import * as React from 'react'
import { connect } from 'react-redux'

export class WriteSentence extends React.Component<WriteSentenceProps, {}> {
  private base: string

  constructor(props: any) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.base = 'writesentence'
  }

  public onClick() {
  }

  public render() {
    return <div>
      {this.props.writeSentenceStore.ready && <div className={this.base}>
        nav
      </div>}

    </div>
  }
}

const connectComponent = ({ writeSentenceStore }) => ({ writeSentenceStore })

export const WriteSentenceWrapped = connect(connectComponent)(WriteSentence)
