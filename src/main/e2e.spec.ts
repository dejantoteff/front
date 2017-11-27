import { initPuppeteer, waitForNetwork } from 'init-puppeteer'
import {
  InputPuppeteer,
} from 'init-puppeteer/typings'
import {
  delay,
} from 'rambdax'

const getClass = () => {
  const elements: any[] = Array.from(document.querySelectorAll('#react-container div'))

  return elements[elements.length - 1].classList.value
}

const clickButton = () => {
  document.querySelector('button').click()
}

const initPuppeteerWrap = page => {
  return {
    $: async ({selector, property}) => {
      return page.evaluate(() =>{
        const element: any = document.querySelector(selector)

        return element[property]
      })
    },
    click: async (selector: string) => {
      console.log(selector);
      
      await page.evaluate(selectorValue =>{
        const el: HTMLElement = document.querySelector(selectorValue) as HTMLElement
        el.click()
      }, selector)
      await delay(100)

      return
    }
  }
}

test('', async () => {
  const settings = {
    headless: true,
    url: 'http://localhost:8080/',
  }

  var { browser: browserModule, page } = await initPuppeteer(settings)
  const browser = initPuppeteerWrap(page)
  const initClass = await page.evaluate(
    getClass,
  )

  expect(
    initClass,
  ).toEqual('x__passive')

  await browser.click('button')
  const afterClickClass = await page.evaluate(
    getClass,
  )

  expect(
    afterClickClass,
  ).toEqual('x__active')

  await browserModule.close()
})
