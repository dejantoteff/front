export function removeCredentials() {
  localStorage.setItem('points', '0')
  localStorage.removeItem('userDBName')
  localStorage.removeItem('password')

  window.location.reload(false)
}
