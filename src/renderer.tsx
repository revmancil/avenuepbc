import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title, description, ogImage, canonicalPath }) => {
  const siteTitle = title ? `${title} | THE AVENUE - Avenue Progressive Baptist Church` : 'THE AVENUE | Avenue Progressive Baptist Church – South Dallas, TX'
  const metaDesc = description || 'Avenue Progressive Baptist Church in South Dallas, TX. Join us Sundays at 11:15 AM for worship. A Christ-centered community serving South Dallas since 1961.'
  const og = ogImage || 'https://avenuepbc.org/static/og-image.jpg'
  const canonical = `https://avenuepbc.org${canonicalPath || '/'}`

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{siteTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content="Baptist church South Dallas, church Dallas TX, African American Baptist church, Avenue Progressive Baptist Church, South Dallas church, church near Oak Cliff, Christian church Dallas" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Avenue Progressive Baptist Church" />

        {/* Canonical */}
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:image" content={og} />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content="THE AVENUE - Avenue Progressive Baptist Church" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:image" content={og} />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Church",
          "name": "Avenue Progressive Baptist Church",
          "alternateName": "THE AVENUE",
          "description": "A Christ-centered Baptist church in South Dallas, TX, serving the community since 1961.",
          "url": "https://avenuepbc.org",
          "logo": "https://avenuepbc.org/static/logo.png",
          "telephone": "(214) 421-0000",
          "email": "info@avenuepbc.org",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3745 Dildock Street",
            "addressLocality": "Dallas",
            "addressRegion": "TX",
            "postalCode": "75215",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 32.7459,
            "longitude": -96.7583
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "10:00",
              "closes": "13:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Wednesday",
              "opens": "18:30",
              "closes": "20:00"
            }
          ],
          "sameAs": [
            "https://www.youtube.com/@AvenuePBC",
            "https://www.facebook.com/AvenuePBC"
          ],
          "foundingDate": "1961-05-01",
          "hasMap": "https://www.google.com/maps/search/?api=1&query=3745+Dildock+Street+Dallas+TX+75215"
        }) }} />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/static/favicon.svg" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        {/* Icons */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" />

        {/* Tailwind */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  brand: {
                    navy:   '#1a2744',
                    gold:   '#c9a84c',
                    cream:  '#faf7f2',
                    dark:   '#0f1a2e',
                    light:  '#e8dcc8',
                  }
                },
                fontFamily: {
                  serif: ['Playfair Display', 'Georgia', 'serif'],
                  sans:  ['Inter', 'system-ui', 'sans-serif'],
                }
              }
            }
          }
        ` }} />

        <link href="/static/style.css" rel="stylesheet" />
      </head>
      <body class="font-sans bg-white text-gray-900 antialiased">
        {/* Skip to main content for accessibility */}
        <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-brand-gold text-white px-4 py-2 rounded z-50">Skip to main content</a>

        {/* Navigation */}
        <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent" role="navigation" aria-label="Main navigation">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
              {/* Logo */}
              <a href="/" class="flex items-center gap-3 group" aria-label="THE AVENUE - Home">
                <div class="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white font-serif font-bold text-lg shadow-md group-hover:scale-105 transition-transform">A</div>
                <div>
                  <div class="text-white font-serif font-bold text-lg leading-tight drop-shadow-md">THE AVENUE</div>
                  <div class="text-brand-gold text-xs font-medium tracking-widest uppercase drop-shadow-md">Est. 1961</div>
                </div>
              </a>

              {/* Desktop Nav */}
              <div class="hidden lg:flex items-center gap-1">
                <a href="/" class="nav-link text-white hover:text-brand-gold px-3 py-2 text-sm font-medium transition-colors drop-shadow">Home</a>
                <div class="relative group">
                  <button class="nav-link text-white hover:text-brand-gold px-3 py-2 text-sm font-medium transition-colors drop-shadow flex items-center gap-1">
                    About <i class="fas fa-chevron-down text-xs"></i>
                  </button>
                  <div class="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <a href="/about/history" class="block px-4 py-3 text-sm text-gray-700 hover:bg-brand-cream hover:text-brand-navy transition-colors">Our History</a>
                    <a href="/about/pastor" class="block px-4 py-3 text-sm text-gray-700 hover:bg-brand-cream hover:text-brand-navy transition-colors">Our Pastor</a>
                    <a href="/about/beliefs" class="block px-4 py-3 text-sm text-gray-700 hover:bg-brand-cream hover:text-brand-navy transition-colors">What We Believe</a>
                  </div>
                </div>
                <a href="/ministries" class="nav-link text-white hover:text-brand-gold px-3 py-2 text-sm font-medium transition-colors drop-shadow">Ministries</a>
                <a href="/events" class="nav-link text-white hover:text-brand-gold px-3 py-2 text-sm font-medium transition-colors drop-shadow">Events</a>
                <a href="/watch" class="nav-link text-white hover:text-brand-gold px-3 py-2 text-sm font-medium transition-colors drop-shadow">Watch</a>
                <a href="/visit" class="nav-link text-white hover:text-brand-gold px-3 py-2 text-sm font-medium transition-colors drop-shadow">Visit</a>
                <a href="/contact" class="nav-link text-white hover:text-brand-gold px-3 py-2 text-sm font-medium transition-colors drop-shadow">Contact</a>
              </div>

              {/* CTA Buttons */}
              <div class="hidden lg:flex items-center gap-3">
                <a href="/give" class="text-brand-gold border border-brand-gold hover:bg-brand-gold hover:text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200">
                  <i class="fas fa-heart mr-1"></i> Give
                </a>
                <a href="/visit" class="bg-brand-gold text-white hover:bg-yellow-600 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-md">
                  Plan a Visit
                </a>
              </div>

              {/* Mobile hamburger */}
              <button id="mobile-menu-btn" class="lg:hidden text-white p-2 focus:outline-none" aria-label="Open menu" aria-expanded="false">
                <i class="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div id="mobile-menu" class="lg:hidden hidden bg-brand-navy/98 backdrop-blur border-t border-white/10">
            <div class="px-4 py-4 space-y-1">
              <a href="/" class="block text-white hover:text-brand-gold py-2 text-sm font-medium">Home</a>
              <a href="/about/history" class="block text-white hover:text-brand-gold py-2 text-sm font-medium pl-4">Our History</a>
              <a href="/about/pastor" class="block text-white hover:text-brand-gold py-2 text-sm font-medium pl-4">Our Pastor</a>
              <a href="/about/beliefs" class="block text-white hover:text-brand-gold py-2 text-sm font-medium pl-4">What We Believe</a>
              <a href="/ministries" class="block text-white hover:text-brand-gold py-2 text-sm font-medium">Ministries</a>
              <a href="/events" class="block text-white hover:text-brand-gold py-2 text-sm font-medium">Events</a>
              <a href="/watch" class="block text-white hover:text-brand-gold py-2 text-sm font-medium">Watch</a>
              <a href="/visit" class="block text-white hover:text-brand-gold py-2 text-sm font-medium">Visit</a>
              <a href="/contact" class="block text-white hover:text-brand-gold py-2 text-sm font-medium">Contact</a>
              <div class="flex gap-3 pt-3">
                <a href="/give" class="flex-1 text-center bg-transparent border border-brand-gold text-brand-gold py-2 rounded-full text-sm font-semibold">Give</a>
                <a href="/visit" class="flex-1 text-center bg-brand-gold text-white py-2 rounded-full text-sm font-semibold">Plan a Visit</a>
              </div>
            </div>
          </div>
        </nav>

        <main id="main-content">
          {children}
        </main>

        {/* Footer */}
        <footer class="bg-brand-dark text-white" role="contentinfo">
          {/* Main Footer */}
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand Column */}
              <div class="lg:col-span-1">
                <div class="flex items-center gap-3 mb-5">
                  <div class="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white font-serif font-bold text-lg">A</div>
                  <div>
                    <div class="font-serif font-bold text-lg leading-tight">THE AVENUE</div>
                    <div class="text-brand-gold text-xs font-medium tracking-widest uppercase">Est. 1961</div>
                  </div>
                </div>
                <p class="text-gray-400 text-sm leading-relaxed mb-5">
                  A Christ-centered family in South Dallas, rooted in faith, love, and service since 1961.
                </p>
                <div class="flex gap-3">
                  <a href="https://www.facebook.com/AvenuePBC" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold flex items-center justify-center transition-colors">
                    <i class="fab fa-facebook-f text-sm"></i>
                  </a>
                  <a href="https://www.youtube.com/@AvenuePBC" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold flex items-center justify-center transition-colors">
                    <i class="fab fa-youtube text-sm"></i>
                  </a>
                  <a href="https://www.instagram.com/avenuepbc" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold flex items-center justify-center transition-colors">
                    <i class="fab fa-instagram text-sm"></i>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 class="font-serif font-semibold text-brand-gold mb-5 text-lg">Quick Links</h3>
                <ul class="space-y-2">
                  {[
                    ['/', 'Home'],
                    ['/about/history', 'Our Story'],
                    ['/about/pastor', 'Our Pastor'],
                    ['/ministries', 'Ministries'],
                    ['/events', 'Events'],
                    ['/watch', 'Watch Online'],
                    ['/give', 'Give Online'],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} class="text-gray-400 hover:text-brand-gold text-sm transition-colors flex items-center gap-2">
                        <i class="fas fa-chevron-right text-xs text-brand-gold/50"></i> {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Times */}
              <div>
                <h3 class="font-serif font-semibold text-brand-gold mb-5 text-lg">Service Times</h3>
                <ul class="space-y-4">
                  <li>
                    <div class="text-white font-medium text-sm">Sunday School</div>
                    <div class="text-gray-400 text-sm">10:00 AM</div>
                  </li>
                  <li>
                    <div class="text-white font-medium text-sm">Sunday Worship</div>
                    <div class="text-gray-400 text-sm">11:15 AM</div>
                  </li>
                  <li>
                    <div class="text-white font-medium text-sm">Wednesday Prayer & Bible Study</div>
                    <div class="text-gray-400 text-sm">6:30 PM</div>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 class="font-serif font-semibold text-brand-gold mb-5 text-lg">Contact Us</h3>
                <ul class="space-y-4">
                  <li class="flex gap-3">
                    <i class="fas fa-map-marker-alt text-brand-gold mt-0.5 w-4 flex-shrink-0"></i>
                    <address class="text-gray-400 text-sm not-italic">
                      3745 Dildock Street<br />Dallas, TX 75215
                    </address>
                  </li>
                  <li class="flex gap-3">
                    <i class="fas fa-phone text-brand-gold mt-0.5 w-4 flex-shrink-0"></i>
                    <a href="tel:+12144210000" class="text-gray-400 hover:text-brand-gold text-sm transition-colors">(214) 421-0000</a>
                  </li>
                  <li class="flex gap-3">
                    <i class="fas fa-envelope text-brand-gold mt-0.5 w-4 flex-shrink-0"></i>
                    <a href="mailto:info@avenuepbc.org" class="text-gray-400 hover:text-brand-gold text-sm transition-colors">info@avenuepbc.org</a>
                  </li>
                </ul>
                <a href="/visit" class="inline-flex items-center gap-2 mt-6 bg-brand-gold hover:bg-yellow-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors">
                  <i class="fas fa-directions"></i> Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div class="border-t border-white/10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p class="text-gray-500 text-xs">© 2026 Avenue Progressive Baptist Church. All rights reserved.</p>
              <div class="flex gap-5">
                <a href="/privacy" class="text-gray-500 hover:text-brand-gold text-xs transition-colors">Privacy Policy</a>
                <a href="/sitemap.xml" class="text-gray-500 hover:text-brand-gold text-xs transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Back to top */}
        <button id="back-to-top" class="fixed bottom-6 right-6 w-11 h-11 bg-brand-gold hover:bg-yellow-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 opacity-0 translate-y-4 z-40" aria-label="Back to top">
          <i class="fas fa-chevron-up"></i>
        </button>

        <script dangerouslySetInnerHTML={{ __html: `
          // Navbar scroll behavior
          const navbar = document.getElementById('navbar');
          const backToTop = document.getElementById('back-to-top');
          let lastScroll = 0;
          window.addEventListener('scroll', () => {
            const y = window.scrollY;
            if (y > 80) {
              navbar.classList.add('bg-brand-dark/95', 'backdrop-blur-md', 'shadow-lg');
              navbar.classList.remove('bg-transparent');
            } else {
              navbar.classList.remove('bg-brand-dark/95', 'backdrop-blur-md', 'shadow-lg');
              navbar.classList.add('bg-transparent');
            }
            if (y > 400) {
              backToTop.classList.remove('opacity-0', 'translate-y-4');
              backToTop.classList.add('opacity-100', 'translate-y-0');
            } else {
              backToTop.classList.add('opacity-0', 'translate-y-4');
              backToTop.classList.remove('opacity-100', 'translate-y-0');
            }
          });
          backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

          // Mobile menu
          const btn = document.getElementById('mobile-menu-btn');
          const menu = document.getElementById('mobile-menu');
          btn.addEventListener('click', () => {
            const isOpen = !menu.classList.contains('hidden');
            menu.classList.toggle('hidden');
            btn.setAttribute('aria-expanded', String(!isOpen));
            btn.innerHTML = isOpen ? '<i class="fas fa-bars text-xl"></i>' : '<i class="fas fa-times text-xl"></i>';
          });

          // Fade-in on scroll
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
              if (e.isIntersecting) {
                e.target.classList.add('animate-in');
                observer.unobserve(e.target);
              }
            });
          }, { threshold: 0.1 });
          document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
        ` }} />
      </body>
    </html>
  )
})
