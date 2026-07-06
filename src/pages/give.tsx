import type { Context } from 'hono'
import { PageHero } from './shared'
import { PHOTOS } from '../renderer'

export const givePage = (c: Context) => c.render(
  <div>
    <PageHero
      title="Give Online"
      subtitle="Your generosity enables us to serve South Dallas and advance God's Kingdom."
      breadcrumb="Give"
      bgPhoto={PHOTOS.worshipPraise}
    />

    <section class="py-24 bg-brand-cream">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Why Give */}
        <div class="text-center mb-16 fade-in">
          <div class="section-divider"></div>
          <h2 class="font-serif text-3xl md:text-4xl font-bold text-brand-maroon mb-4">Why We Give</h2>
          <p class="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Giving is an act of worship and a response to God&apos;s generosity toward us.
            Every gift &mdash; large or small &mdash; fuels ministry, serves our community, and
            advances the Gospel in South Dallas and beyond.
          </p>
        </div>

        {/* Scripture */}
        <div class="bg-brand-charcoal rounded-3xl p-8 md:p-12 text-center mb-16 fade-in">
          <i class="fas fa-quote-left text-brand-gold text-3xl mb-4 block opacity-50"></i>
          <blockquote class="font-serif text-xl md:text-2xl text-white italic leading-relaxed mb-4">
            &ldquo;Each of you should give what you have decided in your heart to give,
            not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
          </blockquote>
          <cite class="text-brand-gold font-semibold text-sm not-italic">&mdash; 2 Corinthians 9:7</cite>
        </div>

        {/* Giving options */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: 'fa-globe',
              title: 'Give Online',
              desc: 'Give securely anytime using our online giving platform. Credit/debit card and ACH accepted.',
              cta: 'Give Now',
              href: '#',
              primary: true,
            },
            {
              icon: 'fa-mobile-alt',
              title: 'Text to Give',
              desc: 'Text AVENUEGIVE to 77411 to give quickly and securely from your phone.',
              cta: 'Text AVENUEGIVE',
              href: 'sms:77411?body=AVENUEGIVE',
              primary: false,
            },
            {
              icon: 'fa-envelope',
              title: 'Give by Mail',
              desc: 'Mail a check payable to "Avenue Progressive Baptist Church" to our address.',
              cta: 'Get Mailing Address',
              href: '/visit',
              primary: false,
            },
          ].map((g, i) => (
            <div key={i} class={`rounded-2xl p-7 text-center card-hover fade-in delay-${i + 1} ${g.primary ? 'bg-brand-maroon text-white shadow-2xl' : 'bg-white shadow-md'}`}>
              <div class={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${g.primary ? 'bg-brand-gold/20' : 'bg-brand-maroon/10'}`}>
                <i class={`fas ${g.icon} text-2xl ${g.primary ? 'text-brand-gold' : 'text-brand-maroon'}`}></i>
              </div>
              <h3 class={`font-serif font-bold text-xl mb-2 ${g.primary ? 'text-white' : 'text-brand-maroon'}`}>{g.title}</h3>
              <p class={`text-sm leading-relaxed mb-6 ${g.primary ? 'text-gray-300' : 'text-gray-500'}`}>{g.desc}</p>
              <a href={g.href} class={`inline-flex items-center gap-2 font-semibold px-6 py-2.5 rounded-full transition-colors text-sm ${g.primary ? 'bg-brand-gold hover:bg-brand-gold2 text-white' : 'border-2 border-brand-maroon text-brand-maroon hover:bg-brand-maroon hover:text-white'}`}>
                {g.cta} <i class="fas fa-arrow-right text-xs"></i>
              </a>
            </div>
          ))}
        </div>

        {/* Impact */}
        <div class="fade-in">
          <h2 class="font-serif text-3xl font-bold text-brand-maroon text-center mb-10">Your Gift Makes a Difference</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: 'fa-church', text: 'Maintains our worship facilities and Sunday services' },
              { icon: 'fa-child', text: 'Funds youth programs and Sunday School materials' },
              { icon: 'fa-hands-helping', text: 'Supports community outreach in South Dallas' },
              { icon: 'fa-globe', text: 'Advances local and global Gospel missions' },
            ].map((item, i) => (
              <div key={i} class="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm">
                <div class="w-10 h-10 bg-brand-maroon/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i class={`fas ${item.icon} text-brand-maroon`}></i>
                </div>
                <p class="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo accent */}
        <div class="mt-16 rounded-3xl overflow-hidden shadow-2xl relative h-56 fade-in">
          <img src={PHOTOS.congregation1} alt="Congregation of THE AVENUE" class="w-full h-full object-cover" loading="lazy" />
          <div class="absolute inset-0" style="background: linear-gradient(160deg, rgba(107,26,42,0.8) 0%, rgba(30,30,30,0.6) 100%);"></div>
          <div class="absolute inset-0 flex items-center justify-center px-8">
            <p class="font-serif text-white text-xl md:text-2xl italic text-center drop-shadow-lg">
              &ldquo;Every gift, every tithe, every offering &mdash; invested in the Kingdom of God.&rdquo;
            </p>
          </div>
        </div>

        {/* Questions */}
        <div class="mt-12 text-center fade-in">
          <p class="text-gray-500 mb-4">Questions about giving? We&apos;re happy to help.</p>
          <a href="/contact" class="inline-flex items-center gap-2 border-2 border-brand-maroon text-brand-maroon hover:bg-brand-maroon hover:text-white font-semibold px-7 py-3 rounded-full transition-colors">
            <i class="fas fa-envelope"></i> Contact Us
          </a>
        </div>
      </div>
    </section>
  </div>,
  {
    title: 'Give Online',
    description: "Support the ministry of Avenue Progressive Baptist Church in South Dallas. Give online, by text, or by mail. Every gift advances God's Kingdom.",
    canonicalPath: '/give'
  }
)
