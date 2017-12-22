import { initPuppeteer } from 'init-puppeteer'
import { delay } from 'rambdax'
import { SHORT_DELAY, DELAY } from '../constants'

const URL = 'http://localhost:8080'

test('', async () => {
  const { browser, page } = await initPuppeteer({
    headless: false,
    url: URL,
  })

  const logo = await page.$('#toggle-navigation')
  await logo.click()
  await logo.dispose()
  await delay(DELAY)
  
  const el = await page.$('.navigation__item--third')
  await el.click()
  await el.dispose()
  await delay(DELAY)
  
  const currentURL = await page.evaluate(()=> window.location.href)
  await browser.close()
  
  expect(
    currentURL,
  ).toEqual(`${URL}/choose-word`)
})

