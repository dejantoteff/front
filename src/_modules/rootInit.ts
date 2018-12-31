import {
  masterGetter,
  masterSetter,
  resetter,
} from 'client-helpers'
import { pick, s } from 'rambdax'
import { takeArguments } from 'string-fn'
import { allowedUrlInputs, resetUrlInputs } from '../constants'

export function rootInit(){
  s()
  resetter(resetUrlInputs)
  const urlInputs = pick(
    allowedUrlInputs,
    takeArguments(window.location.href),
  )

  masterSetter({
    ...masterGetter(),
    ...urlInputs,
  })
}
