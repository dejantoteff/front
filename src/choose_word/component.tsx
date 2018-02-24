import * as React from 'react'
import { connect } from 'react-redux'
import { init, unmount } from './actions'

import {
  Container,
  Solved,
  Translation,
} from './styled/grid'

import {
  ChoiceX,
  ChoiceY,
  ChoiceZ,
  Question,
  QuestionContainer,
} from './styled/question'

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

          <div>

            <QuestionContainer>

              <Question>

                <ChoiceX>
                  {
                    this.props.chooseWordStore.listen &&
                    this.props.chooseWordStore.question[this.props.chooseWordStore.index][0]
                  }
                </ChoiceX>

                <ChoiceY>
                  {
                    this.props.chooseWordStore.listen &&
                    this.props.chooseWordStore.question[this.props.chooseWordStore.index][1]
                  }
                </ChoiceY>

                <ChoiceZ>
                  {
                    this.props.chooseWordStore.listen &&
                    this.props.chooseWordStore.question[this.props.chooseWordStore.index][2]
                  }
                </ChoiceZ>

              </Question>
            </QuestionContainer>

            <Solved>

              {
                this.props.chooseWordStore.correctAnswer.filter(
                  (_, i) => i < this.props.chooseWordStore.index,
                ).join(' ')
              }

            </Solved>

            <Translation>

              {this.props.chooseWordStore.currentInstance.toPart}

            </Translation>

          </div>

        </Container>}
    </div>
  }
}

const connectComponent = ({ chooseWordStore }) => ({ chooseWordStore })

export const ChooseWordWrapped = connect(connectComponent)(ChooseWord)
