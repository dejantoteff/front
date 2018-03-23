import { CCell } from './styled/cells'
import { Container, Grid } from './styled/grid'

const First = CCell('nav_first')
const Second = CCell('nav_second')
const Third = CCell('nav_third')
const Fourth = CCell('nav_fourth')
const Fifth = CCell('nav_fifth')
const Sixth = CCell('nav_sixth')

import { last } from 'rambdax'
import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LEARNING_MEME } from '../../constants'


export class Navigation extends React.Component<NavigationProps, {}> {
  public render() {
    const isHome = last(window.location.href.split('/')) === ''
    const isX = this.props.store.name === LEARNING_MEME && !isHome

    return (
      <div>
        {this.props.navigationStore.active &&
          <Container>
            <Grid>
              <First>
                {
                  !isHome &&
                  <span>
                    <Link to='/learning-meme'>Learning Meme</Link>
                  </span>
                }
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
                {!isX && <span><Link to='/'>Home</Link></span>}
              </Sixth>
            </Grid>
          </Container>}
      </div>
    )
  }
}

const connectComponent = ({
  navigationStore,
  store,
}) => ({ navigationStore, store })

export const NavigationWrapped = connect(connectComponent)(Navigation)
