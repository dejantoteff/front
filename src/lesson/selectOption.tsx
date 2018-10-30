import * as React from 'react';
import { click } from './actions';
import { Container } from '../select_article/styled/grid';
import { Select, SelectContainer } from '../select_article/styled/select';
import { WordsContainer } from '../select_article/styled/words';

function SelectComponent(input: any){
  const {options, i, dispatch} = input
  const onClick = _ => dispatch(
    click({options, i, word: _.target.textContent})
  )

  return (
    <SelectContainer>
      {
        options.map((_, j) =>
          <Select
            // className={`selectable_${_.status.toLowerCase()}`}
            key={`${i}_${j}`}
            onClick={onClick}
          >
            {_.text}
          </Select>,
        )
      }
    </SelectContainer>
  )
}

export function SelectOption({store, dispatch}){
  return (
    <Container>

      <WordsContainer>
        {
          store.question.map((_, i) => {
            if (typeof _ === 'string'){

              return <span key={i}>{_}</span>
            }

            return (
              <SelectComponent
                i={i}
                key={i}
                options={_}
                dispatch={dispatch}
              />
            )
          })
        }
      </WordsContainer>

    </Container>
  )
}
