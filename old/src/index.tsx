import * as React from 'react'
import { render } from 'react-dom'
import App from './app'

const id = 'react-container'

if (document.querySelector(`#${id}`) === null){
  const element = document.createElement('div')
  element.setAttribute('id', id)
  document.body.appendChild(element)
}

const rootEl = document.getElementById(id)
render(<App />, rootEl)

if (module.hot) {
  module.hot.accept('./app', function () {
    const NextApp = require('./app')
    render(<NextApp />, rootEl)
  })
}
