import type { Context } from 'hono'
import { PageHero } from './shared'
import { PHOTOS } from '../renderer'

export const beliefsPage = (c: Context) => c.render(
  <div>
    <PageHero
      title="What We Believe"
      subtitle="Our faith is rooted in the Bible and centered on Jesus Christ."
      breadcrumb="What We Believe"
      bgPhoto={PHOTOS.bible}
    />

    <section class="py-24 bg-brand-cream">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-14 fade-in">
          <div class="section-divider"></div>
          <p class="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            As a Baptist church, our beliefs are grounded in Scripture and in the historic
            confessions of the Baptist tradition. Here are the core convictions that shape
            everything we do at THE AVENUE.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: 'fa-book',
              title: 'The Bible',
              text: 'We believe the Bible is the inspired, infallible, authoritative Word of God — our supreme guide in all matters of faith and practice.',
              verse: '2 Timothy 3:16–17',
            },
            {
              icon: 'fa-cross',
              title: 'Salvation by Grace',
              text: "We believe that salvation is a free gift of God's grace, received through faith in Jesus Christ alone — not by works, but by His death and resurrection.",
              verse: 'Ephesians 2:8–9',
            },
            {
              icon: 'fa-infinity',
              title: 'The Trinity',
              text: 'We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit — co-equal, co-eternal, and worthy of worship.',
              verse: 'Matthew 28:19',
            },
            {
              icon: 'fa-water',
              title: 'Baptism',
              text: "We practice believer's baptism by immersion as a public declaration of faith — a symbolic burial and resurrection with Christ.",
              verse: 'Romans 6:3–4',
            },
            {
              icon: 'fa-bread-slice',
              title: "The Lord's Supper",
              text: "We observe communion as a memorial of Christ's sacrifice, proclaiming His death until He returns. All who trust in Christ are welcome at the table.",
              verse: '1 Corinthians 11:23–26',
            },
            {
              icon: 'fa-church',
              title: 'The Local Church',
              text: "We believe the local church is God's primary instrument for discipleship, fellowship, worship, and mission in the world.",
              verse: 'Hebrews 10:24–25',
            },
            {
              icon: 'fa-hand-holding-heart',
              title: 'Service & Community',
              text: 'We are called to love our neighbors, care for the poor, and serve our community — bringing the Kingdom of God to South Dallas and beyond.',
              verse: 'Matthew 22:37–39',
            },
            {
              icon: 'fa-globe',
              title: 'The Great Commission',
              text: 'We are committed to making disciples of all nations — sharing the Gospel locally in South Dallas and globally through missions.',
              verse: 'Matthew 28:18–20',
            },
          ].map((b, i) => (
            <div key={i} class={`bg-white rounded-2xl p-6 shadow-md card-hover fade-in delay-${(i % 3) + 1}`}>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-brand-maroon rounded-xl flex items-center justify-center flex-shrink-0">
                  <i class={`fas ${b.icon} text-brand-gold`}></i>
                </div>
                <div class="flex-1">
                  <h3 class="font-serif font-bold text-brand-maroon text-xl mb-2">{b.title}</h3>
                  <p class="text-gray-600 text-sm leading-relaxed mb-3">{b.text}</p>
                  <span class="inline-block bg-brand-gold/10 text-brand-gold text-xs font-semibold px-3 py-1 rounded-full">
                    <i class="fas fa-book-open mr-1 text-xs"></i>{b.verse}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo accent */}
        <div class="mt-16 rounded-3xl overflow-hidden shadow-2xl relative h-64 fade-in">
          <img src={PHOTOS.worshipPrayer} alt="Congregation in worship" class="w-full h-full object-cover" loading="lazy" />
          <div class="absolute inset-0" style="background: linear-gradient(160deg, rgba(107,26,42,0.82) 0%, rgba(17,17,17,0.65) 100%);"></div>
          <div class="absolute inset-0 flex items-center justify-center px-8">
            <p class="font-serif text-white text-xl md:text-2xl italic text-center drop-shadow-lg">
              &ldquo;Faith comes by hearing, and hearing through the word of Christ.&rdquo;
              <span class="block text-brand-gold text-sm font-semibold not-italic mt-2">— Romans 10:17</span>
            </p>
          </div>
        </div>

        <div class="mt-12 text-center fade-in">
          <p class="text-gray-500 mb-6 text-lg">Have questions about our beliefs? We&apos;d love to talk with you.</p>
          <a href="/contact" class="inline-flex items-center gap-2 bg-brand-maroon hover:bg-brand-maroon2 text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-lg">
            <i class="fas fa-comments"></i> Get in Touch
          </a>
        </div>
      </div>
    </section>
  </div>,
  {
    title: 'What We Believe',
    description: 'Learn about the core beliefs of Avenue Progressive Baptist Church in South Dallas — our faith in the Bible, salvation by grace, baptism, and the local church.',
    canonicalPath: '/about/beliefs'
  }
)
