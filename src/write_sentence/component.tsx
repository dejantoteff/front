import * as React from 'react'
import { connect } from 'react-redux'
import { init, listen, unmount } from './actions'

import {
  Answer,
  AnswerContainer,
  AnswerHidden,
  AnswerVisible,
} from './styled/answer'
import { Container } from './styled/grid'
import { Image, ImageContainer } from './styled/image'
import { Input, InputContainer } from './styled/input'
import {
  Question,
  QuestionActive,
  QuestionContainer,
  QuestionHidden,
  QuestionSmall,
  QuestionVisible,
} from './styled/question'
import { Translation, TranslationContainer } from './styled/translation'

export const isLastCharSpace = (str: string): boolean => {
  const lastChar = str[str.length - 1]

  return lastChar === ' '
}

function AnswerList(props) {
  const { question, index } = props
  return <React.Fragment>{question.map((questionInstance, i) => {

    const AnswerSpan = i < index ?
      AnswerVisible :
      AnswerHidden

    return <AnswerSpan key={i}>
      {question[i].hidden}
    </AnswerSpan>
  })
  }</React.Fragment>
}

function QuestionList(props) {
  const { question, index } = props
  return <React.Fragment>{question.map((questionInstance, i) => {

    const QuestionSpan = i === index ?
      QuestionActive :
      i > index ?
        QuestionVisible :
        QuestionHidden

    return <QuestionSpan key={i}>
      {question[i].visible}
    </QuestionSpan>
  })
  }</React.Fragment>
}

export class WriteSentence extends React.Component<WriteSentenceProps, {}> {
  private base: string

  constructor(props: WriteSentenceProps) {
    super(props)
    this.onInputKeyPress = this.onInputKeyPress.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.base = 'writesentence'
  }

  public componentDidMount() {
    this.props.dispatch(init())
  }
  public componentWillUnmount() {
    this.props.dispatch(unmount())
  }

  public onInputKeyPress(event: any) {
    if (event.key === ' ') {

      this.props.dispatch(listen('SPACE'))
    }
  }
  public onInputChange(event: any) {
    if (!isLastCharSpace(event.target.value)) {

      this.props.dispatch(listen(event.target.value))
    }
  }

  public render() {
    const ready = this.props.writeSentenceStore.ready
    const len = ready ?
      this.props.writeSentenceStore.currentInstance.fromPart.length :
      0

    const QuestionDiv = len > 65 ?
      QuestionSmall :
      Question

    return <div>
      {ready && <Container>

        <InputContainer>
          <Input>
            <input
              type='text'
              autoFocus={this.props.writeSentenceStore.ready}
              value={this.props.writeSentenceStore.inputState}
              onChange={this.onInputChange}
              onKeyPress={this.onInputKeyPress}
            />
          </Input>
        </InputContainer>

        <QuestionContainer>
          <QuestionDiv>
            <QuestionList {...this.props.writeSentenceStore} />
          </QuestionDiv>
        </QuestionContainer>

        <AnswerContainer>
          <Answer>
            <AnswerList {...this.props.writeSentenceStore} />
          </Answer>
        </AnswerContainer>

        <ImageContainer>
          <Image
            src={this.props.writeSentenceStore.currentInstance.imageSrc}
          />
        </ImageContainer>

        <TranslationContainer>
          <Translation>
            {this.props.writeSentenceStore.currentInstance.toPart}
          </Translation>
        </TranslationContainer>

      </Container>}
    </div>
  }
}

const connectComponent = ({ writeSentenceStore }) => ({ writeSentenceStore })

export const WriteSentenceWrapped = connect(connectComponent)(WriteSentence)
