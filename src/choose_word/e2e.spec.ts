import { initPuppeteer } from 'init-puppeteer'
import { delay } from 'rambdax'
import { SMALL_DELAY } from '../constants'

test('', async () => {
  const { browser } = await initPuppeteer({
    headless: false,
    url: 'https://ilearnsmarter.com/',
  })

  await delay(SMALL_DELAY)
  await browser.close()
  expect(
    true,
  ).toBeTruthy()
})
