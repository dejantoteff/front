import * as React from 'react'
import { connect } from 'react-redux'
import { click, init } from './actions'
import { sharedInit } from '../root/actions'
import { CHOOSE_WORD } from '../constants'

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
    this.onClickUp = this.onClickUp.bind(this)
    this.onClickRight = this.onClickRight.bind(this)
    this.onClickDown = this.onClickDown.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  public onClick(mode: string) {
    this.props.dispatch(click(mode))
  }
  public onClickUp() {
    this.onClick('UP')
  }
  public onClickRight() {
    this.onClick('RIGHT')
  }
  public onClickDown() {
    this.onClick('DOWN')
  }
  public componentDidMount() {
    this.props.dispatch(init())
    this.props.dispatch(sharedInit(CHOOSE_WORD))
  }
  public render() {
    const { question, index } = this.props.chooseWordStore

    return (
      <div>
        {this.props.chooseWordStore.ready &&
          <Container>

            <QuestionContainer>

              {this.props.chooseWordStore.listen && <Question>

                <ChoiceX onClick={this.onClickUp}>
                  {question[index][0]}
                </ChoiceX>

                <ChoiceY onClick={this.onClickRight}>
                  {question[index][1]}
                </ChoiceY>

                <ChoiceZ onClick={this.onClickDown}>
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
    )
  }
}

const connectComponent = ({ chooseWordStore }) => ({ chooseWordStore })

export const ChooseWordWrapped = connect(connectComponent)(ChooseWord)
