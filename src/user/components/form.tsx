import * as React from 'react'
import { login, register } from '../actions';

export class UserForm extends React.Component<UserProps, {}> {
  private base: string

  constructor(props: any) {
    super(props)
    
    this.onLoginClick = this.onLoginClick.bind(this)
    this.onRegisterClick = this.onRegisterClick.bind(this)
    this.whenPassword = this.whenPassword.bind(this)
    this.base = 'user__form'
  }

  whenPassword(event){
    if(event.key === 'Enter'){
      this.onLoginClick()
    }
  }

  public onLoginClick() {
    const email = document.getElementById('email') as HTMLInputElement
    const password = document.getElementById('password') as HTMLInputElement

    const willDispatch = {
      email: email.value,
      password: password.value
    }  
    
    this.props.dispatch(login(willDispatch))  

    email.value = ''
    password.value = ''
  }

  public onRegisterClick() {
    const email = document.getElementById('email') as HTMLInputElement
    const password = document.getElementById('password') as HTMLInputElement

    const willDispatch = {
      email: email.value,
      password: password.value
    }  
    
    this.props.dispatch(register(willDispatch))  

    email.value = ''
    password.value = ''
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
                placeholder='email' 
                id='email' 
              />
            </div>

            <div className={`${this.base}--password`}>
            <input 
                type='password'
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
