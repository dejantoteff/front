require('env')('special')

const { writeJsonSync } = require('fs-extra')
const axios = require('axios')

const password = process.env.PASSWORD
const urlBase = `https://admin:${password}@${process.env.COUCH_URL_BASE}`

const url = `${urlBase}/db/_all_docs?include_docs=true`

void async function (){
  try {
    const {data} = await axios.get(url)
    
    writeJsonSync(`${__dirname}/db.json`, {rows: data.rows})
  } catch (e) {
    console.log(e)
  }
}()