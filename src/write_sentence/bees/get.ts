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

// Defines when one sentence is long or too long
// ============================================
const LONG = 57
const TOO_LONG = 90

// Wraps all normal and small text components
// If the sentence is too long, we need to display_
// smaller version of the component.
// Otherwise we show the standard version.
// ============================================
export function getBee(len: number) {
  const MOBILE_FLAG = maybe<boolean>(
    len > TOO_LONG,
    true,
    mobileFlag()
  )  
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
    len > LONG ? whenLong : whenNormal,
  )
}
