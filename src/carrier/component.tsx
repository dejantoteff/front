import * as React from 'react'
import { Link } from 'react-router-dom'

export default class App extends React.PureComponent<Props, {}> {
  constructor (props){
    super(props)
  }
  public componentDidMount (){
    this.props.dispatch({type: 'INIT', payload: 'more'})
  }
  public render (){
    return(<div></div>)
  }
}
