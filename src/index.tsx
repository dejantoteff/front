import * as React from 'react'
import { render } from 'react-dom'
import { App } from './app'

const id = 'react-container'

const element = document.createElement('div')
element.setAttribute('id', id)
document.body.appendChild(element)

const rootEl = document.getElementById(id)
render(<App />, rootEl)
