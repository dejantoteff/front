interface Output {
  userDBName: string
  password: string
}

export function getCredentials(): Output | false {
  const userDBName = localStorage.getItem('userDBName')
  const password = localStorage.getItem('password')

  const flag = `${userDBName}` !== 'null' && `${password}` !== 'null'

  return flag ? { userDBName, password } : false
}
