import * as React from 'react'
import { connect } from 'react-redux'
import { sharedInit } from '../root/actions'
import { init } from './actions'
import { GuessWord } from './guessWord'
import { GUESS_WORD } from '../constants'

class GuessWordComponent extends React.Component<GuessWordProps, {}> {
  public componentDidMount() {
    this.props.dispatch(init())
    this.props.dispatch(sharedInit(GUESS_WORD))
  }
  public render() {
    const { ready } = this.props.guessWordStore

    return (
      <div>
        {ready && <GuessWord {...this.props} />}
      </div>
    )
  }
}

const connector = ({ store, guessWordStore }) => ({ store, guessWordStore })

export const GuessWordWrapped = connect(connector)(GuessWordComponent)
