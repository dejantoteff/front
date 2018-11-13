import { last } from 'rambdax'
import * as React from 'react'
import { connect } from 'react-redux'
import { init, listen, auto } from './actions'

import {
  Answer,
  AnswerContainer,
  AnswerSmall,
} from './styled/answer'
import {
  Question,
  QuestionContainer,
  QuestionSmall,
} from './styled/question'
import {
  Translation,
  TranslationContainer,
  TranslationSmall,
} from './styled/translation'

import { Container } from './styled/grid'
import { Image, ImageContainer } from './styled/image'
import { Input, InputContainer } from './styled/input'

import { AnswerList } from './answerList'
import { QuestionList } from './questionList'

/**
 * Defines when one sentence is too long
 * If so, then a smaller font-size is applied
 */
const IS_LONG_LIMIT = 57

export const isLastCharSpace = (x: string): boolean => {

  return last(x) === ' '
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
  public componentWillMount() {
    if(window.location.href.endsWith('?auto')){
      this.props.dispatch(auto())
    }
  }
  public componentDidMount() {
    this.props.dispatch(init())
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
