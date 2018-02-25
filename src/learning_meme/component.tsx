import * as React from 'react'
import { connect } from 'react-redux'
import { init, listen, unmount } from './actions'
import { Container } from './styled/grid'
import { Image, ImageContainer } from './styled/image'
import { Input, InputContainer } from './styled/input'
import { Question, QuestionContainer } from './styled/question'
import { Sentence, SentenceContainer } from './styled/sentence'
import { Translation, TranslationContainer } from './styled/translation'

export class LearningMeme extends React.PureComponent<LearningMemeProps, {}> {
  constructor(props: LearningMemeProps) {
    super(props)
    this.onInput = this.onInput.bind(this)
  }
  public onInput(event: any) {
    if (event.key === 'Enter') {
      this.props.dispatch(listen('ENTER'))
    } else {
      this.props.dispatch(listen(event.target.value))
    }
  }
  public componentDidMount() {
    this.props.dispatch(init())
  }
  public componentWillUnmount() {
    this.props.dispatch(unmount())
  }
  public render() {
    return <div>
      {this.props.learningMemeStore.ready &&
        <Container>

          <InputContainer>
            <Input>
              <input
                type='text'
                autoFocus={this.props.learningMemeStore.ready}
                value={this.props.learningMemeStore.inputState}
                onChange={this.onInput}
                onKeyPress={this.onInput}
              />
            </Input>
          </InputContainer>

          <QuestionContainer>
            <Question>

              {this.props.learningMemeStore.listen &&
                <div>

                  <span className='fromWord'>
                    {this.props.learningMemeStore.question}
                  </span>

                  <span className='toWord'>
                    {this.props.learningMemeStore.currentInstance.toWord}
                  </span>

                </div>
              }

              {!this.props.learningMemeStore.listen &&
                <div>

                  <span className='fromWord'>
                    {this.props.learningMemeStore.currentInstance.fromWord}
                  </span>

                  <span className='toWord'>
                    {this.props.learningMemeStore.currentInstance.toWord}</span>
                </div>
              }

            </Question>
          </QuestionContainer>

          <SentenceContainer>
            <Sentence>

              {
                !this.props.learningMemeStore.listen &&
                <span>
                  {this.props.learningMemeStore.sentence.hidden}
                </span>
              }

              {
                this.props.learningMemeStore.listen &&
                <span>
                  {this.props.learningMemeStore.sentence.visible}
                </span>
              }

            </Sentence>
          </SentenceContainer>

          <ImageContainer>
            <Image
              src={this.props.learningMemeStore.currentInstance.imageSrc}
            />
          </ImageContainer>

          <TranslationContainer>
            <Translation>
              {this.props.learningMemeStore.currentInstance.toPart}
            </Translation>
          </TranslationContainer>

        </Container>
      }
    </div>
  }
}

const connectComponent = ({ learningMemeStore }) => ({ learningMemeStore })

export const LearningMemeWrapped = connect(connectComponent)(LearningMeme)
