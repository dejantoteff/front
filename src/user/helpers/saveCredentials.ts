export function saveCredentials(userDBName, password) {
  localStorage.setItem('userDBName', userDBName)
  localStorage.setItem('password', password)
}
