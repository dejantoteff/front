import { maybe } from 'rambdax'
import { mobileFlag } from '../../_helpers/mini/mobileFlag'
import {
  Answer,
  AnswerMobile,
  AnswerSmall,
} from '../styled/answer'
import {
  Question,
  QuestionMobile,
  QuestionSmall,
} from '../styled/question'
import {
  Translation,
  TranslationSmall,
} from '../styled/translation'

/**
 * Wraps all normal and small text components
 * If the sentence is too long, we need to display_
 * smaller version of the component.
 * Otherwise we show the standard version.
 */
export function getX(isLong: boolean) {
  const MOBILE_FLAG = mobileFlag()

  const whenLong = {
    Answer: AnswerSmall,
    Question: QuestionSmall,
    Translation: TranslationSmall,
  }
  const whenMobile = {
    Answer: AnswerMobile,
    Question: QuestionMobile,
    Translation: TranslationSmall,
  }

  const whenNormal = {
    Answer,
    Question,
    Translation,
  }

  return maybe<any>(
    MOBILE_FLAG,
    whenMobile,
    isLong ? whenLong : whenNormal,
  )
}
