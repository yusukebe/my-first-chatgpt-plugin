import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { cors } from 'hono/cors'

import { getPluginJSON } from './well-known-ai-plugin'
import { getOpenAPISchema } from './openapi'

const app = new Hono()

app.use('*', cors())

app.get('/.well-known/ai-plugin.json', (c) => c.json(getPluginJSON(c.req.raw)))

app.get('/openapi.json', (c) => c.json(getOpenAPISchema(c.req.raw)))

app.use(
  '/logo.png',
  serveStatic({
    path: './logo.png'
  })
)

app.get('/time', (c) => {
  const now = new Date()
  const year = now.getUTCFullYear()
  const month = String(now.getUTCMonth() + 1).padStart(2, '0')
  const day = String(now.getUTCDate()).padStart(2, '0')
  const hours = String(now.getUTCHours()).padStart(2, '0')
  const minutes = String(now.getUTCMinutes()).padStart(2, '0')
  const seconds = String(now.getUTCSeconds()).padStart(2, '0')
  return c.json({
    now: `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  })
})

export default app
