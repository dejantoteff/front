import './style.less'

import * as React from 'react'
import { connect } from 'react-redux'
import { listen } from '../modules/listen'

function infoIcon() {
  return <svg xmlns='http://www.w3.org/2000/svg' viewBox='5 0 90 100'><path fill='#444' d='m27.3 30v2.9q0 0.5-0.4 1t-1 0.4h-11.5q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.6 0.4-1t1-0.4h1.5v-8.6h-1.5q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.6 0.4-1t1-0.4h8.6q0.6 0 1 0.4t0.4 1v12.9h1.5q0.5 0 1 0.4t0.4 1z m-2.9-25.7v4.3q0 0.6-0.4 1t-1 0.4h-5.7q-0.6 0-1-0.4t-0.4-1v-4.3q0-0.6 0.4-1t1-0.4h5.7q0.6 0 1 0.4t0.4 1z'></path></svg>
}

function micIcon() {
  return <svg xmlns='http://www.w3.org/2000/svg' viewBox='5 0 90 100'><path fill='#444' d='m32.7 15.7v2.9q0 4.9-3.3 8.6t-8.1 4.1v3h5.7q0.6 0 1 0.4t0.4 1-0.4 1-1 0.4h-14.3q-0.6 0-1-0.4t-0.4-1 0.4-1 1-0.4h5.7v-3q-4.8-0.5-8.1-4.1t-3.3-8.6v-2.9q0-0.6 0.4-1t1-0.4 1 0.4 0.5 1v2.9q0 4.1 2.9 7t7.1 3 7-3 3-7v-2.9q0-0.6 0.4-1t1-0.4 1 0.4 0.4 1z m-5.7-8.6v11.5q0 2.9-2.1 5t-5 2.1-5.1-2.1-2.1-5v-11.5q0-2.9 2.1-5t5.1-2.1 5 2.1 2.1 5z'></path></svg>
}

function volumeDownIcon() {
  return <svg xmlns='http://www.w3.org/2000/svg' viewBox='5 0 90 100'><path fill='#444' d='m24.1 7.9v24.2q0 0.6-0.4 1t-1 0.5-1-0.5l-7.4-7.4h-5.9q-0.6 0-1-0.4t-0.4-1v-8.6q0-0.6 0.4-1t1-0.4h5.9l7.4-7.4q0.4-0.5 1-0.5t1 0.5 0.4 1z m8.6 12.1q0 1.7-0.9 3.2t-2.5 2q-0.3 0.2-0.6 0.2-0.6 0-1-0.5t-0.4-1q0-0.4 0.2-0.8t0.7-0.5 0.7-0.5 0.7-0.8 0.3-1.3-0.3-1.3-0.7-0.8-0.7-0.5-0.7-0.5-0.2-0.8q0-0.6 0.4-1t1-0.5q0.3 0 0.6 0.2 1.5 0.6 2.5 2t0.9 3.2z'></path></svg>
}

export class Carrier extends React.Component<Props, {}> {
  private base: string

  constructor(props: any) {
    super(props)
    console.log(props, 'carrier')
    this.base = 'carrier'
  }

  public render() {
    return <div className={`${this.base}__container`}>
      <div className={`${this.base}`}>
        <div className={`${this.base}__x`}>
          <div className='navigation__logo'></div>
        </div>

        <div className={`${this.base}__first`}>
        </div>

        <div className={`${this.base}__afterfirst`}>
          <button id='texttospeech'>texttospeech</button>
        </div>

        <div className={`${this.base}__premiddle`}>
          {this.props.store.instructions}
        </div>

        <div className={`${this.base}__middle`}>
          <button id='showanswer'>show answer</button>
        </div>

        <div className={`${this.base}__aftermiddle`}>
          <button id='next'>next</button>
        </div>

        <div className={`${this.base}__prelast`}>
          <button id='bookmark'>bookmark</button>
        </div>

        <div className={`${this.base}__last`}>
          <div className={`${this.base}__last`}>
            Points: {this.props.store.points}
          </div>
        </div>

        <div className={`${this.base}__y`}>
        </div>

      </div>
    </div>
  }
}

const connectComponent = ({ store, chooseWordStore }) => ({ store, chooseWordStore })

export const CarrierWrapped = connect(connectComponent)(Carrier)
