import { last } from 'rambdax'
import * as React from 'react'
import { connect } from 'react-redux'
import { WRITE_SENTENCE } from '../constants'
import { sharedInit } from '../root/actions'
import { init, listen } from './actions'

import {
  Answer,
  AnswerContainer,
  AnswerHidden,
  AnswerSmall,
  AnswerVisible,
} from './styled/answer'
import {
  Question,
  QuestionActive,
  QuestionContainer,
  QuestionHidden,
  QuestionSmall,
  QuestionVisible,
} from './styled/question'
import {
  Translation,
  TranslationContainer,
  TranslationSmall,
} from './styled/translation'

import { Container } from './styled/grid'
import { Image, ImageContainer } from './styled/image'
import { Input, InputContainer } from './styled/input'

/**
 * Defines when one sentence is too long
 * If so, then a smaller font-size is applied
 */
const IS_LONG_LIMIT = 57

export const isLastCharSpace = (x: string): boolean => {

  return last(x) === ' '
}

/**
 * Shows the word if it is either pending or current
 * If the word is already passed, then hide it
 */
function AnswerList(props: any) {
  const { question, index } = props

  return <React.Fragment>{question.map((questionInstance, i) => {

    const AnswerSpan = i < index ?
      AnswerVisible :
      AnswerHidden

    return (
      <AnswerSpan key={i}>
        {question[i].hidden}
      </AnswerSpan>
    )
  })
  }</React.Fragment>
}

/**
 * Shows the correct words according to the local index counter
 */
function QuestionList(props: any) {
  const { question, index } = props

  return (
    <React.Fragment>{question.map((questionInstance, i) => {

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
  )
}

/**
 * Wraps all normal and small text components
 * If the sentence is too long, we need to display_
 * smaller version of the component.
 * Otherwise we show the standard version.
 */
function getX(isLong: boolean) {
  const whenLong = {
    Answer: AnswerSmall,
    Question: QuestionSmall,
    Translation: TranslationSmall,
  }

  const whenNormal = {
    Answer,
    Question,
    Translation,
  }

  return isLong ? whenLong : whenNormal
}

export class WriteSentence extends React.Component<WriteSentenceProps, {}> {
  constructor(props: WriteSentenceProps) {
    super(props)
    this.onInputKeyPress = this.onInputKeyPress.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }
  public componentDidMount() {
    this.props.dispatch(init())
    this.props.dispatch(sharedInit(WRITE_SENTENCE))
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

    const X = getX(len > IS_LONG_LIMIT)

    return (

      <div>
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
            <X.Question>
              <QuestionList {...this.props.writeSentenceStore} />
            </X.Question>
          </QuestionContainer>

          <AnswerContainer>
            <X.Answer>
              <AnswerList {...this.props.writeSentenceStore} />
            </X.Answer>
          </AnswerContainer>

          <ImageContainer>
            <Image
              src={this.props.writeSentenceStore.currentInstance.imageSrc}
            />
          </ImageContainer>

          <TranslationContainer>
            <X.Translation>
              {this.props.writeSentenceStore.currentInstance.toPart}
            </X.Translation>
          </TranslationContainer>

        </Container>}
      </div>
    )
  }
}

const connectComponent = ({ writeSentenceStore }) => ({ writeSentenceStore })

export const WriteSentenceWrapped = connect(connectComponent)(WriteSentence)
