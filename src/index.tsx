require("./app.css")
import * as React from "react"
import * as ReactDOM from "react-dom"
import { connect, Provider } from "react-redux"
import {default as createStore} from "./createStore"

const connectComponent = ({ mainStore }) => ({ mainStore })

interface ReduxAction {
  type: string
  payload?: any
}

interface Props {
    dispatch: (input: ReduxAction) => void
}

class App extends React.Component<Props, {}>{
  constructor(props){
    super(props)
  }
  public componentDidMount(){
    this.props.dispatch({type: "INIT", payload: "more"})
  }
  public render(){
    return(<div>more</div>)
  }
}

const id = "react-container"

if (document.querySelector(`#${id}`) === null){
  const element = document.createElement("div")
  element.setAttribute("id", id)
  document.body.appendChild(element)
}

const AppWrapped = connect(connectComponent)(App)

const store = createStore()

const AppExport = () =>
  <Provider store={ store }>
    <AppWrapped />
  </Provider>

ReactDOM.render(
    <AppExport />,
    document.getElementById(id),
)
