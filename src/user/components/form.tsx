import * as React from 'react'
import { login, register } from '../actions'
import { invalidForm } from '../../common'

const isValidForm = (input: any):boolean => {
  
  return input.email&&
    input.password&&
    input.email.length>5
    &&input.password.length>5
}

export class UserForm extends React.Component<UserProps, {}> {
  private base: string

  constructor(props: any) {
    super(props)

    this.onLoginClick = this.onLoginClick.bind(this)
    this._onClick = this._onClick.bind(this)
    this.onRegisterClick = this.onRegisterClick.bind(this)
    this.whenPassword = this.whenPassword.bind(this)
    this.base = 'user__form'
  }

  public whenPassword(event: any) {
    if (event.key === 'Enter') {
      this.onLoginClick()
    }
  }

  private _onClick(){
    const email = document.getElementById('email') as HTMLInputElement
    const password = document.getElementById('password') as HTMLInputElement
  
    const formContent = {
      email: email.value,
      password: password.value,
    }

    if(isValidForm(formContent)){
      email.value = ''
      password.value = ''
    }

    return isValidForm(formContent) ? 
      formContent :
      false
  } 
  
  public onLoginClick() {
    
    const formContent = this._onClick()

    const willDispatch = formContent === false ?
      invalidForm() :
      login(formContent)
    
    this.props.dispatch(willDispatch)  
  }
  
  public onRegisterClick() {
    
    const formContent = this._onClick()
  
    const willDispatch = formContent === false ?
      invalidForm() :
      register(formContent)
    
    this.props.dispatch(willDispatch)  
  }

  public render() {
    return <div className={`${this.base}--container`}>
      <div className={`${this.base}`}>

        <div className={`${this.base}--title`}>
          {this.props.userStore.logged && <span>Log in</span>}
          {!this.props.userStore.logged && <span>Create account</span>}
        </div>
        <div className={`${this.base}--email`}>
          <input
            type='email'
            name='email'
            placeholder='email'
            id='email'
          />
        </div>

        <div className={`${this.base}--password`}>
          <input
            type='password'
            name='password'
            placeholder='password'
            id='password'
            onKeyPress={this.whenPassword}
          />
        </div>

        <div className={`${this.base}--submit`}>
          <button type='button' onClick={this.onRegisterClick}>Register</button>
          <button type='button' onClick={this.onLoginClick}>Login</button>
        </div>
      </div>

    </div>
  }
}
