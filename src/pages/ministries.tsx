import type { Context } from 'hono'
import { PageHero } from './shared'
import { PHOTOS } from '../renderer'

const ministries = [
  {
    title: 'Sunday School',
    icon: 'fa-bible',
    schedule: 'Sundays at 10:00 AM',
    photo: PHOTOS.bible,
    description: 'Age-appropriate Bible study for every stage of life — from children to seniors. Sunday School is the foundation of spiritual growth at THE AVENUE.',
    details: ['Classes for all ages', 'Teacher-led discussion', 'Scripture memorization', 'Prayer & fellowship'],
    how: 'Simply arrive at 10:00 AM on Sunday. Our greeters will direct you to the right class.',
  },
  {
    title: 'Youth Ministry',
    icon: 'fa-users',
    schedule: 'Fridays at 6:30 PM',
    photo: PHOTOS.congregation7,
    description: 'Engaging programs for teenagers that build strong faith foundations, meaningful friendships, and prepare young people to impact their world for Christ.',
    details: ['Ages 13–18', 'Bible study & discussion', 'Worship & prayer', 'Community service projects'],
    how: 'Students are welcome every Friday at 6:30 PM. Parents can speak with our Youth Director for more information.',
  },
  {
    title: "Women's Ministry",
    icon: 'fa-heart',
    schedule: '2nd Saturday of each month · 10:00 AM',
    photo: PHOTOS.womenGroup,
    description: 'Empowering women through deep Bible study, authentic fellowship, and opportunities to serve God and our community together in faith.',
    details: ['Monthly gatherings', 'Bible study series', 'Community outreach', 'Annual retreat'],
    how: 'Join us on the second Saturday of each month at 10:00 AM. All women are welcome.',
  },
  {
    title: "Men's Ministry",
    icon: 'fa-shield-alt',
    schedule: '1st Saturday of each month · 8:00 AM',
    photo: PHOTOS.congregation5,
    description: 'Building godly men through authentic fellowship, biblical accountability, and service to God, family, and the South Dallas community.',
    details: ['Monthly breakfast', 'Bible study & discussion', 'Accountability groups', 'Community service'],
    how: 'Join us on the first Saturday of each month at 8:00 AM. All men are welcome.',
  },
  {
    title: 'Music Ministry',
    icon: 'fa-music',
    schedule: 'Thursdays at 7:00 PM (Choir Rehearsal)',
    photo: PHOTOS.pianist2,
    description: 'Using the gift of music to glorify God and inspire the congregation. Our choir and worship team lead THE AVENUE in heartfelt praise every Sunday.',
    details: ['Choir rehearsals', 'Worship team', 'Special performances', 'Youth choir opportunities'],
    how: 'If you have a heart to worship through music, come to Thursday rehearsal at 7:00 PM. All voices welcome.',
  },
  {
    title: 'Hospitality Ministry',
    icon: 'fa-hands-helping',
    schedule: 'Sundays · Before & After Services',
    photo: PHOTOS.greeters,
    description: "Welcoming guests and members with warmth and excellence — creating an inviting atmosphere that reflects the love of Christ from the moment you walk in.",
    details: ['Guest welcome team', 'Sunday setup & cleanup', 'Special events support', 'First-time visitor follow-up'],
    how: "Contact us if you'd like to serve on the Hospitality Ministry. Training is provided.",
  },
]

export const ministriesPage = (c: Context) => c.render(
  <div>
    <PageHero
      title="Our Ministries"
      subtitle="Discover where you can connect, grow, and serve at THE AVENUE."
      breadcrumb="Ministries"
      bgPhoto={PHOTOS.worshipFull}
    />

    <section class="py-24 bg-brand-cream">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14 fade-in">
          <div class="section-divider"></div>
          <h2 class="font-serif text-3xl md:text-4xl font-bold text-brand-maroon mb-4">Find Your Place to Serve</h2>
          <p class="text-gray-500 text-lg max-w-2xl mx-auto">
            Every person has unique gifts. Discover how yours can make a difference
            in our church and community.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {ministries.map((m, i) => (
            <article key={i} class={`bg-white rounded-2xl overflow-hidden shadow-md card-hover fade-in delay-${(i % 3) + 1}`}>
              {/* Card header — real photo with maroon overlay */}
              <div class="relative h-44 overflow-hidden">
                <img src={m.photo} alt={m.title} class="w-full h-full object-cover" loading="lazy" />
                <div class="absolute inset-0" style="background: linear-gradient(160deg, rgba(107,26,42,0.88) 0%, rgba(30,30,30,0.75) 100%);"></div>
                <div class="absolute inset-0 p-5 flex items-end">
                  <div class="flex items-center gap-3">
                    <div class="w-11 h-11 bg-brand-gold/20 border border-brand-gold/40 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i class={`fas ${m.icon} text-brand-gold text-lg`}></i>
                    </div>
                    <div>
                      <h3 class="font-serif font-bold text-white text-xl leading-tight">{m.title}</h3>
                      <div class="text-brand-gold/90 text-xs mt-0.5 flex items-center gap-1">
                        <i class="far fa-clock text-xs"></i> {m.schedule}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div class="p-6">
                <p class="text-gray-600 text-sm leading-relaxed mb-4">{m.description}</p>
                <ul class="space-y-1.5 mb-5">
                  {m.details.map((d, j) => (
                    <li key={j} class="flex items-center gap-2 text-sm text-gray-500">
                      <i class="fas fa-check text-brand-gold text-xs"></i> {d}
                    </li>
                  ))}
                </ul>
                <div class="bg-brand-cream rounded-xl p-3 border-l-4 border-brand-maroon">
                  <p class="text-xs text-gray-600"><strong class="text-brand-maroon">How to join:</strong> {m.how}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Photo row */}
        <div class="mt-16 grid grid-cols-4 gap-3 rounded-2xl overflow-hidden fade-in">
          {[PHOTOS.worshipPraise, PHOTOS.friendsGroup, PHOTOS.pianist1, PHOTOS.congregation4].map((src, i) => (
            <div key={i} class="relative h-40 overflow-hidden">
              <img src={src} alt="Ministry life at THE AVENUE" class="w-full h-full object-cover" loading="lazy" />
              <div class="absolute inset-0 bg-brand-maroon/20 hover:bg-brand-maroon/0 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        <div class="mt-12 bg-brand-charcoal rounded-3xl p-10 text-center fade-in">
          <div class="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-5">
            <i class="fas fa-hands-helping text-brand-gold text-2xl"></i>
          </div>
          <h2 class="font-serif text-2xl md:text-3xl font-bold text-white mb-3">Ready to Get Involved?</h2>
          <p class="text-gray-300 mb-7 max-w-lg mx-auto">
            We&apos;d love to help you find the perfect ministry match. Contact us and we&apos;ll point you in the right direction.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold2 text-white font-semibold px-7 py-3 rounded-full transition-colors shadow-lg">
              <i class="fas fa-envelope"></i> Contact Us
            </a>
            <a href="/visit" class="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-7 py-3 rounded-full transition-colors">
              <i class="fas fa-church"></i> Visit This Sunday
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>,
  {
    title: 'Ministries',
    description: "Explore the ministries of Avenue Progressive Baptist Church — Sunday School, Youth, Women's, Men's, Music, and Hospitality. Find your place at THE AVENUE in South Dallas.",
    canonicalPath: '/ministries'
  }
)
