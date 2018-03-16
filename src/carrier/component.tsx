// STYLED_COMPONENTS
import { Logo } from '../navigation/styled/logo'
import {
  LogoCell,
  createIconCell,
  Container,
} from './styled/grid'

const Info = createIconCell('info')
const Refresh = createIconCell('refresh')

// IMPORTS
import * as React from 'react'
import rough from 'roughjs'

import { connect } from 'react-redux'
import { LANGUAGE_SEPARATOR, LEARNING_MEME } from '../constants'

import { infoPath, infoIcon } from './icons/info'
import { randomPath, randomIcon } from './icons/random'
import { refreshPath, refreshIcon } from './icons/refresh'
import { sendIcon } from './icons/send'
import { stepForwardIcon } from './icons/stepForward'
import { volumeDownIcon } from './icons/volumeDown'

import { LanguagesComponent } from './languages'
import { defaultTo } from 'rambdax'

interface RoughDataInterface{
  [namespace: string]: {
    roughness?: number
    fill?: string
    ready?: boolean
  }
}

const Paths = {
  infoPath,
  refreshPath,
}

const RoughData: RoughDataInterface = {
  info: {roughness: 0.7, fill: 'red'},
  refresh: {roughness: 0.5, fill: 'teal'},
}

function paint(){
  for (const namespace in RoughData) {
    const canvasElement = rough.canvas(
      document.getElementById(`icon_${namespace}`)
    )

    const roughness = defaultTo(
      0.7, 
      RoughData[namespace].roughness
    ) 
    const fill = defaultTo(
      'green', 
      RoughData[namespace].fill
    )
    const path = Paths[`${namespace}Path`]

    canvasElement.path(
      path, 
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

        <LogoCell>
          <Logo id='toggle-navigation' />
        </LogoCell>
        
        <Info.outer><Info.inner /></Info.outer>
        <Refresh.outer><Refresh.inner /></Refresh.outer>

      </Container>
    )
  }
}

const connectComponent = ({ store }) => ({ store })

export const CarrierWrapped = connect(connectComponent)(Carrier)
