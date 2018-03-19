import * as React from 'react'
import {
  AnswerHidden,
  AnswerVisible,
} from './styled/answer'

/**
 * Shows the word if it is either pending or current
 * If the word is already passed, then hide it
 */
export function AnswerList(props: any) {
  const { question, index } = props

  return (
    <React.Fragment>{question.map((questionInstance, i) => {

      const AnswerSpan = i < index ?
        AnswerVisible :
        AnswerHidden

      return (
        <AnswerSpan key={i}>
          {question[i].hidden}
        </AnswerSpan>
      )
    })
    }</React.Fragment>
  )
}
