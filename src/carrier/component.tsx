// STYLED_COMPONENTS
import { Logo } from '../navigation/styled/logo'
import {
  Container,
  LogoCell,
  Points,
  createIconCell,
} from './styled/grid'

const Info = createIconCell('info')
const Random = createIconCell('random')
const Refresh = createIconCell('refresh')
const Send = createIconCell('send')
const StepForward = createIconCell('stepforward')
const VolumeDown = createIconCell('volumedown')

// IMPORTS
import * as React from 'react'
import rough from 'roughjs'

import { connect } from 'react-redux'
import { LANGUAGE_SEPARATOR, LEARNING_MEME } from '../constants'

import { infoPath } from './icons/info'
import { randomPath } from './icons/random'
import { refreshPath } from './icons/refresh'
import { sendPath } from './icons/send'
import { stepForwardPath } from './icons/stepForward'
import { volumeDownPath } from './icons/volumeDown'

import { defaultTo } from 'rambdax'
import { LanguagesComponent } from './languages'

interface RoughDataInterface{
  [namespace: string]: {
    roughness?: number
    fill?: string
  }
}

const Paths = {
  infoPath,
  randomPath,
  refreshPath,
  sendPath,
  stepForwardPath,
  volumeDownPath
}

const RoughData: RoughDataInterface = {
  info: {roughness: 0.7, fill: 'red'},
  random: {roughness: 0.5, fill: 'teal'},
  refresh: {roughness: 0.5, fill: 'teal'},
  send: {roughness: 0.5, fill: 'teal'},
  stepForward: {roughness: 0.5, fill: 'teal'},
  volumeDown: {roughness: 0.5, fill: 'teal'},
}

function paint(){
  Object.keys(RoughData).map(
    namespace => {
      const canvasElement = rough.canvas(
        document.getElementById(`icon_${namespace.toLowerCase()}`),
      )
    
      const roughness = defaultTo(
        0.7,
        RoughData[namespace].roughness,
      )
      const fill = defaultTo(
        'green',
        RoughData[namespace].fill,
      )
      const path = Paths[`${namespace}Path`]
    
      canvasElement.path(
        path,
        { roughness, fill },
      )
    }
  )
}

/**
 * Carrier component that is shared across all components.
 * It holds navigation and icons.
 */
export class Carrier extends React.Component<Props, {}> {
  public componentDidMount(){
    paint()
  }
  public render() {
    const from = this.props.store.fromLanguage
    const to = this.props.store.toLanguage
    const name = this.props.store.name

    return (
      <Container>

        <LogoCell><Logo id='toggle-navigation' /></LogoCell>

        <Info.outer><Info.inner /></Info.outer>
        
        <Refresh.outer><Refresh.inner /></Refresh.outer>
        <Random.outer><Random.inner /></Random.outer>
        <VolumeDown.outer><VolumeDown.inner /></VolumeDown.outer>
        <Send.outer><Send.inner /></Send.outer>
        <StepForward.outer><StepForward.inner /></StepForward.outer>
        
        <Points>{this.props.store.points}</Points>
      </Container>
    )
  }
}

const connectComponent = ({ store }) => ({ store })

export const CarrierWrapped = connect(connectComponent)(Carrier)
