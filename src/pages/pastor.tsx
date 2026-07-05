import type { Context } from 'hono'
import { PageHero } from './shared'

const pastorImg = "https://sspark.genspark.ai/cfimages?u1=DIe6ySYitvYvw%2Bcf6P6EaBXhSzNnmBXa5NZyMHxbkVdwnaKS9x8gD%2FJIDXn%2Bas1lNZ9dEQhmsgdFV1kY1XC1WDp6z6CxmQ%3D%3D&u2=xngxgdfFljGrYEtQ&width=1024"

export const pastorPage = (c: Context) => c.render(
  <div>
    <PageHero
      title="Our Pastor"
      subtitle="Meet Dr. Mancil Carroll III, Senior Pastor of THE AVENUE."
      breadcrumb="Our Pastor"
    />

    <section class="py-24 bg-brand-cream">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Photo column */}
          <div class="lg:col-span-2 fade-in">
            <div class="relative">
              <img
                src={pastorImg}
                alt="Dr. Mancil Carroll III, Senior Pastor of Avenue Progressive Baptist Church"
                class="w-full rounded-3xl shadow-2xl"
                loading="lazy"
              />
              {/* Name badge */}
              <div class="absolute bottom-0 left-0 right-0 bg-brand-navy/90 backdrop-blur-sm text-white p-5 rounded-b-3xl">
                <div class="font-serif font-bold text-xl">Dr. Mancil Carroll III</div>
                <div class="text-brand-gold text-sm mt-0.5">Senior Pastor · Elected May 2025</div>
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
                  <div class="font-serif font-bold text-brand-navy">Holy, But Not Perfect</div>
                </div>
              </div>
              <p class="text-gray-500 text-sm leading-relaxed">
                A powerful testimony of redemption and grace, reminding believers that God's call
                is never revoked and His love never fails.
              </p>
            </div>
          </div>

          {/* Bio column */}
          <div class="lg:col-span-3 fade-in delay-2">
            <div class="section-divider left"></div>
            <h2 class="font-serif text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Shepherd of THE AVENUE
            </h2>

            <blockquote class="pull-quote mb-8">
              "THE AVENUE is more than a church — it is a family. Here you will find a people
              committed to walking with you in faith, praying alongside you, and helping you
              discover the abundant life that Jesus offers."
            </blockquote>

            <div class="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Rev. Dr. Mancil Carroll III is the Senior Pastor of Avenue Progressive Baptist Church
                in South Dallas, where he leads with a vision of faith, love, and service. His ministry
                is rooted in a passion for preaching the Word of God with clarity, compassion, and
                conviction, while building bridges between the church and the community.
              </p>
              <p>
                Pastor Carroll brings over <strong class="text-brand-navy">20 years of ministry experience</strong> to
                THE AVENUE. Elected in May 2025, he arrived with a proven track record of equipping
                congregations, mentoring young leaders, and guiding families to live with purpose and faith.
              </p>
              <p>
                He is the author of <em class="text-brand-gold font-semibold">Holy, But Not Perfect</em> — a powerful
                testimony of redemption and grace. His heart for people extends beyond the pulpit
                as he is committed to uplifting the South Dallas community through outreach,
                service, and love.
              </p>
              <p>
                Dr. Carroll has been joyfully married for 26 years to <strong class="text-brand-navy">Maxine Carroll</strong>,
                and together they are the proud parents of three adult children: Jasmine, Paris, and Metia.
                His love for family shapes his approach to ministry — the church should be both a
                spiritual home and a family that welcomes all.
              </p>
            </div>

            {/* Highlights */}
            <div class="mt-10 grid grid-cols-2 gap-4">
              {[
                { icon: 'fa-bible', label: 'Expository Preaching', sub: 'Christ-centered messages' },
                { icon: 'fa-users', label: 'Community Focused', sub: 'Serving South Dallas' },
                { icon: 'fa-graduation-cap', label: '20+ Years Ministry', sub: 'Experienced shepherd' },
                { icon: 'fa-home', label: 'Family Rooted', sub: 'Married 26 years' },
              ].map((h, i) => (
                <div key={i} class={`bg-white rounded-xl p-4 shadow-sm fade-in delay-${i + 1}`}>
                  <div class="flex items-center gap-3">
                    <div class="w-9 h-9 bg-brand-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i class={`fas ${h.icon} text-brand-navy text-sm`}></i>
                    </div>
                    <div>
                      <div class="font-semibold text-brand-navy text-sm">{h.label}</div>
                      <div class="text-gray-400 text-xs">{h.sub}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div class="mt-10 flex flex-wrap gap-4">
              <a href="/visit" class="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-full transition-colors">
                <i class="fas fa-church"></i> Join Us Sunday
              </a>
              <a href="/contact" class="inline-flex items-center gap-2 border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold px-6 py-3 rounded-full transition-colors">
                Contact the Church
              </a>
            </div>
          </div>
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
