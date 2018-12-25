/**
 * Following example HTML5 markup at
 * https://gist.github.com/MilanAryal/ee861d7a065cc05868d9
 */
const { emptyDirSync, copyFileSync } = require('fs-extra')
const { kebabCase } = require('string-fn')
const { minify } = require('html-minifier')
const { pluck, prop, take } = require('rambdax')
const { readFileSync, writeFileSync } = require('fs')

const ID_HOLDER = `${ __dirname }/_helpers/idHolder.js`
const SITE_TITLE =
  'I Learn Smarter | English-German-Bulgarian Learning Apps'
const SITE_DESCRIPTION =
  'Free web applications for educational purposes'
const URL = 'https://ilearnsmarter.com'
const CSS = `${__dirname}/seo.css`
const CSS_OUTPUT = `${ __dirname }/seo/seo.css`
const dbLocation = `${ __dirname }/db.json`
const rows = JSON.parse(readFileSync(dbLocation).toString()).rows
const dbRaw = pluck('doc', rows)
const db = dbRaw.filter(prop('imageSrc'))

emptyDirSync(`${ __dirname }/seo`)

void (function seo(){
  const idHolder = take(10, db).map(_ => {
    const address = kebabCase(_.altTag)
    const content = parseSingleInstance(_)
    const destination = `${ __dirname }/seo/${ address }.html`
    writeFileSync(destination, content)

    return `${ address }.html`
  })

  const idHolderContent = `exports.idHolder = ${ JSON.stringify(
    idHolder
  ) }`
  writeFileSync(ID_HOLDER, idHolderContent)
  copyFileSync(CSS, CSS_OUTPUT)
})()

function parseSingleInstance(_){
  const html = `${ head(_) }${ bodyStart(_) }${ navigation(_) }${ main(
    _
  ) }`

  return minify(html, {
    trimCustomFragments   : true,
    removeAttributeQuotes : true,
  })
}

function head(dbInstance){
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${ dbInstance.enPart } | I Learn Smarter</title>  
    <link rel="stylesheet" href="seo.css">
  </head>`
}

function bodyStart(){
  return `<body itemscope itemtype="http://schema.org/WebPage">

  <header class="site-header" role="banner" itemscope itemtype="http://schema.org/WPHeader">
    <div class="wrap">
      <hgroup class="title-area">
        <h1 class="site-title" itemprop="name">
          ${ SITE_TITLE }
        </h1>
        <h2 class="site-description" itemprop="description">
          ${ SITE_DESCRIPTION }
        </h2>
      </hgroup>
    </div>
  </header>`
}

/**
 * Link to all apps, to contact
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
          href="${ URL }"
        >
          <span itemprop="name">Home</span>
        </a>
      </li>
    </ul>
  </div>
</nav>`
}

function createRelated(dbInstance, label){
  const focusWord = dbInstance[ `${ label }Word` ]
  const related = dbInstance[ `${ label }Related` ].join(',')

  return `
  <p class="text ${ label }related">
    Related words for "${ focusWord }": ${ related }
  </p>
  `
}

function main(dbInstance){
  const bgPart = dbInstance.bgPart ?
    `<p class="text bgpart">Bulgarian translation: ${
      dbInstance.bgPart
    }</p>` :
    ''

  const bgWord = dbInstance.bgWord ?
    `<p class="text bgword">Bulgarian word on focus: ${
      dbInstance.bgWord
    }</p>` :
    ''

  const enRelated =
    dbInstance.enRelated && dbInstance.enRelated.length > 0 ?
      createRelated(dbInstance, 'en') :
      ''

  const deRelated =
    dbInstance.deRelated && dbInstance.deRelated.length > 0 ?
      createRelated(dbInstance, 'de') :
      ''

  const bgRelated =
    dbInstance.bgRelated && dbInstance.bgRelated.length > 0 ?
      createRelated(dbInstance, 'bg') :
      ''

  return `
    <main class="site-content" role="main" itemscope itemprop="mainContentOfPage">

    <article class="post" itemscope itemtype="http://schema.org/Article">
      <div class="post-content" itemprop="articleBody">
        <p class="text depart">
          German translation: ${ dbInstance.dePart }
        </p>
        ${ bgPart }
        <p class="text enword">
          English word on focus: ${ dbInstance.enWord }
        </p>
        ${ enRelated }
        <p class="text deword">
          German word on focus: ${ dbInstance.deWord }
        </p>
        ${ deRelated }
        ${ bgWord }
        ${ bgRelated }
        <hr />
        <div class="image">
          <img 
            alt="${ dbInstance.altTag }"
            src="${ dbInstance.imageSrc }"
          />  
        </div>
      </div>
    </main>  
  </body>  
</html>  
`
}
