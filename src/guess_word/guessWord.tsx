import * as React from 'react'
import { Container } from './styled/grid'
import { Input, InputContainer } from './styled/input'
import { Sentence, SentenceContainer } from './styled/sentence'

export class GuessWord extends React.Component<GuessWordProps, {}> {

  public render() {
    const { listen, answer, question } = this.props.guessWordStore

    return (
      <Container>

        <InputContainer><Input /></InputContainer>

        <SentenceContainer>
          {listen && <Sentence>{question}</Sentence>}
          {!listen && <Sentence>{answer}</Sentence>}
        </SentenceContainer>

      </Container>
    )
  }
}
