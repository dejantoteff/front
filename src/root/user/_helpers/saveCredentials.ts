export function saveCredentials(userDBName: string, password: string) {
  localStorage.setItem('userDBName', userDBName)
  localStorage.setItem('password', password)
}
