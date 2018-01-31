import { pick } from 'rambdax'
import { getCredentials } from '../user/helpers/getCredentials'
import { userLogin } from './userLogin'

export async function getUserData(getPouchDB) {
  const credentials = getCredentials()

  if (credentials === false) {

    return { credentials }
  }

  const { userDBName, password } = credentials
  const { ok, userDBCloud } = await userLogin({
    getPouchDB,
    userDBName,
    password,
  })

  if (!ok) {

    return { ok }
  }
  const doc = await userDBCloud.get('data')
  const userData = pick('points,randomFlag,textToSpeechFlag', doc)

  return {
    ...userData,
    userDBCloud,
    logged: true,
  }
}
