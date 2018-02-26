import * as React from 'react'
import { connect } from 'react-redux'
import { init, listen, unmount } from './actions'

import { Container } from './styled/grid'
import { Image, ImageContainer } from './styled/image'
import { Input, InputContainer } from './styled/input'
import {
  Question,
  QuestionActive,
  QuestionContainer,
  QuestionPending,
} from './styled/question'
import { Translation, TranslationContainer } from './styled/translation'

export const isLastCharSpace = (str: string): boolean => {
  const lastChar = str[str.length - 1]

  return lastChar === ' '
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
    return <div>
      {this.props.writeSentenceStore.ready && <Container>

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
          <Question>
            {
              this.props.writeSentenceStore.question
                .map((questionInstance, i) => {

                  const QuestionSpan = i === this.props.writeSentenceStore.index ?
                    QuestionActive :
                    QuestionPending

                  const prop = i < this.props.writeSentenceStore.index ?
                    'hidden' :
                    'visible'

                  return <QuestionSpan key={i}>
                    {this.props.writeSentenceStore.question[i][prop]}
                  </QuestionSpan>
                })
            }
          </Question>
        </QuestionContainer>

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
