import { setter } from 'client-helpers'

export function saveCredentials(userDBName: string, password: string) {
  setter('userDBName', userDBName)
  setter('password', password)
}
