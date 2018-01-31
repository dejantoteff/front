export function saveCredentials(user, password){
  localStorage.setItem('user', user)
  localStorage.setItem('password', password)
}