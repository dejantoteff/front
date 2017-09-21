import * as styles from './app.css'

import * as React from "react"
import * as ReactDOM from "react-dom"
console.assert(typeof styles === 'object','styles is not loaded')
interface HelloProps { compiler: string; framework: string; }

const Hello = (props: HelloProps) => <h1>Hello from 1s {props.compiler} and {props.framework}!</h1>

const id = 'react-container'

if(document.querySelector(`#${id}`)===null){
  const element = document.createElement('div')
  element.setAttribute('id',id)
  document.body.appendChild(element)
}

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById(id)
);
