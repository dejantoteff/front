/**
 * Following example HTML5 markup at https://gist.github.com/MilanAryal/ee861d7a065cc05868d9
 */
const {resolve} = require('path')
const {readFileSync} = require('fs')
const {pluck, prop} = require('rambdax')

const SITE_TITLE = 'I Learn Smarter | English German Bulgarian Learning Apps'
const SITE_DESCRIPTION = 'Language educational free web applications'

const dbLocation = `${__dirname}/db.json`
const rows = JSON.parse(readFileSync(dbLocation).toString()).rows
const dbRaw = pluck('doc', rows)
const db = dbRaw.filter(prop('imageSrc'))

void function main(){
  let a = parseSingleInstance(db[0])
  let c
}()

function parseSingleInstance(dbInstance){

}

function head(dbInstance){

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${dbInstance.enPart}</title>
  
      <link rel="stylesheet" href="/seo.css">
  
    </head>`
}

function bodyStart(dbInstance){

  return `<body itemscope itemtype="http://schema.org/WebPage">

  <header class="site-header" role="banner" itemscope itemtype="http://schema.org/WPHeader">
    <div class="wrap">
      <hgroup class="title-area">
        <h1 class="site-title" itemprop="name">
          ${SITE_TITLE}
        </h1>
        <h2 class="site-description" itemprop="description">
          ${SITE_DESCRIPTION}
        </h2>
      </hgroup>
    </div>
  </header>`
}


/**
 * link to all apps, to contact
 */
function navigation(){

  return `
  <nav 
    class="site-navbar" 
    role="navigation" 
    itemscope 
    itemtype="http://schema.org/SiteNavigationElement"
  >
  <div class="wrap">
    <ul class="site-navbar-nav">
      <li>
        <a 
          itemprop="url" 
          href="${URL}"
        >
          <span itemprop="name">Home</span>
        </a>
      </li>
      <li>
        <a 
          itemprop="url" 
          href="${URL}/about"
        >
          <span itemprop="name">About</span>
        </a>
      </li>
    </ul>
  </div>
</nav>`
}

function createRelated(dbInstance, label){

  const focusWord = dbInstance[`${label}Word`]
  const related = dbInstance[`${label}Related`].join(',')

  return `
  <p class='text'>
    Related words to "${focusWord}": ${related}
  </p>
  `
}

function main(dbInstance){
  const bgPart = dbInstance.bgPart ?
    `<p class='text'>Bulgarian: ${dbInstance.bgPart}</p>` :
    ''

  const bgWord = dbInstance.bgWord ?
    `<p class='text'>Bulgarian word on focus: ${dbInstance.bgWord}</p>` :
    ''

  const enRelated = dbInstance.enRelated ?
    createRelated(dbInstance, 'en') : 
    ''

  const deRelated = dbInstance.deRelated ?
    createRelated(dbInstance, 'de') : 
    ''

  const bgRelated = dbInstance.bgRelated ?
    createRelated(dbInstance, 'bg') : 
    ''

  return `
    <main class="site-content" role="main" itemscope itemprop="mainContentOfPage">

    <article class="post" itemscope itemtype="http://schema.org/Article">
      <header class="post-header">
        <h3 class="post-title" itemprop="name headline">
          <a href="${URL}/${dbInstance._id}">
            English: ${dbInstance.enPart}
          </a>
        </h3>
      </header>

      <div class="post-content" itemprop="articleBody">
        <p class='text'>
          German: ${dbInstance.dePart}
        </p>
        ${bgPart}
        <p class='text'>
          English word on focus: ${dbInstance.enWord}
        </p>
        ${enRelated}
        <p class='text'>
          German word on focus: ${dbInstance.deWord}
        </p>
        ${deRelated}
        ${bgWord}
        ${bgRelated}
        <hr />
        <div class='image'>
          <img 
            alt="${dbInstance.altTag}"
            src="${dbInstance.imageSrc}"
          />  
        </div>
      </div>
    </main>  
  </body>  
</html>  
`
}