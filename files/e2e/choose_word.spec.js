const { initPuppeteer } = require('init-puppeteer')
const { delay } = require('rambdax')

// const URL = 'http://localhost:8080'
const URL = 'https://ilearnsmarter.com'

test('', async () => {
  const { browser, page } = await initPuppeteer({
    headless: false,
    url: URL,
  })
  // const getFirstChoice = () => $('.chooseword--question div', 'result = el.textContent')

  // // Go to app's address
  // await dom.click('#toggle-navigation')
  // await dom.click('.navigation__item--third')
  const currentURL = await page.evaluate(() => window.location.href)
  expect(currentURL).toEqual(`${URL}/choose-word`)

  // // wait for PouchDB
  // await delay(5000)

  // // Expect to see three choices
  // const numberChoices = await $$('.chooseword--question div', 'result = els.length')
  // expect(numberChoices).toEqual(3)

  // const firstChoice = await getFirstChoice()
  // await page.keyboard.press('ArrowRight', { delay: 500 })
  // await page.keyboard.press('ArrowRight', { delay: 500 })
  // const firstChoiceAfter = await getFirstChoice()

  // // Expect first choice to be different after keypress
  // console.warn(firstChoice, firstChoiceAfter)
  // expect(firstChoiceAfter).not.toEqual(firstChoice)

  await browser.close()
  await delay(2000)
})
