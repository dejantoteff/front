import {
  CCell,
} from './styled/cells'
import { Container, Grid } from './styled/grid'

const First = CCell('nav_first')
const Second = CCell('nav_second')
const Third = CCell('nav_third')
const Fourth = CCell('nav_fourth')
const Fifth = CCell('nav_fifth')
const Sixth = CCell('nav_sixth')

import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggle } from './actions'

export class Navigation extends React.Component<NavigationProps, {}> {
  constructor(props: NavigationProps) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  public onClick() {
    this.props.dispatch(toggle())
  }
  public render() {
    return (
      <div>
        {this.props.navigationStore.active &&
          <Container>
            <Grid>
              <First>
                <span><Link to='/learning-meme'>Learning Meme</Link></span>
              </First>

              <Second>
                <span><Link to='/write-sentence'>Write Sentence</Link></span>
              </Second>

              <Third>
                <span><Link to='/choose-word'>Choose Word</Link></span>
              </Third>

              <Fourth>
                <span><Link to='/guess-word'>Guess Word</Link></span>
              </Fourth>

              <Fifth>
                <span><Link to='/user'>User</Link></span>
              </Fifth>

              <Sixth>
                <span><Link to='/'>Home</Link></span>
              </Sixth>
            </Grid>
          </Container>}
      </div>
    )
  }
}

const connectComponent = ({ navigationStore }) => ({ navigationStore })

export const NavigationWrapped = connect(connectComponent)(Navigation)
