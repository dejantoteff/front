export const initPouchDB: InitPouch = PouchDB => {
  console.log('work')

  const DB = 'db'
  const url = `${process.env.COUCH_URL}/${DB}`
  const dbLocal = new PouchDB(DB, { skip_setup: true })
  const dbCloud: any = new PouchDB(url, { skip_setup: true })

  return {
    dbCloud: dbCloud,
    dbLocal: dbLocal,
    dbName: DB,
    dbURL: url,
  }
}
