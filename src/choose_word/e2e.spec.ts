import { initPuppeteer } from 'init-puppeteer'
import { delay } from 'rambdax'
import { SHORT_DELAY } from '../constants'

test('', async () => {
  const { browser } = await initPuppeteer({
    headless: false,
    url: 'http://localhost:8080',
    // url: 'https://ilearnsmarter.com/',
  })

  await delay(SHORT_DELAY)
  await browser.close()
  expect(
    true,
  ).toBeTruthy()
})

