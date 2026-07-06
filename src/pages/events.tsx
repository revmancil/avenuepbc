import type { Context } from 'hono'
import { PageHero } from './shared'
import { PHOTOS } from '../renderer'

const regularEvents = [
  { day: 'Sunday', time: '10:00 AM', name: 'Sunday School', desc: 'Bible study classes for all ages.', icon: 'fa-bible' },
  { day: 'Sunday', time: '11:15 AM', name: 'Sunday Worship Service', desc: 'Main worship service featuring praise and expository preaching.', icon: 'fa-church' },
  { day: 'Wednesday', time: '6:30 PM', name: 'Prayer & Bible Study', desc: 'Midweek gathering for prayer, worship, and study of Scripture.', icon: 'fa-pray' },
  { day: 'Thursday', time: '7:00 PM', name: 'Choir Rehearsal', desc: 'Music Ministry rehearsal open to all who sing or play.', icon: 'fa-music' },
  { day: '1st Saturday', time: '8:00 AM', name: "Men's Ministry Breakfast", desc: 'Monthly fellowship, accountability, and study for men.', icon: 'fa-shield-alt' },
  { day: '2nd Saturday', time: '10:00 AM', name: "Women's Ministry Gathering", desc: 'Monthly Bible study, fellowship, and service for women.', icon: 'fa-heart' },
]

export const eventsPage = (c: Context) => c.render(
  <div>
    <PageHero
      title="Events & Services"
      subtitle="Stay connected and grow in faith through our regular services and community gatherings."
      breadcrumb="Events"
      bgPhoto={PHOTOS.congregation4}
    />

    <section class="py-24 bg-brand-cream">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Regular Schedule */}
        <div class="mb-20">
          <div class="text-center mb-12 fade-in">
            <div class="section-divider"></div>
            <h2 class="font-serif text-3xl md:text-4xl font-bold text-brand-maroon mb-3">Weekly Schedule</h2>
            <p class="text-gray-500">Ongoing opportunities to worship, learn, and fellowship together.</p>
          </div>

          <div class="space-y-4">
            {regularEvents.map((ev, i) => (
              <div key={i} class={`event-card bg-white rounded-2xl px-6 py-5 shadow-sm fade-in delay-${(i % 3) + 1}`}>
                <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div class="flex items-center gap-4 flex-1">
                    <div class="w-12 h-12 bg-brand-maroon rounded-xl flex items-center justify-center flex-shrink-0">
                      <i class={`fas ${ev.icon} text-brand-gold`}></i>
                    </div>
                    <div>
                      <h3 class="font-serif font-bold text-brand-maroon text-lg">{ev.name}</h3>
                      <p class="text-gray-500 text-sm">{ev.desc}</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-3 sm:flex-col sm:items-end text-right">
                    <span class="bg-brand-gold/10 text-brand-gold font-bold text-sm px-3 py-1 rounded-full">{ev.day}</span>
                    <span class="text-brand-maroon font-semibold text-sm">{ev.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo strip */}
        <div class="mb-16 grid grid-cols-3 gap-4 rounded-2xl overflow-hidden fade-in">
          {[PHOTOS.worshipSinger, PHOTOS.pianist1, PHOTOS.worshipPrayer].map((src, i) => (
            <div key={i} class="relative h-52 overflow-hidden rounded-xl">
              <img src={src} alt="Worship at THE AVENUE" class="w-full h-full object-cover" loading="lazy" />
              <div class="absolute inset-0 bg-brand-charcoal/20 hover:bg-brand-charcoal/0 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Upcoming Special Events placeholder */}
        <div class="mb-16 fade-in">
          <div class="text-center mb-10">
            <h2 class="font-serif text-3xl font-bold text-brand-maroon mb-3">Upcoming Special Events</h2>
            <p class="text-gray-500">Special services and celebrations you won&apos;t want to miss.</p>
          </div>
          <div class="bg-white rounded-3xl p-12 text-center shadow-md border border-brand-gold/20">
            <div class="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <i class="far fa-calendar-alt text-brand-gold text-2xl"></i>
            </div>
            <h3 class="font-serif text-2xl font-bold text-brand-maroon mb-3">Stay Tuned</h3>
            <p class="text-gray-500 max-w-md mx-auto mb-6">
              Special events and programs are announced regularly. Visit us in person or follow our
              social channels for the latest updates.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.facebook.com/AvenuePBC" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors">
                <i class="fab fa-facebook-f"></i> Follow on Facebook
              </a>
              <a href="https://www.youtube.com/@AvenuePBC" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition-colors">
                <i class="fab fa-youtube"></i> Subscribe on YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Visit CTA */}
        <div class="bg-brand-charcoal rounded-3xl p-10 text-center fade-in">
          <h2 class="font-serif text-2xl md:text-3xl font-bold text-white mb-3">Join Us This Sunday</h2>
          <p class="text-gray-300 mb-7 max-w-lg mx-auto">
            Experience the warmth of THE AVENUE family. Plan your first visit today.
          </p>
          <a href="/visit" class="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold2 text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-xl">
            <i class="fas fa-map-marker-alt"></i> Plan Your Visit
          </a>
        </div>
      </div>
    </section>
  </div>,
  {
    title: 'Events & Services',
    description: 'View the weekly schedule and upcoming events at Avenue Progressive Baptist Church in South Dallas — Sunday worship, Bible study, choir, and more.',
    canonicalPath: '/events'
  }
)
