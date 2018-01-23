import PouchDB from 'pouchdb'
import PouchAuth from 'pouchdb-authentication'

PouchDB.plugin(PouchAuth)

export const getPouchDB = () => PouchDB
