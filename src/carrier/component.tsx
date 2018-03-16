// STYLED_COMPONENTS
import { Logo } from '../navigation/styled/logo'
import {
  A,
  // AfterFirst,
  // AfterMiddle,
  // B,
  // C,
  createIconCell,
  Container,
  First,
  Middle,
  PreMiddle,
  X,
  Y,
} from './styled/grid'

const AfterFirst = createIconCell('afterfirst')
const AfterMiddle = createIconCell('aftermiddle')
const B = createIconCell('b')
const C = createIconCell('c')

// IMPORTS
import * as React from 'react'
import rough from 'roughjs'

import { connect } from 'react-redux'
import { LANGUAGE_SEPARATOR, LEARNING_MEME } from '../constants'

import { infoPath, infoIcon } from './icons/info'
import { randomPath, randomIcon } from './icons/random'
import { refreshIcon } from './icons/refresh'
import { sendIcon } from './icons/send'
import { stepForwardIcon } from './icons/stepForward'
import { volumeDownIcon } from './icons/volumeDown'

import { LanguagesComponent } from './languages'
import { defaultTo } from 'rambdax'

interface RoughData{
  [namespace: string]: {
    roughness?: number
    path: string,
    fill?: string
    ready?: boolean
  }
}

const roughData: RoughData = {
  b: {path: infoPath, roughness: 0.7, fill: 'red'},
  c: {path: randomPath, roughness: 0.3, fill: 'teal'},
}

function paint(){
  for (const namespace in roughData) {
    const x = roughData[namespace]
    const canvasElement = rough.canvas(
      document.getElementById(`icon_${namespace}`)
    )

    const roughness = defaultTo(0.7, x.roughness) 
    const fill = defaultTo('green', x.fill) 
    
    canvasElement.path(
      x.path, 
      { roughness, fill }
    )
  }  
}

/**
 * Carrier component that is shared across all components.
 * It holds navigation and icons.
 */

export class Carrier extends React.Component<Props, {}> {
  componentDidMount(){
    paint()
  }
  public render() {
    const from = this.props.store.fromLanguage
    const to = this.props.store.toLanguage
    const name = this.props.store.name

    return (
      <Container>

        {/* Navigation component */}
        <A>
          <Logo id='toggle-navigation' />
        </A>
        
        <B.outer><B.inner /></B.outer>
        <C.outer><C.inner /></C.outer>

      </Container>
    )
  }
}

const connectComponent = ({ store }) => ({ store })

export const CarrierWrapped = connect(connectComponent)(Carrier)
