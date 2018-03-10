import * as React from 'react'
import { check, input } from './actions'

import { blue7, darkblue7 } from 'colors'

import { Container, CText, CTextContainer } from './styled/grid'
import { Image, ImageContainer } from './styled/image'
import { Input, InputContainer } from './styled/input'
import { Related, RelatedContainer } from './styled/related'
import { Word, WordContainer } from './styled/word'

const TranslatedContainer = CTextContainer('gw_translated')
const Translated = CText({ color: blue7 })
const SentenceContainer = CTextContainer('gw_sentence')
const Sentence = CText({ color: darkblue7 })

export class GuessWord extends React.PureComponent<GuessWordProps, {}> {
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
    const x = this.props.guessWordStore
    const imageSrc = x.currentInstance.imageSrc as string

    return (
      <Container>
        <InputContainer>
          <Input>
            <input
              type='text'
              autoFocus={true}
              value={x.inputState}
              onChange={this.onInput}
              onKeyPress={this.onKeyPress}
            />
          </Input>
        </InputContainer>

        <WordContainer>
          {x.listen && <Word>{x.wordQuestion}</Word>}
          {!x.listen && <Word>{x.wordAnswer}</Word>}
        </WordContainer>

        <RelatedContainer>
          <Related>{x.related[0]}</Related>
          <Related>{x.related[1]}</Related>
        </RelatedContainer>

        <SentenceContainer>
          {x.listen && <Sentence>{x.question}</Sentence>}
          {!x.listen && <Sentence>{x.answer}</Sentence>}
        </SentenceContainer>

        <ImageContainer>
          <Image src={imageSrc} />
        </ImageContainer>

        <TranslatedContainer>
          <Translated>
            {x.translated}
          </Translated>
        </TranslatedContainer>
      </Container>
    )
  }
}
