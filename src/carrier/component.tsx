// STYLED_COMPONENTS
import { Logo } from '../navigation/styled/logo'
import {
  Container,
  createIconCell,
  LogoCell,
  Points,
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
import { ICON_ACTIVE, ICON_PASSIVE, LANGUAGE_SEPARATOR, LEARNING_MEME } from '../constants'

import { infoPath } from './icons/info'
import { randomPath } from './icons/random'
import { refreshPath } from './icons/refresh'
import { sendPath } from './icons/send'
import { stepForwardPath } from './icons/stepForward'
import { volumeDownPath } from './icons/volumeDown'

import { dark6, teal2 } from 'colors'
import { defaultTo, identity, ifElse, isNil } from 'rambdax'
import { LanguagesComponent } from './languages'

const Paths = {
  infoPath,
  randomPath,
  refreshPath,
  sendPath,
  stepForwardPath,
  volumeDownPath,
}

/**
 * Carrier component that is shared across all components.
 * It holds navigation and icons.
 */
export class Carrier extends React.Component<Props, {}> {
  constructor(props: Props){
    super(props)
    this.paint = this.paint.bind(this)
    this.singlePaint = this.singlePaint.bind(this)
  }
  public singlePaint(namespace: string, reverseFlag?: boolean){
    const x = this.props.store.roughData[namespace]
    const canvasElement = rough.canvas(
      document.getElementById(`icon_${namespace.toLowerCase()}`),
    )

    /**
     * Ugly as this is invoked from shouldComponentUpdate_
     * and therefore the new props are not yet applied
     */
    if (reverseFlag){
      x.active = !x.active
    }

    const roughness = defaultTo(
      0.7,
      x.roughness,
    )

    const fill = ifElse(
      isNil,
      () => x.active ? ICON_ACTIVE : ICON_PASSIVE,
      identity,
    )(x.fill)

    const path = Paths[`${namespace}Path`]
    const fillWeight = 2
    const stroke = dark6

    canvasElement.path(
      path,
      { roughness, fill, fillWeight, stroke },
    )
  }
  public paint(){
    Object.keys(this.props.store.roughData)
      .map(
        namespace => this.singlePaint(namespace),
      )
  }
  public shouldComponentUpdate(nextProps, nextState, nextContext){
    if (
      this.props.store.roughData.random.active !== nextProps.store.roughData.random.active
    ){
      this.singlePaint('random', true)
    }else if (
      this.props.store.roughData.volumeDown.active !== nextProps.store.roughData.volumeDown.active
    ){
      this.singlePaint('volumeDown', true)
    }

    return true
  }
  public componentDidMount(){
    this.paint()
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
