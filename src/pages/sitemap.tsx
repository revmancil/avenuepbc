import type { Context } from 'hono'

export const sitemapXml = (c: Context) => {
  const baseUrl = 'https://avenuepbc.org'
  const pages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/about/history', priority: '0.8', changefreq: 'monthly' },
    { loc: '/about/pastor', priority: '0.8', changefreq: 'monthly' },
    { loc: '/about/beliefs', priority: '0.7', changefreq: 'monthly' },
    { loc: '/ministries', priority: '0.8', changefreq: 'monthly' },
    { loc: '/events', priority: '0.9', changefreq: 'weekly' },
    { loc: '/watch', priority: '0.9', changefreq: 'weekly' },
    { loc: '/visit', priority: '0.9', changefreq: 'monthly' },
    { loc: '/give', priority: '0.7', changefreq: 'monthly' },
    { loc: '/contact', priority: '0.7', changefreq: 'monthly' },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${baseUrl}${p.loc}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
