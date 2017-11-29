import { initPuppeteer } from 'init-puppeteer'
import { delay } from 'rambdax'

test('', async () => {
  const { browser, page } = await initPuppeteer({
    headless: false,
    url: 'https://ilearnsmarter.com/',
  })

  await delay(3000)
  await browser.close()
  expect(
    true,
  ).toBeTruthy()
})
