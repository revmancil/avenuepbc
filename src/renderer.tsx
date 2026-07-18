import { jsxRenderer } from 'hono/jsx-renderer'

// ── Real Church Photos — served as local static files ──────
// All images live in public/static/photos/ and are served at /static/photos/*
const P = (f: string) => `/static/photos/${f}`

export const PHOTOS = {
  // Wide sanctuary — full congregation, best hero shot
  heroSanctuary:  P('heroSanctuary.jpg'),
  // Choir + congregation from front
  worshipFull:    P('worshipFull.jpg'),
  // Prayer over pastor (installation service)
  installation:   P('installation.jpg'),
  // Congregation seated – smiling / joyful
  congregation1:  P('congregation1.jpg'),
  congregation2:  P('congregation2.jpg'),
  congregation3:  P('congregation3.jpg'),
  congregation4:  P('congregation4.jpg'),
  congregation5:  P('congregation5.jpg'),
  congregation6:  P('congregation6.jpg'),
  congregation7:  P('congregation7.jpg'),
  // Friends / couples
  couple:         P('couple.jpg'),
  friendsGroup:   P('friendsGroup.jpg'),
  womenGroup:     P('womenGroup.jpg'),
  // Worship moments
  worshipPraise:  P('worshipPraise.jpg'),
  worshipSinger:  P('worshipSinger.jpg'),
  worshipPrayer:  P('worshipPrayer.jpg'),
  // Music
  pianist1:       P('pianist1.jpg'),
  pianist2:       P('pianist2.jpg'),
  // Bible study / props
  bibleStudy:     P('heroSanctuary.jpg'),
  bible:          P('bible.jpg'),
  // Ushers & greeters
  ushers:         P('ushers.jpg'),
  greeters:       P('greeters.jpg'),
  // Pastor Carroll — headshot (glasses, gold bowtie)
  pastorHeadshot: P('pastorHeadshot.jpg'),
  // Pastor Carroll — doctoral robes at pulpit
  pastorRobes:    P('pastorRobes.jpg'),
  // Logo
  logo:           '/static/logo.png',
}

export const renderer = jsxRenderer(({ children, title, description, ogImage, canonicalPath }) => {
  const siteTitle = title
    ? `${title} | THE AVENUE – Avenue Progressive Baptist Church`
    : 'THE AVENUE | Avenue Progressive Baptist Church – South Dallas, TX'
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
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:image" content={og} />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content="THE AVENUE – Avenue Progressive Baptist Church" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:image" content={og} />

        {/* Schema.org */}
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
          "geo": { "@type": "GeoCoordinates", "latitude": 32.7459, "longitude": -96.7583 },
          "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "10:00", "closes": "13:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "18:30", "closes": "20:00" }
          ],
          "sameAs": ["https://www.youtube.com/@AvenuePBC", "https://www.facebook.com/AvenuePBC"],
          "foundingDate": "1961-05-01",
          "hasMap": "https://www.google.com/maps/search/?api=1&query=3745+Dildock+Street+Dallas+TX+75215"
        }) }} />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/static/logo.png" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        {/* Icons */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" />

        {/* Tailwind (utility classes still used in subpages) + brand color config */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  brand: {
                    maroon:  '#6b1a2a',
                    maroon2: '#8b1f33',
                    darkred: '#4a1018',
                    black:   '#111111',
                    charcoal:'#1e1e1e',
                    gold:    '#c9a84c',
                    gold2:   '#e0be6e',
                    cream:   '#fdf8f0',
                    light:   '#f5ede0',
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
      <body>
        {/* Accessibility skip link */}
        <a href="#main-content" class="sr-only">Skip to main content</a>

        {/* ── Navigation — Wheeler style ── */}
        <nav id="navbar" role="navigation" aria-label="Main navigation">
          <div class="nav-inner container" style="display:flex;align-items:center;justify-content:space-between;height:74px;">

            {/* Logo */}
            <a href="/" class="nav-logo" aria-label="THE AVENUE – Home">
              <img src="/static/logo.png" alt="THE AVENUE" class="nav-logo__img" />
              <span class="nav-logo__text">
                <span class="nav-logo__name">THE AVENUE</span>
                <span class="nav-logo__sub">Avenue Progressive Baptist Church</span>
              </span>
            </a>

            {/* Desktop links */}
            <div class="nav-desktop" role="menubar">
              <a href="/about/pastor" class="nav-link" role="menuitem">Our Pastor</a>
              <a href="/ministries" class="nav-link" role="menuitem">Ministries</a>
              <a href="/events" class="nav-link" role="menuitem">Events</a>
              <a href="/watch" class="nav-link" role="menuitem">Watch</a>
              <a href="/visit" class="nav-link" role="menuitem">Visit</a>
              <div class="nav-dropdown" role="menuitem" aria-haspopup="true">
                <button class="nav-link nav-link--btn" aria-expanded="false" aria-controls="nav-about-menu">
                  About <i class="fas fa-chevron-down" style="font-size:0.6rem;margin-left:3px;"></i>
                </button>
                <div class="nav-dropdown__menu" id="nav-about-menu" role="menu">
                  <a href="/about/history" class="nav-dropdown__item" role="menuitem">Our History</a>
                  <a href="/about/beliefs" class="nav-dropdown__item" role="menuitem">What We Believe</a>
                  <a href="/contact" class="nav-dropdown__item" role="menuitem">Contact</a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div class="nav-cta nav-desktop">
              <a href="/give" class="nav-give">Give</a>
              <a href="/visit" class="nav-visit btn btn-primary">Plan a Visit</a>
            </div>

            {/* Hamburger */}
            <button id="mobile-menu-btn" class="nav-hamburger" aria-label="Open menu" aria-expanded="false">
              <span></span><span></span><span></span>
            </button>
          </div>

          {/* Mobile drawer */}
          <div id="mobile-menu" class="nav-mobile" aria-hidden="true">
            <div class="nav-mobile__inner">
              <a href="/" class="nav-mobile__item">Home</a>
              <a href="/about/history" class="nav-mobile__item">Our History</a>
              <a href="/about/pastor" class="nav-mobile__item">Our Pastor</a>
              <a href="/about/beliefs" class="nav-mobile__item">What We Believe</a>
              <a href="/ministries" class="nav-mobile__item">Ministries</a>
              <a href="/events" class="nav-mobile__item">Events</a>
              <a href="/watch" class="nav-mobile__item">Watch Online</a>
              <a href="/visit" class="nav-mobile__item">Plan a Visit</a>
              <a href="/contact" class="nav-mobile__item">Contact</a>
              <div class="nav-mobile__actions">
                <a href="/give" class="btn btn-outline-white" style="flex:1;justify-content:center;">Give</a>
                <a href="/visit" class="btn btn-primary" style="flex:1;justify-content:center;">Plan a Visit</a>
              </div>
            </div>
          </div>
        </nav>

        <main id="main-content">{children}</main>

        {/* ── Footer — Wheeler 4-col dark ── */}
        <footer class="site-footer" role="contentinfo">
          <div class="container">
            <div class="footer-top">

              {/* Brand column */}
              <div class="footer-col footer-brand-col">
                <div class="footer-brand-name">THE AVENUE</div>
                <div class="footer-brand-sub">Avenue Progressive Baptist Church</div>
                <p class="footer-tagline">
                  A Christ-centered family rooted in<br />
                  faith, love, and service — South Dallas, TX.
                </p>
                <div class="footer-social">
                  <a href="https://www.facebook.com/AvenuePBC" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.youtube.com/@AvenuePBC" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a href="https://www.instagram.com/avenuepbc" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>

              {/* Quick links */}
              <div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about/history">Our History</a></li>
                  <li><a href="/about/pastor">Our Pastor</a></li>
                  <li><a href="/about/beliefs">What We Believe</a></li>
                  <li><a href="/ministries">Ministries</a></li>
                  <li><a href="/events">Events</a></li>
                  <li><a href="/watch">Watch Online</a></li>
                  <li><a href="/give">Give Online</a></li>
                </ul>
              </div>

              {/* Service times */}
              <div class="footer-col">
                <h4>Service Times</h4>
                <p style="margin-bottom:1.2rem;">
                  <strong style="color:#fff;font-size:0.875rem;">Sunday School</strong><br />
                  10:00 AM
                </p>
                <p style="margin-bottom:1.2rem;">
                  <strong style="color:#fff;font-size:0.875rem;">Sunday Worship</strong><br />
                  11:15 AM
                </p>
                <p>
                  <strong style="color:#fff;font-size:0.875rem;">Wed Prayer &amp; Bible Study</strong><br />
                  6:30 PM
                </p>
              </div>

              {/* Contact */}
              <div class="footer-col">
                <h4>Find Us</h4>
                <p style="margin-bottom:1rem;">
                  3745 Dildock Street<br />
                  Dallas, TX 75215
                </p>
                <p style="margin-bottom:0.5rem;">
                  <a href="tel:+12144210000">(214) 421-0000</a>
                </p>
                <p style="margin-bottom:1.5rem;">
                  <a href="mailto:info@avenuepbc.org">info@avenuepbc.org</a>
                </p>
                <a href="https://www.google.com/maps/search/?api=1&query=3745+Dildock+Street+Dallas+TX+75215"
                   target="_blank" rel="noopener noreferrer"
                   class="btn btn-outline-white"
                   style="padding:0.6rem 1.25rem;font-size:0.8rem;">
                  <i class="fas fa-map-marker-alt" style="margin-right:0.4rem;"></i> Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div class="footer-bottom">
            <div class="container" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
              <span>&copy; 2026 Avenue Progressive Baptist Church. All rights reserved.</span>
              <span style="display:flex;gap:1.5rem;">
                <a href="/privacy">Privacy Policy</a>
                <a href="/sitemap.xml">Sitemap</a>
              </span>
            </div>
          </div>
        </footer>

        {/* Back to top */}
        <button id="back-to-top" aria-label="Back to top">
          <i class="fas fa-chevron-up"></i>
        </button>

        <script dangerouslySetInnerHTML={{ __html: `
          /* ── Navbar scroll behavior ── */
          const navbar = document.getElementById('navbar');
          const backToTop = document.getElementById('back-to-top');

          window.addEventListener('scroll', () => {
            const y = window.scrollY;
            if (y > 60) {
              navbar.classList.add('scrolled');
            } else {
              navbar.classList.remove('scrolled');
            }
            if (y > 400) {
              backToTop.classList.add('visible');
            } else {
              backToTop.classList.remove('visible');
            }
          }, { passive: true });

          backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

          /* ── Mobile hamburger ── */
          const btn   = document.getElementById('mobile-menu-btn');
          const menu  = document.getElementById('mobile-menu');

          btn.addEventListener('click', () => {
            const isOpen = menu.classList.contains('open');
            menu.classList.toggle('open');
            menu.setAttribute('aria-hidden', String(isOpen));
            btn.setAttribute('aria-expanded', String(!isOpen));
            btn.classList.toggle('open');
          });

          /* Close mobile menu on link click */
          menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
              menu.classList.remove('open');
              menu.setAttribute('aria-hidden', 'true');
              btn.setAttribute('aria-expanded', 'false');
              btn.classList.remove('open');
            });
          });

          /* ── Scroll-triggered fade-ins ── */
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
              if (e.isIntersecting) {
                e.target.classList.add('animate-in');
                observer.unobserve(e.target);
              }
            });
          }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

          document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
        ` }} />
      </body>
    </html>
  )
})
