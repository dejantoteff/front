import * as React from 'react'
import { Container } from './styled/grid'
import { Input, InputContainer } from './styled/input'
import { Sentence, SentenceContainer } from './styled/sentence'
import { Word, WordContainer } from './styled/word'

export class GuessWord extends React.Component<GuessWordProps, {}> {
  constructor(props: GuessWordProps) {
    super(props)
    this.onInput = this.onInput.bind(this)
  }
  public onInput(e) {
    console.log(e)
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
              onKeyPress={this.onInput}
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
