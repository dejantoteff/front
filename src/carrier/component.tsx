import * as React from 'react'
import { Link } from 'react-router-dom'
import {toggle} from './actions'

function UpperBar({props}){
  return <div className='carrier__up--wrapper'>
    <div
    className='carrier__up--logo'
    onClick={() => props.dispatch(toggle())}
    >
    </div>
    UpperBar
  </div>
}

function LowerBar({props}){
  return <div className='carrier__down--wrapper'>
    LowerBar
  </div>
}

export default class App extends React.PureComponent<Props, {}> {
  constructor (props){
    super(props)
  }
  public componentDidMount (){
    this.props.dispatch({type: 'INIT', payload: 'mor'})
  }
  public render (){
    return(<div>
      <UpperBar props={this.props}/>
      <LowerBar props={this.props}/>
      </div>)
  }
}
