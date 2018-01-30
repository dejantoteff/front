import { classnames } from 'classnames'
import * as React from 'react'
import { LANGUAGE_SEPARATOR } from '../constants'
import { click } from './actions'

function SingleLangauge({ dispatch, from, to, currentPair }) {
  const languagePair = `${from}${LANGUAGE_SEPARATOR}${to}`
  const className = classnames({
    active_language: languagePair === currentPair,
  })

  return <React.Fragment>
    <div
      className={className}
      onClick={() => dispatch(click({ from, to }))}
    >
      {languagePair}
    </div>
  </React.Fragment>
}

export function Languages(input) {
  return <React.Fragment>
    <div className='lang'>

      <div className='lang__container'>
        <SingleLangauge {...input} from='DE' to='EN' />
        <SingleLangauge {...input} from='DE' to='BG' />
        <SingleLangauge {...input} from='EN' to='DE' />
        <SingleLangauge {...input} from='EN' to='BG' />
        <SingleLangauge {...input} from='BG' to='DE' />
        <SingleLangauge {...input} from='BG' to='EN' />
      </div>
    </div>
  </React.Fragment>
}
