import * as React from 'react'
import { ICON_ACTIVE, ICON_PASSIVE } from '../../constants'

export function volumeDownIcon(activeFlag?: boolean) {
  const color = activeFlag ?
    ICON_ACTIVE :
    ICON_PASSIVE

  /* tslint:disable:max-line-length */
  return <svg xmlns='http://www.w3.org/2000/svg' width='63%' height='63%' viewBox='5 0 90 100'><path fill={color} d='m24.1 7.9v24.2q0 0.6-0.4 1t-1 0.5-1-0.5l-7.4-7.4h-5.9q-0.6 0-1-0.4t-0.4-1v-8.6q0-0.6 0.4-1t1-0.4h5.9l7.4-7.4q0.4-0.5 1-0.5t1 0.5 0.4 1z m8.6 12.1q0 1.7-0.9 3.2t-2.5 2q-0.3 0.2-0.6 0.2-0.6 0-1-0.5t-0.4-1q0-0.4 0.2-0.8t0.7-0.5 0.7-0.5 0.7-0.8 0.3-1.3-0.3-1.3-0.7-0.8-0.7-0.5-0.7-0.5-0.2-0.8q0-0.6 0.4-1t1-0.5q0.3 0 0.6 0.2 1.5 0.6 2.5 2t0.9 3.2z'></path></svg>
  /* tslint:enable:max-line-length */
}
