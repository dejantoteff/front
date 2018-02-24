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
  constructor(props: ChooseWordProps) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  public onClick(mode: string) {
    console.log(mode)
  }
  public componentDidMount() {
    this.props.dispatch(init())
  }
  public componentWillUnmount() {
    this.props.dispatch(unmount())
  }
  public render() {
    const { question, index } = this.props.chooseWordStore

    return <div>
      {this.props.chooseWordStore.ready &&
        <Container>

          <QuestionContainer>

            {this.props.chooseWordStore.listen && <Question>

              <ChoiceX onClick={() => this.onClick('UP')}>
                {question[index][0]}
              </ChoiceX>

              <ChoiceY>
                {question[index][1]}
              </ChoiceY>

              <ChoiceZ>
                {question[index][2]}
              </ChoiceZ>

            </Question>}

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

        </Container>}
    </div>
  }
}

const connectComponent = ({ chooseWordStore }) => ({ chooseWordStore })

export const ChooseWordWrapped = connect(connectComponent)(ChooseWord)
