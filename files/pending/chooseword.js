
  // Const getFirstChoice = () => $('.chooseword--question div', 'result = el.textContent')

  // // Go to app's address
  // Await dom.click('#toggle-navigation')
  // Await dom.click('.navigation__item--third')
  const currentURL = await _.page.evaluate(() => window.location.href)
  // Expect(currentURL).toEqual(URL)

  // // wait for PouchDB
  // Await delay(5000)

  // // Expect to see three choices
  // Const numberChoices = await $$('.chooseword--question div', 'result = els.length')
  // Expect(numberChoices).toEqual(3)

  // Const firstChoice = await getFirstChoice()
  // Await page.keyboard.press('ArrowRight', { delay: 500 })
  // Await page.keyboard.press('ArrowRight', { delay: 500 })
  // Const firstChoiceAfter = await getFirstChoice()

  // // Expect first choice to be different after keypress
  // Console.warn(firstChoice, firstChoiceAfter)
  // Expect(firstChoiceAfter).not.toEqual(firstChoice)
