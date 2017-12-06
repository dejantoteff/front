import * as React from 'react'
import { login, createAccount } from '../actions';

export class UserForm extends React.Component<UserProps, {}> {
  private base: string

  constructor(props: any) {
    super(props)
    
    this.onClick = this.onClick.bind(this)
    this.base = 'user__form'
  }

  public onClick() {
    const email = document.getElementById('email') as HTMLInputElement
    const password = document.getElementById('password') as HTMLInputElement
    
    const action = this.props.userStore.logged ?
      login :
      createAccount

    const willDispatch = {
      email: email.value,
      password: password.value
    }  
    this.props.dispatch(action({email, password}))  

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
              />
            </div>
            
            <div className={`${this.base}--submit`}>
              <button type='button' onClick={this.onClick}>Submit</button>
            </div>
         
          </div>

    </div>
  }
}
