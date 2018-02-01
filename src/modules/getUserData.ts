import { pick } from 'rambdax'
import { getCredentials } from '../user/helpers/getCredentials'
import { userLogin } from './userLogin'

export async function getUserData(getPouchDB) {
  const credentials = getCredentials()

  if (credentials === false) {

    return { forRootReducer: {} }
  }

  const { userDBName, password } = credentials
  const { ok, userDBCloud } = await userLogin({
    getPouchDB,
    userDBName,
    password,
  })

  if (!ok) {

    return { forRootReducer: {} }
  }
  const userDoc = await userDBCloud.get('data')
  const picked = pick('points,randomFlag,textToSpeechFlag', userDoc)

  const forRootReducer = {
    ...picked,
    userDBCloud,
    logged: true,
  }

  return {
    forRootReducer,
    userDoc,
  }
}
