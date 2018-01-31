import { delay } from 'rambdax'

export async function getUserData() {
  await delay(11)
  return 'foo'
}
