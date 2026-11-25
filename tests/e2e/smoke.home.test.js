import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import path from 'node:path'
import { Builder, By, until } from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome.js'
import edge from 'selenium-webdriver/edge.js'

const BASE_URL = process.env.E2E_BASE_URL || 'http://localhost:5173'
const BROWSER = (process.env.E2E_BROWSER || 'chrome').toLowerCase()
const HEADLESS = process.env.E2E_HEADLESS !== 'false'
const TIMEOUT_MS = 15000

async function isServerReachable(url) {
  try {
    const res = await fetch(url)
    return res.ok
  } catch {
    return false
  }
}

async function waitForServer(url, timeoutMs = 20000) {
  const deadline = Date.now() + timeoutMs
  while (Date.now() < deadline) {
    if (await isServerReachable(url)) {
      return
    }
    await new Promise((resolve) => setTimeout(resolve, 400))
  }
  throw new Error(`Dev server tidak merespons di ${url} dalam ${timeoutMs}ms`)
}

function startLocalViteServer() {
  const viteBin = path.resolve('node_modules/vite/bin/vite.js')
  return spawn(process.execPath, [viteBin, '--port', '5173', '--strictPort'], {
    stdio: 'ignore',
    detached: false,
  })
}

async function createDriver() {
  if (BROWSER === 'edge') {
    const options = new edge.Options()
    if (HEADLESS) {
      options.addArguments('--headless=new', '--disable-gpu', '--window-size=1280,800')
    }
    return new Builder().forBrowser('MicrosoftEdge').setEdgeOptions(options).build()
  }

  const options = new chrome.Options()
  if (HEADLESS) {
    options.addArguments('--headless=new', '--disable-gpu', '--no-sandbox', '--window-size=1280,800')
  }
  return new Builder().forBrowser('chrome').setChromeOptions(options).build()
}

async function runSmokeTest() {
  let serverProcess = null
  let driver = null

  try {
    const alreadyRunning = await isServerReachable(BASE_URL)
    if (!alreadyRunning && !process.env.E2E_BASE_URL) {
      console.log(`[E2E] Server lokal belum berjalan, menyalakan Vite di ${BASE_URL}...`)
      serverProcess = startLocalViteServer()
      await waitForServer(BASE_URL)
    } else if (!alreadyRunning) {
      throw new Error(`Target URL ${BASE_URL} tidak dapat diakses`)
    }

    console.log(`[E2E] Membuka browser (${BROWSER}, headless=${HEADLESS})...`)
    driver = await createDriver()

    // Skenario TC-E2E-01: Halaman Home terbuka dan konten utama tampil
    await driver.get(`${BASE_URL}/`)

    const appRoot = await driver.wait(until.elementLocated(By.css('#app main')), TIMEOUT_MS)
    await driver.wait(until.elementIsVisible(appRoot), TIMEOUT_MS)

    const heading = await driver.wait(until.elementLocated(By.css('main h1, main h2')), TIMEOUT_MS)
    await driver.wait(until.elementIsVisible(heading), TIMEOUT_MS)

    const title = await driver.getTitle()
    const currentUrl = await driver.getCurrentUrl()
    const headingText = (await heading.getText()).trim()

    assert.ok(title.includes('Home') || title.includes('Team Portfolio'), `Judul halaman tidak sesuai: "${title}"`)
    assert.ok(currentUrl.startsWith(BASE_URL), `URL tidak sesuai: "${currentUrl}"`)
    assert.ok(headingText.length > 0, 'Heading halaman Home tidak boleh kosong')

    console.log(`[PASS] Smoke test "Home terbuka" berhasil`)
    console.log(`       URL     : ${currentUrl}`)
    console.log(`       Title   : ${title}`)
    console.log(`       Heading : ${headingText}`)
  } finally {
    if (driver) {
      await driver.quit()
    }
    if (serverProcess && !serverProcess.killed) {
      if (process.platform === 'win32') {
        spawn('taskkill', ['/pid', String(serverProcess.pid), '/f', '/t'], { stdio: 'ignore' })
      } else {
        serverProcess.kill('SIGTERM')
      }
    }
  }
}

runSmokeTest().catch((err) => {
  console.error('[FAIL] Smoke test gagal:', err.message)
  process.exitCode = 1
})
