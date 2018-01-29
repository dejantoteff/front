import { initPuppeteer } from 'init-puppeteer'
import { delay } from 'rambdax'
import { DELAY, SHORT_DELAY } from '../constants'

const URL = 'http://localhost:8080'

function doubleDollar(page) {

  return async function(selectorRaw, fnRaw) {
    const evaluated = await page.evaluate((selector, fn) => {
      let result
      const els = Array.from(document.querySelectorAll(selector))
      eval(fn)
      return result
    }, selectorRaw, fnRaw)

    return evaluated
  }
}

function domFn(page) {
  const click = async (selector: string): Promise<boolean> => {
    const el = await page.$(selector)
    if (el === null) {
      return false
    }
    await el.click()
    await el.dispose()
    await delay(DELAY)
    return true

  }

  return { click }
}

test('', async () => {
  const { browser, page } = await initPuppeteer({
    headless: false,
    url: URL,
  })

  const dom = domFn(page)
  const $$ = doubleDollar(page)

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
