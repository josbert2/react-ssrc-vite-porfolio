// server.js (CommonJS o sin top-level await)

// Imports
import fs from 'node:fs/promises'
import express from 'express'
import path from 'node:path'

const isProduction = process.env.NODE_ENV === 'production'
let templateHtml = ''  // lo cargaremos luego
let vite

const app = express()

// En vez de "await" en top-level, hazlo en una función de inicialización
async function initServer() {
  if (isProduction) {
    templateHtml = await fs.readFile(path.join(process.cwd(), 'dist/client/index.html'), 'utf-8')
    const compression = (await import('compression')).default
    const sirv = (await import('sirv')).default
    app.use(compression())
    app.use(sirv(path.join(process.cwd(), 'dist/client')))
  } else {
    const { createServer } = await import('vite')
    vite = await createServer({
      server: { middlewareMode: true },
      appType: 'custom'
    })
    app.use(vite.middlewares)
  }
}

// Handler SSR
app.use('*', async (req, res) => {
  try {
    // Cada vez que alguien entra, confirmamos si ya inicializamos (podrías usar una variable booleana para “init done”)
    if ((!vite && !templateHtml) /* o tu propia condición */) {
      await initServer()
    }

    // Lógica de render
    let template
    let render
    if (!isProduction) {
      // Lee y transforma el index.html fresco
      template = await fs.readFile('./index.html', 'utf-8')
      template = await vite.transformIndexHtml(req.url, template)
      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
    } else {
      template = templateHtml
      render = (await import('./dist/server/entry-server.js')).render
    }

    const { html, head } = await render(req.url)
    const finalHtml = template
      .replace('<!--app-head-->', head ?? '')
      .replace('<!--app-html-->', html ?? '')

    res.status(200).set({ 'Content-Type': 'text/html' }).send(finalHtml)
  } catch (err) {
    vite?.ssrFixStacktrace(err)
    console.error(err)
    res.status(500).send(err.toString())
  }
})

export default app
