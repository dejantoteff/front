import * as React from 'react'
import { connect } from 'react-redux'
import { init, unmount } from './actions'

import {
  Container,
} from './styled/grid'

/**
 * User press one of arrow keys and thus selects one of three choices.
 * One of the choice is correct.
 * After every selection a new set of choices is generated.
 */
export class ChooseWord extends React.Component<ChooseWordProps, {}> {
  private base: string

  constructor(props: ChooseWordProps) {
    super(props)
    this.onButtonClick = this.onButtonClick.bind(this)
    this.base = 'chooseword'
  }

  public onButtonClick() {
    this.props.dispatch(init())
  }

  public componentDidMount() {
    this.props.dispatch(init())
  }
  public componentWillUnmount() {
    this.props.dispatch(unmount())
  }
  public render() {
    return <div>
      {this.props.chooseWordStore.ready &&
        <Container>

          <div className={`${this.base}--grid`}>

            <div className={`${this.base}--question__container`}>

              <div className={`${this.base}--question`}>

                <div className={`${this.base}--question__choicex`}>
                  {
                    this.props.chooseWordStore.listen &&
                    this.props.chooseWordStore.question[this.props.chooseWordStore.index][0]
                  }
                </div>

                <div className={`${this.base}--question__choicey`}>
                  {
                    this.props.chooseWordStore.listen &&
                    this.props.chooseWordStore.question[this.props.chooseWordStore.index][1]
                  }
                </div>

                <div className={`${this.base}--question__choicez`}>
                  {
                    this.props.chooseWordStore.listen &&
                    this.props.chooseWordStore.question[this.props.chooseWordStore.index][2]
                  }
                </div>

              </div>
            </div>

            <div className={`${this.base}--solved`}>

              {
                this.props.chooseWordStore.correctAnswer.filter(
                  (_, i) => i < this.props.chooseWordStore.index,
                ).join(' ')
              }

            </div>

            <div className={`${this.base}--translation`}>

              {this.props.chooseWordStore.currentInstance.toPart}

            </div>

          </div>

        </Container>}
    </div>
  }
}

const connectComponent = ({ chooseWordStore }) => ({ chooseWordStore })

export const ChooseWordWrapped = connect(connectComponent)(ChooseWord)
