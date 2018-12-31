const { delay } = require('rambdax')
const { initPuppeteer, attach } = require('init-puppeteer')

const URL = 'http://localhost:8080/write-sentence?id=you-ready-new-something'

test('', async () => {
  const { browser, page } = await initPuppeteer({
    headless : false,
    url      : URL,
  })
  // Const keyboard = async keyboardInput => {
  //   For (const char of keyboardInput.split('')){
  //     Await delay(400)
  //     Await page.keyboard.down(char)
  //   }
  // }
  const _ = attach(page)
  await _.keypressText('When.du.bist.f o o')
  const numberDivs = await _.$$('div', els => els.length)
  expect(numberDivs).toBeGreaterThan(3)

  await browser.close()
  await delay(2000)
})
