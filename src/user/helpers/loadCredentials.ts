interface Output{
  user: string
  password: string
}

export function loadCredentials(): Output|false{
  const user = localStorage.getItem('user')
  const password = localStorage.getItem('password')

  const flag = `${user}` !== 'null' && `${password}` !== 'null'

  return flag ? {user, password} : false
}