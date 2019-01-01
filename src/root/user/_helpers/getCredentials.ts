import { getter } from 'client-helpers'

interface Output {
  userDBName: string
  password: string
}

export function getCredentials(): Output | false {
  const userDBName = getter<string>('userDBName')
  const password = getter<string>('password')

  return userDBName && password ?
    { userDBName, password } :
    false
}
