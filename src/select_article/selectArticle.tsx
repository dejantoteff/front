import * as React from 'react'
import { Container } from './styled/grid'
import { Image, ImageContainer } from './styled/image'
import { WordsContainer } from './styled/words'
import { SelectContainer, Select } from './styled/select'
import { click } from './actions'

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

  const onClick = _ => dispatch(click({id: _.target.id, article}))

  return (
    <SelectContainer>
      {
        article.articleSet.map((_, i) => 
          <Select 
            key={`select_${i}`} 
            id={`select_${i}`}
            onClick={onClick}
          >
          {_}
          </Select> 
        )
      }
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
            wordList.map((_, i)=> {
              if(typeof _ === 'string'){
                
                return <span key={i}>{_}</span>
              }

              return (
                <SelectComponent 
                  key={i}
                  article={_}
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