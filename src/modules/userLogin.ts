export async function userLogin({ getPouchDB, userDBName, password }): Promise<any> {
  const PouchDB: Pouch = getPouchDB()
  const url = `${process.env.COUCH_URL}/${userDBName}`

  const userDBCloud: any = new PouchDB(url, { skip_setup: true })
  const { ok } = await userDBCloud.login(userDBName, password)

  return { ok, userDBCloud }
}
