const { initPuppeteer, attach } = require('init-puppeteer')
const { delay } = require('rambdax')

// const URL = 'http://localhost:8080'
const URL = 'https://ilearnsmarter.com'

test('', async () => {
  const { browser, page } = await initPuppeteer({
    headless: false,
    url: URL,
  })
  const _ = attach(page)
  const numberDivs = await _.$$('div', els => els.length)
  console.log({numberDivs})
  expect(numberDivs).toBeGreaterThan(3)
  console.log(Object.keys(_));
  
  // const getFirstChoice = () => $('.chooseword--question div', 'result = el.textContent')

  // // Go to app's address
  // await dom.click('#toggle-navigation')
  // await dom.click('.navigation__item--third')
  const currentURL = await _.page.evaluate(() => window.location.href)
  console.log({currentURL})
  // expect(currentURL).toEqual(URL)

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
