import { setter, resetter } from 'client-helpers'

export function removeCredentials() {
  setter('points', 0)
  resetter([
    'userDBName',
    'password'
  ])

  window.location.reload(false)
}
