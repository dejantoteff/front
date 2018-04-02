import * as React from 'react'
import { Container } from './styled/grid'
import { Image, ImageContainer } from './styled/image'
import { WordsContainer } from './styled/words'
import { SelectContainer, Select } from './styled/select'

interface SelectComponentInterface{
  dispatch: any,
  article: WithArticle
}

function SelectComponent(input: SelectComponentInterface){
  const {article, dispatch} = input

  /**
   * Text decoration depends on solved status?
   */
  if(article.solved){

    return <span>article.word</span>
  }

  const onSelect = (x)=> console.log(x);

  return (
    <SelectContainer>
      <Select id={`sc_key_0`}>
        {article.articleSet[0]}
      </Select>
      <Select id={`sc_key_0`}>
        {article.articleSet[0]}
      </Select>

      {/* {
        article.articleSet.map((_, i) => {
          const Comp = 
          <Select key={`as_key_${i}`} id={`as_key_${i}`}>{_}</Select>
        })
      } */}
    </SelectContainer>
  )
}

export class SelectArticle extends React.PureComponent<SelectArticleProps, {}> {
  constructor(props: SelectArticleProps) {
    super(props)
    this.select = this.select.bind(this)
  }
  select(x){
    console.log(x);
  }

  public render() {
    const {
      wordList,
      translated,
      imageSrc
    } = this.props.selectArticleStore.currentInstance
    
    return (
      <Container>

        <WordsContainer>
          
          {
            wordList.map((el,_)=> {
              if(typeof el === 'string'){
                
                return <span key={_}>{el}</span>
              }

              return (
                <SelectComponent 
                  article={el}
                  dispatch={this.props.dispatch}
                />
              )
            })
          }

        </WordsContainer>

        <ImageContainer>
          <Image src={imageSrc}/>
        </ImageContainer>
      
      </Container>
    )
  }
}