import { classnames } from 'classnames'
import * as React from 'react'
import { LANGUAGE_SEPARATOR } from '../constants'
import { click } from './actions'

import {
  Languages,
  LanguagesContainer,
} from './styled/languages'

interface Input {
  dispatch: any
  from: Language
  to: Language
  currentPair: string
}

function SingleLanguage(input: Input) {
  const { dispatch, from, to, currentPair } = input
  const languagePair = `${from}${LANGUAGE_SEPARATOR}${to}`
  const className = classnames({
    active_language: languagePair === currentPair,
  })
  const onClick = () => dispatch(click({ from, to }))

  return (
    <React.Fragment>
      <div
        className={className}
        onClick={onClick}
      >
        {languagePair}
      </div>
    </React.Fragment>
  )
}

export function LanguagesComponent(input: any) {
  return (
    <React.Fragment>
      <LanguagesContainer>

        <Languages>
          <SingleLanguage {...input} from='DE' to='EN' />
          <SingleLanguage {...input} from='DE' to='BG' />
          <SingleLanguage {...input} from='EN' to='DE' />
          <SingleLanguage {...input} from='EN' to='BG' />
          <SingleLanguage {...input} from='BG' to='DE' />
          <SingleLanguage {...input} from='BG' to='EN' />
        </Languages>
      </LanguagesContainer>
    </React.Fragment>
  )
}
