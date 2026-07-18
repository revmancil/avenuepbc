import type { Context } from 'hono'
import { PageHero } from './shared'
import { PHOTOS } from '../renderer'

export const pastorPage = (c: Context) => c.render(
  <div>
    {/* Hero uses pastor in robes as background */}
    <PageHero
      title="Our Pastor"
      subtitle="Meet Dr. Mancil Carroll III, Senior Pastor of THE AVENUE."
      breadcrumb="Our Pastor"
      bgPhoto={PHOTOS.pastorRobes}
    />

    <section class="py-24 bg-brand-cream">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* ── Photo column ── */}
          <div class="lg:col-span-2 fade-in">

            {/* Primary portrait — headshot */}
            <div class="relative">
              <img
                src={PHOTOS.pastorHeadshot}
                alt="Dr. Mancil Carroll III, Senior Pastor of Avenue Progressive Baptist Church"
                class="w-full rounded-3xl shadow-2xl object-cover"
                loading="eager"
              />
              {/* Name badge */}
              <div class="absolute bottom-0 left-0 right-0 bg-brand-charcoal/92 backdrop-blur-sm text-white p-5 rounded-b-3xl">
                <div class="font-serif font-bold text-xl">Dr. Mancil Carroll III</div>
                <div class="text-brand-gold text-sm mt-0.5">Senior Pastor &middot; Elected May 2025</div>
              </div>
            </div>

            {/* Secondary — robes / full-length */}
            <div class="mt-6 relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={PHOTOS.pastorRobes}
                alt="Dr. Carroll in doctoral robes at Avenue Progressive Baptist Church"
                class="w-full object-cover"
                style="max-height: 420px; object-position: top center;"
                loading="lazy"
              />
              <div class="absolute inset-0" style="background: linear-gradient(180deg, transparent 55%, rgba(107,26,42,0.85) 100%);"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4 text-center">
                <span class="text-brand-gold text-xs font-semibold uppercase tracking-widest">
                  <i class="fas fa-cross mr-1 text-xs"></i> Servant of the Word
                </span>
              </div>
            </div>

            {/* Book card */}
            <div class="mt-6 bg-white rounded-2xl p-5 shadow-md">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                  <i class="fas fa-book text-brand-gold"></i>
                </div>
                <div>
                  <div class="text-xs text-gray-400 font-medium uppercase tracking-wide">Author</div>
                  <div class="font-serif font-bold text-brand-maroon">Holy, But Not Perfect</div>
                </div>
              </div>
              <p class="text-gray-500 text-sm leading-relaxed">
                A powerful testimony of redemption and grace, reminding believers that God&apos;s call
                is never revoked and His love never fails.
              </p>
            </div>
          </div>

          {/* ── Bio column ── */}
          <div class="lg:col-span-3 fade-in delay-2">
            <div class="section-divider left"></div>
            <h2 class="font-serif text-3xl md:text-4xl font-bold text-brand-maroon mb-6">
              Shepherd of THE AVENUE
            </h2>

            <blockquote class="pull-quote mb-8">
              &ldquo;THE AVENUE is more than a church &mdash; it is a family. Here you will find a people
              committed to walking with you in faith, praying alongside you, and helping you
              discover the abundant life that Jesus offers.&rdquo;
            </blockquote>

            <div class="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Rev. Dr. Mancil Carroll III is the Senior Pastor of Avenue Progressive Baptist Church
                in South Dallas, where he leads with a vision of faith, love, and service. His ministry
                is rooted in a passion for preaching the Word of God with clarity, compassion, and
                conviction, while building bridges between the church and the community.
              </p>
              <p>
                Pastor Carroll brings over <strong class="text-brand-maroon">20 years of ministry experience</strong> to
                THE AVENUE. Elected in May 2025, he arrived with a proven track record of equipping
                congregations, mentoring young leaders, and guiding families to live with purpose and faith.
                He holds a <strong class="text-brand-maroon">Master of Divinity</strong> and a
                <strong class="text-brand-maroon">Doctor of Ministry</strong> from{' '}
                <strong class="text-brand-maroon">Liberty University</strong>, equipping him with deep
                theological training in service of the local church.
              </p>
              <p>
                He is the author of <em class="text-brand-gold font-semibold">Holy, But Not Perfect</em> &mdash; a powerful
                testimony of redemption and grace. His heart for people extends beyond the pulpit
                as he is committed to uplifting the South Dallas community through outreach,
                service, and love.
              </p>
              <p>
                Dr. Carroll has been joyfully married for 26 years to <strong class="text-brand-maroon">Maxine Carroll</strong>,
                and together they are the proud parents of three adult children: Jasmine, Paris, and Metia.
                His love for family shapes his approach to ministry &mdash; the church should be both a
                spiritual home and a family that welcomes all.
              </p>
            </div>

            {/* Highlights grid */}
            <div class="mt-10 grid grid-cols-2 gap-4">
              {[
                { icon: 'fa-bible',           label: 'Expository Preaching', sub: 'Christ-centered messages' },
                { icon: 'fa-users',           label: 'Community Focused',    sub: 'Serving South Dallas' },
                { icon: 'fa-graduation-cap',  label: 'Liberty University',    sub: 'M.Div. &amp; D.Min.' },
                { icon: 'fa-home',            label: 'Family Rooted',        sub: 'Married 26 years' },
              ].map((h, i) => (
                <div key={i} class={`bg-white rounded-xl p-4 shadow-sm fade-in delay-${i + 1}`}>
                  <div class="flex items-center gap-3">
                    <div class="w-9 h-9 bg-brand-maroon/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i class={`fas ${h.icon} text-brand-maroon text-sm`}></i>
                    </div>
                    <div>
                      <div class="font-semibold text-brand-maroon text-sm">{h.label}</div>
                      <div class="text-gray-400 text-xs">{h.sub}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div class="mt-10 flex flex-wrap gap-4">
              <a href="/visit"
                class="inline-flex items-center gap-2 bg-brand-maroon hover:bg-brand-maroon2 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-md">
                <i class="fas fa-church"></i> Join Us Sunday
              </a>
              <a href="/contact"
                class="inline-flex items-center gap-2 border-2 border-brand-maroon text-brand-maroon hover:bg-brand-maroon hover:text-white font-semibold px-6 py-3 rounded-full transition-colors">
                Contact the Church
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Full-width pastoral banner — robes photo wide crop */}
    <section class="relative h-80 overflow-hidden">
      <img
        src={PHOTOS.pastorRobes}
        alt="Dr. Mancil Carroll III serving THE AVENUE"
        class="w-full h-full object-cover"
        style="object-position: center 15%;"
        loading="lazy"
      />
      <div class="absolute inset-0" style="background: linear-gradient(90deg, rgba(107,26,42,0.88) 0%, rgba(17,17,17,0.55) 60%, transparent 100%);"></div>
      <div class="absolute inset-0 flex items-center px-8 md:px-20">
        <div class="max-w-xl">
          <p class="font-serif text-white text-2xl md:text-3xl italic leading-snug drop-shadow-lg">
            &ldquo;A pastor after God&apos;s own heart, serving a congregation full of faith.&rdquo;
          </p>
          <span class="block text-brand-gold text-sm font-semibold mt-4 not-italic">
            &mdash; Avenue Progressive Baptist Church
          </span>
        </div>
      </div>
    </section>

    {/* Congregation strip */}
    <section class="py-0">
      <div class="grid grid-cols-3 h-52">
        <div class="relative overflow-hidden">
          <img src={PHOTOS.congregation6} alt="THE AVENUE congregation" class="w-full h-full object-cover" loading="lazy" />
          <div class="absolute inset-0 bg-brand-maroon/20"></div>
        </div>
        <div class="relative overflow-hidden">
          <img src={PHOTOS.worshipPraise} alt="Congregation worshipping" class="w-full h-full object-cover" loading="lazy" />
          <div class="absolute inset-0 bg-brand-charcoal/20"></div>
        </div>
        <div class="relative overflow-hidden">
          <img src={PHOTOS.installation} alt="Pastor installation service" class="w-full h-full object-cover" loading="lazy" />
          <div class="absolute inset-0 bg-brand-maroon/20"></div>
        </div>
      </div>
    </section>
  </div>,
  {
    title: 'Our Pastor – Dr. Mancil Carroll III',
    description: 'Meet Dr. Mancil Carroll III, Senior Pastor of Avenue Progressive Baptist Church in South Dallas. 20+ years of ministry, expository preaching, and community service.',
    canonicalPath: '/about/pastor'
  }
)
