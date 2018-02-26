import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggle } from './actions'

import {
  Fifth,
  First,
  Fourth,
  Second,
  Third,
} from './styled/cells'
import { Container, Grid } from './styled/grid'

export class Navigation extends React.Component<NavigationProps, {}> {
  constructor(props: NavigationProps) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  public onClick() {
    this.props.dispatch(toggle())
  }

  public render() {
    return <div>
      {this.props.navigationStore.active &&
        <Container>
          <Grid>

            <First>
              <span><Link to='/write-sentence'>Write Sentence</Link></span>
            </First>

            <Second>
              <span><Link to='/learning-meme'>Learning Meme</Link></span>
            </Second>

            <Third>
              <span><Link to='/choose-word'>Choose Word</Link></span>
            </Third>

            <Fourth>
              <span><Link to='/user'>User</Link></span>
            </Fourth>

            <Fifth>
              <span><Link to='/'>Home</Link></span>
            </Fifth>

          </Grid>
        </Container>}

    </div>
  }
}

const connectComponent = ({ navigationStore }) => ({ navigationStore })

export const NavigationWrapped = connect(connectComponent)(Navigation)
