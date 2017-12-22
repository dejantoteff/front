import { initPuppeteer } from 'init-puppeteer'
import { delay } from 'rambdax'
import { SHORT_DELAY, DELAY } from '../constants'

const URL = 'http://localhost:8080'

function domFn(page){
  const click = async (selector: string): Promise<boolean> =>{
    const el = await page.$(selector)
    if(el === null){
      return false
    }
    await el.click()
    await el.dispose()
    await delay(DELAY)
    return true
    
  }

  return {click}
}

test('', async () => {
  const { browser, page } = await initPuppeteer({
    headless: false,
    url: URL,
  })

  const dom = domFn(page)

  await dom.click('#toggle-navigation')
  await dom.click('.navigation__item--third')
  
  const currentURL = await page.evaluate(()=> window.location.href)
  await browser.close()
  
  expect(
    currentURL,
  ).toEqual(`${URL}/choose-word`)
})

