interface Input {
  getPouchDB: any
  password: string
  userDBName: string
}

export async function userLogin(input: Input): Promise<any> {
  const PouchDB = input.getPouchDB()
  const url = `${process.env.COUCH_URL}/${input.userDBName}`

  const userDBCloud: any = new PouchDB(url, { skip_setup: true })
  const { ok } = await userDBCloud.login(input.userDBName, input.password)

  return { ok, userDBCloud }
}
