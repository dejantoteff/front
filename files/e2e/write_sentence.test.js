const { delay } = require('rambdax')
const { initPuppeteer, attach } = require('init-puppeteer')

const URL = 'http://localhost:8080/write-sentence?id=you-ready-new-something'

test('', async () => {
  const { browser, page } = await initPuppeteer({
    headless : false,
    url      : URL,
  })
  const keyboard = async keyboardInput => {
    for (const char of keyboardInput.split('')){
      await delay(400)
      await page.keyboard.down(char)
    }
  }
  const _ = attach(page)
  await keyboard('When.du.bist.f o o')
  const numberDivs = await _.$$('div', els => els.length)
  expect(numberDivs).toBeGreaterThan(3)

  await browser.close()
  await delay(2000)
})
