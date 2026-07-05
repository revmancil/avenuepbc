import type { Context } from 'hono'
import { PageHero } from './shared'

export const watchPage = (c: Context) => c.render(
  <div>
    <PageHero
      title="Watch Online"
      subtitle="Join us live or catch up on recent messages — anytime, anywhere."
      breadcrumb="Watch Online"
    />

    <section class="py-24 bg-brand-cream">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Live Stream Section */}
        <div class="mb-20">
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Video */}
            <div class="lg:col-span-3 fade-in">
              <div class="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/live_stream?channel=AvenuePBC&autoplay=0"
                  title="THE AVENUE Live Stream — Avenue Progressive Baptist Church"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <p class="text-gray-400 text-xs mt-3 text-center">
                <i class="fas fa-info-circle mr-1"></i>
                If the live stream isn't showing, we may not be broadcasting right now.
              </p>
            </div>

            {/* Info panel */}
            <div class="lg:col-span-2 fade-in delay-2">
              <div class="section-divider left"></div>
              <h2 class="font-serif text-3xl font-bold text-brand-navy mb-4">Watch Live</h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                Can't make it in person? Join us online for live worship, sermons, and encouragement.
                We stream Sunday worship live and archive messages on YouTube.
              </p>

              {/* Live schedule */}
              <div class="space-y-4 mb-6">
                {[
                  { name: 'Sunday Worship', time: '11:15 AM CST', icon: 'fa-church' },
                  { name: 'Wednesday Bible Study', time: '6:30 PM CST', icon: 'fa-bible' },
                ].map((s, i) => (
                  <div key={i} class="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-sm">
                    <div class="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center flex-shrink-0">
                      <i class={`fas ${s.icon} text-brand-gold text-sm`}></i>
                    </div>
                    <div>
                      <div class="font-semibold text-brand-navy text-sm">{s.name}</div>
                      <div class="text-gray-400 text-xs">{s.time}</div>
                    </div>
                    <span class="ml-auto bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">LIVE</span>
                  </div>
                ))}
              </div>

              <a
                href="https://www.youtube.com/@AvenuePBC"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-md"
              >
                <i class="fab fa-youtube"></i> Visit Our YouTube Channel
              </a>
            </div>
          </div>
        </div>

        {/* Recent Sermons placeholder */}
        <div class="mb-16 fade-in">
          <div class="text-center mb-10">
            <h2 class="font-serif text-3xl font-bold text-brand-navy mb-3">Recent Messages</h2>
            <p class="text-gray-500">Catch up on recent sermons from Pastor Carroll.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'A Mind to Work', series: 'Faith in Action', date: 'July 2026', duration: '42 min', ref: 'Nehemiah 4:6' },
              { title: 'Deep Roots, Growing Faith', series: 'Legacy Series', date: 'June 2026', duration: '38 min', ref: 'Psalm 1:1–3' },
              { title: 'Holy, But Not Perfect', series: 'Grace & Redemption', date: 'June 2026', duration: '45 min', ref: 'Romans 8:1' },
            ].map((s, i) => (
              <div key={i} class={`sermon-card p-5 fade-in delay-${i + 1}`}>
                <div class="w-full h-36 bg-brand-navy rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                  <div class="absolute inset-0 opacity-10"
                    style="background-image: radial-gradient(circle, #c9a84c 1px, transparent 1px); background-size: 20px 20px;"></div>
                  <div class="relative text-center">
                    <i class="fas fa-play-circle text-brand-gold text-4xl mb-2 block"></i>
                    <div class="text-white text-xs">{s.duration}</div>
                  </div>
                </div>
                <div class="text-xs text-brand-gold font-semibold uppercase tracking-wide mb-1">{s.series}</div>
                <h3 class="font-serif font-bold text-brand-navy text-lg mb-1">{s.title}</h3>
                <div class="flex items-center justify-between text-xs text-gray-400">
                  <span><i class="fas fa-book-open mr-1"></i>{s.ref}</span>
                  <span>{s.date}</span>
                </div>
                <a
                  href="https://www.youtube.com/@AvenuePBC"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-4 flex items-center justify-center gap-2 border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white text-sm font-semibold py-2 rounded-full transition-colors"
                >
                  <i class="fab fa-youtube text-xs"></i> Watch on YouTube
                </a>
              </div>
            ))}
          </div>

          <div class="text-center mt-8">
            <a href="https://www.youtube.com/@AvenuePBC" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-2 border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Full Sermon Archive <i class="fas fa-external-link-alt text-xs"></i>
            </a>
          </div>
        </div>

        {/* In-person CTA */}
        <div class="bg-brand-navy rounded-3xl p-10 text-center fade-in">
          <div class="w-14 h-14 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-5">
            <i class="fas fa-church text-brand-gold text-2xl"></i>
          </div>
          <h2 class="font-serif text-2xl md:text-3xl font-bold text-white mb-3">Nothing Replaces Being There</h2>
          <p class="text-gray-300 mb-7 max-w-lg mx-auto">
            Online is wonderful, but there's nothing like worshipping together in person.
            We'd love to see you this Sunday.
          </p>
          <a href="/visit" class="inline-flex items-center gap-2 bg-brand-gold hover:bg-yellow-500 text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-xl">
            <i class="fas fa-map-marker-alt"></i> Plan Your Visit
          </a>
        </div>
      </div>
    </section>
  </div>,
  {
    title: 'Watch Online',
    description: 'Watch Avenue Progressive Baptist Church live on Sunday at 11:15 AM CST. Stream worship services and catch up on recent sermons from Pastor Mancil Carroll III.',
    canonicalPath: '/watch'
  }
)
