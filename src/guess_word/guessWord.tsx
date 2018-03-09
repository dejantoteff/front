import * as React from 'react'
import { check, input } from './actions'
import { Container } from './styled/grid'
import { Input, InputContainer } from './styled/input'
import { Sentence, SentenceContainer } from './styled/sentence'
import { Word, WordContainer } from './styled/word'

export class GuessWord extends React.Component<GuessWordProps, {}> {
  constructor(props: GuessWordProps) {
    super(props)
    this.onInput = this.onInput.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
  }
  public onInput(e) {
    this.props.dispatch(input(e.target.value))
  }
  public onKeyPress(event: any) {
    if (event.key === 'Enter') {

      this.props.dispatch(check())
    }
  }
  public render() {
    const {
      listen,
      answer,
      question,
      word,
      inputState,
      translated,
    } = this.props.guessWordStore

    return (
      <Container>
        <InputContainer>
          <Input>
            <input
              type='text'
              autoFocus={true}
              value={inputState}
              onChange={this.onInput}
              onKeyPress={this.onKeyPress}
            />
          </Input>
        </InputContainer>

        <WordContainer><Word>{word}</Word></WordContainer>

        <SentenceContainer>
          {listen && <Sentence>{question}</Sentence>}
          {!listen && <Sentence>{answer}</Sentence>}
        </SentenceContainer>
      </Container>
    )
  }
}
