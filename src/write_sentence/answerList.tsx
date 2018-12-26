import * as React from 'react'
import {
  AnswerHidden,
  AnswerVisible,
  AnswerVisibleWrong,
} from './styled/answer'
import { ifElse } from 'rambdax'

/**
 * Shows the word if it is either pending or current
 * If the word is already passed, then hide it
 */
export function AnswerList(props: any) {
  const {okCorrect, question, index } = props
  console.log(okCorrect)

  return (
    <React.Fragment>{question.map((questionInstance, i) => {
        const AnswerSpan = ifElse(
          () => i < index,
          () => okCorrect[i] ? AnswerVisible: AnswerVisibleWrong,
          () => AnswerHidden
        )({})
          
      return (
        <AnswerSpan key={i}>
          {question[i].hidden}
        </AnswerSpan>
      )
    })
    }</React.Fragment>
  )
}
