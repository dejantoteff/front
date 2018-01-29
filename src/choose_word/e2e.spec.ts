import { dollar, domFn, doubleDollar } from 'client-helpers'
import { initPuppeteer } from 'init-puppeteer'
import { delay } from 'rambdax'
import { DELAY, SHORT_DELAY } from '../constants'

const URL = 'http://localhost:8080'

test('', async () => {
  const { browser, page } = await initPuppeteer({
    headless: false,
    url: URL,
  })

  const dom = domFn(page)
  const $$ = doubleDollar(page)
  const $ = dollar(page)

  await dom.click('#toggle-navigation')
  await dom.click('.navigation__item--third')

  const currentURL = await page.evaluate(() => window.location.href)

  await delay(5000)
  const numberChoices = await $$('.chooseword--question div', 'result = els.length')
  await browser.close()
  console.warn(numberChoices)

  expect(
    numberChoices,
  ).toEqual(3)

  expect(
    currentURL,
  ).toEqual(`${URL}/choose-word`)
})
