import * as React from 'react'
import { invalidForm } from '../../_helpers/notify'
import { login, register } from '../actions'
import { Form, FormContainer } from '../styled'

const EMAIL_MIN_LENGTH = 5
const PASSWORD_MIN_LENGTH = 5

const isValidForm = (input: any): boolean => {

  return input.email &&
    input.password &&
    input.email.length > EMAIL_MIN_LENGTH
    && input.password.length > PASSWORD_MIN_LENGTH
}

function onClick() {
  const email = document.getElementById('email') as HTMLInputElement
  const password = document.getElementById('password') as HTMLInputElement

  const formContent = {
    email: email.value,
    password: password.value,
  }

  if (isValidForm(formContent)) {
    email.value = ''
    password.value = ''
  }

  return isValidForm(formContent) ?
    formContent :
    false
}

export class UserForm extends React.Component<UserProps, {}> {
  constructor(props: any) {
    super(props)
    this.onLoginClick = this.onLoginClick.bind(this)
    this.onRegisterClick = this.onRegisterClick.bind(this)
    this.whenPassword = this.whenPassword.bind(this)
  }
  public onLoginClick() {
    const formContent = onClick()

    const willDispatch = formContent === false ?
      invalidForm() :
      login(formContent)

    this.props.dispatch(willDispatch)
  }
  public onRegisterClick() {
    const formContent = onClick()

    const willDispatch = formContent === false ?
      invalidForm() :
      register(formContent)

    this.props.dispatch(willDispatch)
  }
  public whenPassword(event: any) {
    if (event.key === 'Enter') {
      this.onLoginClick()
    }
  }
  public render() {
    return (
      <FormContainer>
        <Form>

          <div>
            {this.props.store.logged && <span>Log in</span>}
            {!this.props.store.logged && <span>Create account</span>}
          </div>

          <div>
            <input
              type='email'
              name='email'
              placeholder='email'
              id='email'
            />
          </div>

          <div>
            <input
              type='password'
              name='password'
              placeholder='password'
              id='password'
              onKeyPress={this.whenPassword}
            />
          </div>

          <div>
            <button type='button' onClick={this.onRegisterClick}>Register</button>
            <button type='button' onClick={this.onLoginClick}>Login</button>
          </div>
        </Form>

      </FormContainer>
    )
  }
}
