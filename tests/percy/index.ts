import { percySnapshot } from '@percy/puppeteer'
import os from 'os'
import puppeteer from 'puppeteer'

interface Page {
  name: string,
  path: string
}

describe('Percy', () => {
  const PORT = process.env.PORT || 6060
  const BASE_URL = `http://localhost:${PORT}`
  const platform = os.platform()
  const args = [
    '-–no-sandbox',
    '-–disable-setuid-sandbox',
    '--disable-backgrounding-occluded-windows',
    '--disable-ipc-flooding-protection',
    '--disable-renderer-backgrounding'
  ]
  const pages: Page[] = [
    { name: 'Color Palette', path: 'Styleguide/Color%20Palette' },
    { name: 'SButton', path: 'Components/SButton' },
    { name: 'STextButton', path: 'Components/STextButton' },
    { name: 'SGradientBorderButton', path: 'Components/SGradientBorderButton' },
    { name: 'SText', path: 'Components/SText' },
    { name: 'SMessage', path: 'Components/SMessage' },
    { name: 'SIcon', path: 'Components/SIcon' }
    // { name: 'SScrollbar', path: 'Componens/SScrollbar' },
    // { name: 'SModal', path: 'Componens/SModal' }, // both gives me a 404, I need to find out why
  ]
  let page: puppeteer.Page
  let browser: puppeteer.Browser

  beforeAll(async () => {
    jest.setTimeout(1000 * 60 * 1)
    browser = await puppeteer.launch({
      headless: process.env.HEADLESS === 'true',
      timeout: 10000,
      defaultViewport: {
        width: 1440,
        height: 10000
      },
      args: /^win/.test(platform) ? [...args] : [...args, '--single-process']
    })
    page = await browser.newPage()
    page.setBypassCSP(true)
    await page.goto(`${BASE_URL}`)
  })

  afterAll(() => {
    browser.close()
  })

  it(`should take ${pages.length} screenshots`, async () => {
    expect.assertions(1)
    let i = 0
    for (const p of pages) {
      await page.goto(`${BASE_URL}/#!/${p.path}`)
      await page.waitFor(1000)
      if (p.name === 'SModal') {
        await page.click('#percy-open-btn')
      }
      await percySnapshot(page, p.name)
      if (p.name === 'SModal') {
        await page.click('#close-modal-btn')
      }
      ++i
    }
    expect(i).toEqual(pages.length)
  })
})
