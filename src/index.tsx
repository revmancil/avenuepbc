import { Hono } from 'hono'
import { renderer } from './renderer'
import { homePage } from './pages/home'
import { historyPage } from './pages/history'
import { pastorPage } from './pages/pastor'
import { beliefsPage } from './pages/beliefs'
import { ministriesPage } from './pages/ministries'
import { eventsPage } from './pages/events'
import { watchPage } from './pages/watch'
import { visitPage } from './pages/visit'
import { givePage } from './pages/give'
import { contactPage } from './pages/contact'
import { privacyPage } from './pages/privacy'
import { sitemapXml } from './pages/sitemap'

const app = new Hono()

app.use(renderer)

app.get('/', homePage)
app.get('/about/history', historyPage)
app.get('/about/pastor', pastorPage)
app.get('/about/beliefs', beliefsPage)
app.get('/ministries', ministriesPage)
app.get('/events', eventsPage)
app.get('/watch', watchPage)
app.get('/visit', visitPage)
app.get('/give', givePage)
app.get('/contact', contactPage)
app.get('/privacy', privacyPage)
app.get('/sitemap.xml', sitemapXml)

// POST for contact form
app.post('/contact', async (c) => {
  const body = await c.req.parseBody()
  // In production, send to email service
  return c.json({ success: true, message: 'Thank you! We will be in touch soon.' })
})

export default app
