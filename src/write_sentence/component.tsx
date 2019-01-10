import { masterGetter, getter } from 'client-helpers'
import { defaultTo } from 'rambdax'
import * as React from 'react'
import { connect } from 'react-redux'
import { init, listen } from './actions'

import { Container } from './styled/grid'
import { Image, ImageContainer } from './styled/image'
import { Input, InputContainer } from './styled/input'
import {AnswerContainer} from './styled/answer'
import {QuestionContainer} from './styled/question'
import {TranslationContainer} from './styled/translation'

import { AnswerList } from './answerList'
import { lastCharSpace } from './ants/lastCharSpace'
import { QuestionList } from './questionList'

import { autoAnt } from './ants/auto'
import { lockAnt } from './ants/lock'
import { getBee } from './bees/get'
import { acceptSpeechBee } from './bees/acceptSpeech'

export class WriteSentence extends React.Component<
  WriteSentenceProps, {lock:boolean}
> {
  constructor(props: WriteSentenceProps) {
    super(props)
    this.onInputKeyPress = this.onInputKeyPress.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.state = {
      lock: getter('lock')
    }
  }

  public componentDidMount() {
    const {
      auto,
      id,
      mic,
      pause,
    } = masterGetter('auto,pause,id,mic')
    if (typeof auto === 'number'){
      autoAnt(
        this.props.dispatch,
        auto * 1000,
        defaultTo(auto * 3000, pause * 1000),
      )
    }
    if(mic) acceptSpeechBee(this.props.dispatch)
    this.props.dispatch(init(id))
  }

  public onInputKeyPress(e: any) {
    if (e.key === ' ') { 
      this.props.dispatch(listen('SPACE')) 
    }
  }

  public onInputChange(e: any) {
    if (lastCharSpace(e.target.value)) return
    if(
      this.state.lock && 
      !lockAnt(this.props.writeSentenceStore, e)
    ) return

    this.props.dispatch(listen(e.target.value))
  }

  public render() {
    const {
      currentInstance,
      inputState,
      ready,
    } = this.props.writeSentenceStore
    if(!ready) return ''

    const Bee = getBee(currentInstance.fromPart.length)

    return (
      <div>
        <Container>

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
            <Bee.Question>
              <QuestionList {...this.props.writeSentenceStore} />
            </Bee.Question>
          </QuestionContainer>

          <AnswerContainer>
            <Bee.Answer>
              <AnswerList {...this.props.writeSentenceStore} />
            </Bee.Answer>
          </AnswerContainer>

          <ImageContainer>
            <Image src={currentInstance.imageSrc} />
          </ImageContainer>

          <TranslationContainer>
            <Bee.Translation>
              {currentInstance.toPart}
            </Bee.Translation>
          </TranslationContainer>

        </Container>
      </div>
    )
  }
}

const connectComponent = ({ writeSentenceStore }) => ({ writeSentenceStore })

export const WriteSentenceWrapped = connect(connectComponent)(WriteSentence)
