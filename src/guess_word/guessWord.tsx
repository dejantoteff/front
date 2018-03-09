import * as React from 'react'
import { Container } from './styled/grid'
import { Input, InputContainer } from './styled/input'
import { Sentence, SentenceContainer } from './styled/sentence'

export class GuessWord extends React.Component<GuessWordProps, {}> {
  public render() {
    return <Container>

      <InputContainer><Input /></InputContainer>

      <SentenceContainer>
        <Sentence>

        </Sentence>
      </SentenceContainer>

    </Container>
  }
}
