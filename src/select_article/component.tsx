import * as React from 'react'
import { connect } from 'react-redux'
import { init } from './actions'

export class SelectArticle extends React.Component<SelectArticleProps, {}> {
  constructor(props: SelectArticleProps) {
    super(props)
  }
  public componentDidMount(){
    this.props.dispatch(init())
  }
  public render() {
    return <div>
      SelectArticle
    </div>
  }
}

const connectComponent = ({ store, selectArticleStore }) => ({ store, selectArticleStore })

export const SelectArticleWrapped = connect(connectComponent)(SelectArticle)
