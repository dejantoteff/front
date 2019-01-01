import { masterGetter } from 'client-helpers'
import { defaultTo } from 'rambdax'
import * as React from 'react'
import { connect } from 'react-redux'
import { init, listen } from './actions'
import { autoAnt } from './ants/auto'

import {AnswerContainer} from './styled/answer'
import {QuestionContainer} from './styled/question'
import {TranslationContainer} from './styled/translation'

import { Container } from './styled/grid'
import { Image, ImageContainer } from './styled/image'
import { Input, InputContainer } from './styled/input'

import { AnswerList } from './answerList'
import { getX } from './ants/getX'
import { lastCharSpace } from './ants/lastCharSpace'
import { QuestionList } from './questionList'

/**
 * Defines when one sentence is too long
 * If so, then a smaller font-size is applied
 */
const IS_LONG_LIMIT = 57

export class WriteSentence extends React.Component<WriteSentenceProps, {}> {
  constructor(props: WriteSentenceProps) {
    super(props)
    this.onInputKeyPress = this.onInputKeyPress.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

  public componentDidMount() {
    const {auto, pause, id} = masterGetter('auto,pause,id')
    if (typeof auto === 'number'){
      autoAnt(
        this.props.dispatch,
        auto * 1000,
        defaultTo(auto * 3000, pause * 1000),
      )
    }
    this.props.dispatch(init(id))
  }

  public onInputKeyPress(e: any) {
    if (e.key === ' ') { this.props.dispatch(listen('SPACE')) }
  }

  public onInputChange(e: any) {
    if (!lastCharSpace(e.target.value)) {
      console.log('e.target.value', e.target.value)
      this.props.dispatch(listen(e.target.value))
    }
  }

  public render() {
    const {ready, currentInstance, inputState } = this.props.writeSentenceStore
    const len = ready ?
      currentInstance.fromPart.length :
      0

    const X = getX(len > IS_LONG_LIMIT)

    return (
      <div>
        {ready && <Container>

          <InputContainer>
            <Input>
              <input
                type='text'
                autoFocus={ready}
                value={inputState}
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
            <Image src={currentInstance.imageSrc} />
          </ImageContainer>

          <TranslationContainer>
            <X.Translation>
              {currentInstance.toPart}
            </X.Translation>
          </TranslationContainer>

        </Container>}
      </div>
    )
  }
}

const connectComponent = ({ writeSentenceStore }) => ({ writeSentenceStore })

export const WriteSentenceWrapped = connect(connectComponent)(WriteSentence)
