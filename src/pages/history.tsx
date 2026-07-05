import type { Context } from 'hono'
import { PageHero } from './shared'

export const historyPage = (c: Context) => c.render(
  <div>
    <PageHero
      title="Our History"
      subtitle="Over 60 years of faith, community, and God's faithfulness in South Dallas."
      breadcrumb="Our History"
    />

    {/* Timeline section */}
    <section class="py-24 bg-brand-cream">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Opening */}
        <div class="text-center mb-16 fade-in">
          <div class="section-divider"></div>
          <h2 class="font-serif text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            A Way to Christ
          </h2>
          <p class="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            The name "Avenue Baptist Church" was inspired by the intersection of Grand Avenue
            and Oakland Avenue — symbolizing <em class="text-brand-gold font-semibold">"A Way to Christ."</em> For over
            six decades, that vision has guided everything we do.
          </p>
        </div>

        {/* Timeline */}
        <div class="relative">
          {/* Center line */}
          <div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-gold/30 -translate-x-1/2 hidden md:block"></div>

          <div class="space-y-12">
            {[
              {
                year: '1961',
                title: 'The Mission Opens',
                text: 'On May 7, 1961, Rev. E. B. Glenn Dickens opened the doors of the mission at 2714 Grand Avenue in South Dallas\'s historic "Queen City" neighborhood. When no one came on the first night, he turned to God for strength. Three weeks later, on May 28, he preached the mission\'s first sermon — "A Mind to Work."',
                side: 'left',
              },
              {
                year: '1961',
                title: 'First Members United',
                text: 'Fifteen individuals united with the congregation after that first sermon. The church was officially organized by Mount Sinai Baptist Church, and Rev. Dickens was appointed its first pastor. A community of faith was born.',
                side: 'right',
              },
              {
                year: '1961–2000',
                title: 'Growing Through the Decades',
                text: 'Through the civil rights movement, urban renewal, and the changing landscape of South Dallas, THE AVENUE stood firm as a spiritual anchor for the community — ministering to families, hosting youth programs, and faithfully preaching the Gospel.',
                side: 'left',
              },
              {
                year: '2000s',
                title: 'Becoming "THE AVENUE"',
                text: 'The church adopted the identity "THE AVENUE" — not just a street address, but a declaration of purpose: a way of access to Jesus. The name captures the heart of our mission, welcoming all who seek a path to faith.',
                side: 'right',
              },
              {
                year: '2025',
                title: 'New Leadership, Same Mission',
                text: 'In May 2025, Dr. Mancil Carroll III was elected Senior Pastor. With over 20 years of ministry experience, Dr. Carroll carries forward the legacy of THE AVENUE with fresh vision, a passion for expository preaching, and a deep love for South Dallas.',
                side: 'left',
              },
              {
                year: 'Today',
                title: 'Continuing the Legacy',
                text: 'Avenue Progressive Baptist Church continues to serve as a cornerstone of faith in South Dallas — holding Sunday School at 10:00 AM, Sunday Worship at 11:15 AM, and Wednesday Prayer & Bible Study at 6:30 PM. Our doors and hearts remain open to all.',
                side: 'right',
              },
            ].map((item, i) => (
              <div key={i} class={`relative flex flex-col md:flex-row gap-8 items-start fade-in delay-${(i % 3) + 1}`}>
                {item.side === 'left' ? (
                  <>
                    <div class="flex-1 md:text-right">
                      <div class="bg-white rounded-2xl p-6 shadow-md card-hover">
                        <span class="inline-block bg-brand-navy text-brand-gold text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide">{item.year}</span>
                        <h3 class="font-serif font-bold text-brand-navy text-xl mb-2">{item.title}</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                    <div class="hidden md:flex w-8 h-8 rounded-full bg-brand-gold border-4 border-brand-cream shadow-md items-center justify-center flex-shrink-0 mt-6 z-10">
                      <div class="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <div class="flex-1 hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div class="flex-1 hidden md:block"></div>
                    <div class="hidden md:flex w-8 h-8 rounded-full bg-brand-gold border-4 border-brand-cream shadow-md items-center justify-center flex-shrink-0 mt-6 z-10">
                      <div class="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <div class="flex-1">
                      <div class="bg-white rounded-2xl p-6 shadow-md card-hover">
                        <span class="inline-block bg-brand-navy text-brand-gold text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide">{item.year}</span>
                        <h3 class="font-serif font-bold text-brand-navy text-xl mb-2">{item.title}</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section class="py-20 stats-strip text-center fade-in">
      <div class="max-w-2xl mx-auto px-4">
        <h2 class="font-serif text-3xl font-bold text-white mb-4">Become Part of Our Story</h2>
        <p class="text-gray-300 mb-8">Join us this Sunday and write the next chapter with us.</p>
        <a href="/visit" class="inline-flex items-center gap-2 bg-brand-gold hover:bg-yellow-500 text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-xl">
          Plan Your Visit <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  </div>,
  {
    title: 'Our History',
    description: 'Discover the 60+ year story of Avenue Progressive Baptist Church in South Dallas — from a 1961 storefront mission to THE AVENUE, a way of access to Jesus.',
    canonicalPath: '/about/history'
  }
)
