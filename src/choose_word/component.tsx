import * as React from 'react'
import { connect } from 'react-redux'
import { CHOOSE_WORD } from '../constants'
import { sharedInit } from '../root/actions'
import { init } from './actions'
import { ChooseWord } from './chooseWord'

/**
 * User press one of arrow keys and thus selects one of three choices.
 * One of the choice is correct.
 * After every selection a new set of choices is generated.
 */
export class ChooseWordComponent extends React.Component<ChooseWordProps, {}> {
  public componentDidMount() {
    this.props.dispatch(init())
    this.props.dispatch(sharedInit(CHOOSE_WORD))
  }
  public render() {
    return (
      <div>
        {
          this.props.chooseWordStore.ready &&
          <ChooseWord {...this.props} />
        }
      </div>
    )
  }
}

const connectComponent = ({ chooseWordStore }) => ({ chooseWordStore })

export const ChooseWordWrapped = connect(connectComponent)(ChooseWordComponent)
