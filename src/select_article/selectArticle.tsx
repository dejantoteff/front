import * as React from 'react'
import { Container } from './styled/grid'
import { Image, ImageContainer } from './styled/image'

export class SelectArticle extends React.PureComponent<SelectArticleProps, {}> {
  constructor(props: SelectArticleProps) {
    super(props)
  }

  public render() {
    const {
      wordList,
      translated,
      imageSrc
    } = this.props.selectArticleStore.currentInstance as any
 
    return (
      <Container>

        <ImageContainer>
          <Image src={imageSrc}/>
        </ImageContainer>
      
      </Container>
    )
  }
}