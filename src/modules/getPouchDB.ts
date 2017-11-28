import * as PouchDBLib from 'pouchdb'
const PouchDB: Pouch = (PouchDBLib as any).default

PouchDB.plugin(require('pouchdb-authentication'))

export const getPouchDB = () => PouchDB
