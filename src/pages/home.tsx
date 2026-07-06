import type { Context } from 'hono'
import { PHOTOS } from '../renderer'

export const homePage = (c: Context) => {
  return c.render(
    <div>
      {/* ══════════════════════════════════════════════════
          HERO — Real congregation photo
      ══════════════════════════════════════════════════ */}
      <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
          <img
            src={PHOTOS.heroSanctuary}
            alt="THE AVENUE congregation gathered in worship"
            class="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div class="absolute inset-0 hero-gradient"></div>
          <div class="absolute inset-0 opacity-10"
            style="background-image: radial-gradient(circle, rgba(201,168,76,0.5) 1px, transparent 1px); background-size: 44px 44px;"></div>
        </div>

        <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Logo badge */}
          <div class="flex justify-center mb-6 fade-in">
            <img src={PHOTOS.logo} alt="THE AVENUE logo" class="h-24 w-24 object-contain drop-shadow-2xl" />
          </div>
          <div class="inline-flex items-center gap-2 bg-brand-maroon/30 border border-brand-gold/40 backdrop-blur-sm text-brand-gold px-5 py-2 rounded-full text-sm font-semibold tracking-wide mb-6 fade-in delay-1">
            <i class="fas fa-cross text-xs"></i>
            Serving South Dallas Since 1961
          </div>
          <h1 class="font-serif text-5xl md:text-7xl font-bold leading-tight mb-5 fade-in delay-1">
            Welcome to<br />
            <span class="gold-text">THE AVENUE</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed fade-in delay-2">
            Avenue Progressive Baptist Church — a warm, Christ-centered family where everyone is
            welcomed, loved, and encouraged to grow in faith.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center fade-in delay-3">
            <a href="/visit"
              class="bg-brand-maroon hover:bg-brand-maroon2 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-2xl hover:-translate-y-0.5 text-base border border-brand-maroon2">
              <i class="fas fa-map-marker-alt mr-2"></i> Plan Your Visit
            </a>
            <a href="/watch"
              class="bg-white/10 hover:bg-white/20 border border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 backdrop-blur-sm text-base">
              <i class="fas fa-play mr-2"></i> Watch Online
            </a>
          </div>
        </div>

        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <i class="fas fa-chevron-down text-xl"></i>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SERVICE TIMES STRIP
      ══════════════════════════════════════════════════ */}
      <section class="stats-strip py-12" aria-label="Service times">
        <div class="max-w-5xl mx-auto px-4">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: 'fa-bible',   day: 'Sunday School',              time: '10:00 AM', note: 'Classes for all ages' },
              { icon: 'fa-church',  day: 'Sunday Worship',             time: '11:15 AM', note: 'Main service · ~90 mins' },
              { icon: 'fa-pray',    day: 'Wed Prayer & Bible Study',   time: '6:30 PM',  note: 'Midweek gathering' },
            ].map((s, i) => (
              <div key={i} class={`time-card rounded-2xl px-6 py-6 text-center fade-in delay-${i + 1}`}>
                <div class="w-12 h-12 rounded-full bg-brand-gold/15 flex items-center justify-center mx-auto mb-3">
                  <i class={`fas ${s.icon} text-brand-gold text-lg`}></i>
                </div>
                <div class="text-brand-gold font-serif font-bold text-3xl mb-1">{s.time}</div>
                <div class="text-white font-semibold text-sm mb-1">{s.day}</div>
                <div class="text-gray-500 text-xs">{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHO WE ARE — real community photo
      ══════════════════════════════════════════════════ */}
      <section class="py-24 bg-brand-cream" aria-labelledby="who-we-are-heading">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="fade-in">
              <div class="section-divider left"></div>
              <h2 id="who-we-are-heading" class="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
                A Place Where<br /><em class="gold-text not-italic">You Belong</em>
              </h2>
              <p class="text-gray-600 text-lg leading-relaxed mb-5">
                For over 60 years, <strong>THE AVENUE</strong> — Avenue Progressive Baptist Church —
                has been a cornerstone of faith and community in South Dallas. We are a warm,
                Bible-believing church family where everyone is welcomed, loved, and encouraged
                to grow in Christ.
              </p>
              <p class="text-gray-600 leading-relaxed mb-8">
                Whether you&apos;re looking for a church home, exploring your faith, or searching for
                a community that cares — you&apos;ll find open doors and open hearts at THE AVENUE.
              </p>
              <div class="flex flex-wrap gap-4">
                <a href="/about/history"
                  class="inline-flex items-center gap-2 bg-brand-maroon hover:bg-brand-maroon2 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-md">
                  Our Story <i class="fas fa-arrow-right text-sm"></i>
                </a>
                <a href="/visit"
                  class="inline-flex items-center gap-2 border-2 border-brand-maroon text-brand-maroon hover:bg-brand-maroon hover:text-white font-semibold px-6 py-3 rounded-full transition-colors">
                  Plan a Visit
                </a>
              </div>
            </div>
            <div class="relative photo-frame fade-in delay-2">
              <img
                src={PHOTOS.congregation2}
                alt="THE AVENUE congregation smiling in fellowship"
                class="relative w-full h-96 object-cover rounded-3xl shadow-2xl z-10"
                loading="lazy"
              />
              <div class="absolute -bottom-5 -left-5 bg-brand-charcoal text-white px-6 py-4 rounded-2xl shadow-xl z-20">
                <div class="font-serif font-bold text-3xl text-brand-gold">60+</div>
                <div class="text-xs text-gray-300 mt-0.5">Years Serving<br />South Dallas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHAT TO EXPECT
      ══════════════════════════════════════════════════ */}
      <section class="py-24 bg-white" aria-labelledby="expect-heading">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14 fade-in">
            <div class="section-divider"></div>
            <h2 id="expect-heading" class="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
              First Time Visiting?
            </h2>
            <p class="text-gray-500 text-lg max-w-2xl mx-auto">
              We know visiting a new church can feel uncertain. Here&apos;s exactly what to expect.
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'fa-clock',      title: 'Relaxed & On Time',   desc: 'Sunday worship starts at 11:15 AM and lasts about 90 minutes. Arrive early so we can greet you.',               delay: '1' },
              { icon: 'fa-music',      title: 'Uplifting Worship',   desc: 'Experience heartfelt praise through traditional hymns and contemporary gospel led by our worship team.',         delay: '2' },
              { icon: 'fa-book-open',  title: 'Biblical Preaching',  desc: 'Pastor Carroll delivers expository, Christ-centered messages rooted in Scripture and daily life.',              delay: '3' },
              { icon: 'fa-tshirt',     title: 'Come As You Are',     desc: "No dress code. Some come in suits, some in jeans. What matters most is that you're here.",                      delay: '1' },
              { icon: 'fa-child',      title: 'Family Friendly',     desc: 'Children are welcome in the sanctuary. Sunday School classes are available for every age group.',               delay: '2' },
              { icon: 'fa-handshake',  title: 'Warm Welcome',        desc: 'Our greeters and members will make you feel at home from the moment you walk in.',                             delay: '3' },
            ].map((item, i) => (
              <div key={i} class={`bg-brand-cream rounded-2xl p-7 card-hover fade-in delay-${item.delay}`}>
                <div class="w-12 h-12 bg-brand-maroon rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <i class={`fas ${item.icon} text-brand-gold text-lg`}></i>
                </div>
                <h3 class="font-serif font-bold text-brand-charcoal text-xl mb-2">{item.title}</h3>
                <p class="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div class="text-center mt-12 fade-in">
            <a href="/visit"
              class="inline-flex items-center gap-2 bg-brand-maroon hover:bg-brand-maroon2 text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-lg">
              <i class="fas fa-map-marker-alt"></i> Plan Your Visit
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PHOTO GALLERY STRIP — real congregation photos
      ══════════════════════════════════════════════════ */}
      <section class="py-0 overflow-hidden" aria-label="Church photo gallery">
        <div class="photo-grid grid grid-cols-2 md:grid-cols-4 h-64 md:h-80">
          {[
            { src: PHOTOS.worshipPraise,  alt: 'Congregation in worship at THE AVENUE' },
            { src: PHOTOS.installation,   alt: 'Pastoral installation service at THE AVENUE' },
            { src: PHOTOS.worshipSinger,  alt: 'Vocalist leading worship at THE AVENUE' },
            { src: PHOTOS.congregation3,  alt: 'THE AVENUE congregation gathered together' },
          ].map((p, i) => (
            <div key={i} class="overflow-hidden">
              <img src={p.src} alt={p.alt} class="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PASTOR SECTION — dark background
      ══════════════════════════════════════════════════ */}
      <section class="py-24 stats-strip relative overflow-hidden" aria-labelledby="pastor-heading">
        <div class="absolute right-0 top-0 w-96 h-96 bg-brand-maroon/10 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* real congregation/couple photo for pastor section */}
            <div class="relative photo-frame fade-in">
              <img
                src={PHOTOS.friendsGroup}
                alt="Dr. Mancil Carroll III, Senior Pastor of THE AVENUE, with congregation"
                class="relative w-full h-[460px] object-cover object-top rounded-3xl shadow-2xl z-10"
                loading="lazy"
              />
              <div class="absolute -bottom-4 -right-4 bg-brand-maroon text-white px-6 py-4 rounded-2xl shadow-xl z-20">
                <div class="font-serif font-bold text-xl">Dr. Mancil Carroll III</div>
                <div class="text-sm text-white/80 mt-0.5">Senior Pastor</div>
              </div>
            </div>
            <div class="fade-in delay-2">
              <div class="section-divider left"></div>
              <h2 id="pastor-heading" class="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
                A Word from<br /><span class="gold-text">Our Pastor</span>
              </h2>
              <blockquote class="pull-quote text-gray-400 mb-8">
                "THE AVENUE is more than a church — it is a family. Here you will find a people
                committed to walking with you in faith, praying alongside you, and helping you
                discover the abundant life that Jesus offers."
              </blockquote>
              <p class="text-gray-400 leading-relaxed mb-8">
                Elected as Senior Pastor in May 2025, Dr. Carroll brings over 20 years of ministry
                experience, a passion for expository preaching, and a deep love for the South Dallas
                community. He is the author of <em class="text-brand-gold">Holy, But Not Perfect</em>.
              </p>
              <a href="/about/pastor"
                class="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold2 text-brand-charcoal font-bold px-7 py-3 rounded-full transition-colors shadow-lg">
                Meet Dr. Carroll <i class="fas fa-arrow-right text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MINISTRIES PREVIEW
      ══════════════════════════════════════════════════ */}
      <section class="py-24 bg-white" aria-labelledby="ministries-heading">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14 fade-in">
            <div class="section-divider"></div>
            <h2 id="ministries-heading" class="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
              Our Ministries
            </h2>
            <p class="text-gray-500 text-lg max-w-2xl mx-auto">
              There&apos;s a place for you at THE AVENUE. Find where you can connect, grow, and serve.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Ministry cards with real photos as backgrounds */}
            {[
              { title: 'Sunday School',      icon: 'fa-bible',         time: 'Sundays · 10:00 AM',         img: PHOTOS.bible,         desc: 'Bible study for all ages — growing together in God\'s Word.' },
              { title: 'Youth Ministry',     icon: 'fa-users',         time: 'Fridays · 6:30 PM',          img: PHOTOS.worshipPraise, desc: 'Engaging programs building strong faith in young people.' },
              { title: "Women's Ministry",   icon: 'fa-heart',         time: '2nd Saturday · 10:00 AM',    img: PHOTOS.womenGroup,    desc: 'Empowering women through fellowship, study, and service.' },
              { title: "Men's Ministry",     icon: 'fa-shield-alt',    time: '1st Saturday · 8:00 AM',     img: PHOTOS.congregation1, desc: 'Building godly men through accountability and service.' },
              { title: 'Music Ministry',     icon: 'fa-music',         time: 'Thursdays · 7:00 PM',        img: PHOTOS.pianist2,      desc: 'Using the gift of music to glorify God in worship.' },
              { title: 'Hospitality',        icon: 'fa-hands-helping', time: 'Sundays · Before & After',   img: PHOTOS.greeters,      desc: 'Welcoming every guest with warmth and the love of Christ.' },
            ].map((m, i) => (
              <div key={i} class={`ministry-card h-64 card-hover fade-in delay-${(i % 3) + 1}`}>
                <img src={m.img} alt={`${m.title} at THE AVENUE`} loading="lazy" />
                <div class="overlay"></div>
                <div class="absolute inset-0 z-10 flex flex-col justify-end p-6">
                  <div class="flex items-center gap-2 mb-1">
                    <i class={`fas ${m.icon} text-brand-gold text-sm`}></i>
                    <span class="text-brand-gold text-xs font-semibold">{m.time}</span>
                  </div>
                  <h3 class="font-serif font-bold text-white text-xl mb-1">{m.title}</h3>
                  <p class="text-gray-300 text-xs leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div class="text-center mt-12 fade-in">
            <a href="/ministries"
              class="inline-flex items-center gap-2 border-2 border-brand-maroon text-brand-maroon hover:bg-brand-maroon hover:text-white font-semibold px-8 py-4 rounded-full transition-colors">
              All Ministries <i class="fas fa-arrow-right text-sm"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          STATS BANNER
      ══════════════════════════════════════════════════ */}
      <section class="py-20 bg-brand-light" aria-label="Church statistics">
        <div class="max-w-5xl mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '1961', label: 'Year Founded' },
              { num: '60+',  label: 'Years of Ministry' },
              { num: '6',    label: 'Active Ministries' },
              { num: '∞',    label: 'God\'s Faithfulness' },
            ].map((s, i) => (
              <div key={i} class={`fade-in delay-${i + 1}`}>
                <div class="font-serif font-bold text-4xl md:text-5xl text-brand-maroon mb-2">{s.num}</div>
                <div class="text-gray-500 text-sm uppercase tracking-wide font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          LEGACY — History teaser with real photo
      ══════════════════════════════════════════════════ */}
      <section class="py-24 bg-white" aria-labelledby="legacy-heading">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="fade-in">
              <div class="section-divider left"></div>
              <span class="inline-block bg-brand-maroon/10 text-brand-maroon font-semibold text-xs px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
                Est. May 1961
              </span>
              <h2 id="legacy-heading" class="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
                Deep Roots,<br /><em class="gold-text not-italic">Growing Faith</em>
              </h2>
              <p class="text-gray-600 text-lg leading-relaxed mb-5">
                Founded in May 1961, Avenue Progressive Baptist Church has faithfully served the
                South Dallas community for over six decades. Through seasons of change and growth,
                our commitment to the Gospel has never wavered.
              </p>
              <p class="text-gray-600 leading-relaxed mb-8">
                From humble beginnings in a storefront at 2714 Grand Avenue to becoming
                "THE AVENUE" — a way of access to Jesus — our story is one of God&apos;s faithfulness.
              </p>
              <a href="/about/history"
                class="inline-flex items-center gap-2 bg-brand-charcoal hover:bg-brand-black text-white font-semibold px-7 py-3 rounded-full transition-colors shadow-md">
                Discover Our History <i class="fas fa-arrow-right text-sm"></i>
              </a>
            </div>
            <div class="relative photo-frame fade-in delay-2">
              <img
                src={PHOTOS.congregation4}
                alt="Avenue Progressive Baptist Church congregation gathered in worship"
                class="relative w-full h-80 object-cover rounded-3xl shadow-2xl z-10"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WORSHIP MOMENT — full-bleed photo with overlay
      ══════════════════════════════════════════════════ */}
      <section class="relative py-32 overflow-hidden" aria-label="Worship at THE AVENUE">
        <div class="absolute inset-0">
          <img
            src={PHOTOS.installation}
            alt="Pastoral installation and prayer at THE AVENUE"
            class="w-full h-full object-cover object-top"
            loading="lazy"
          />
          <div class="absolute inset-0" style="background: linear-gradient(135deg, rgba(17,17,17,0.85) 0%, rgba(107,26,42,0.72) 100%);"></div>
        </div>
        <div class="relative z-10 max-w-3xl mx-auto px-4 text-center text-white fade-in">
          <i class="fas fa-cross text-brand-gold text-3xl mb-6 block"></i>
          <h2 class="font-serif text-3xl md:text-5xl font-bold mb-5">
            "A Way of Access<br /><span class="gold-text">to Jesus"</span>
          </h2>
          <p class="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            The name THE AVENUE was chosen to reflect our deepest calling — to be a pathway
            that leads every person directly to the love, grace, and salvation of Jesus Christ.
          </p>
          <a href="/about/history"
            class="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold2 text-brand-charcoal font-bold px-8 py-4 rounded-full transition-all shadow-xl hover:-translate-y-0.5">
            Our Story <i class="fas fa-arrow-right text-sm"></i>
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          GIVE CTA
      ══════════════════════════════════════════════════ */}
      <section class="py-20 stats-strip relative overflow-hidden" aria-labelledby="give-heading">
        <div class="absolute inset-0 opacity-5"
          style="background-image: radial-gradient(circle, #c9a84c 1px, transparent 1px); background-size: 30px 30px;"></div>
        <div class="relative max-w-3xl mx-auto px-4 text-center fade-in">
          <div class="w-16 h-16 bg-brand-maroon/40 rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-gold/20">
            <i class="fas fa-heart text-brand-gold text-2xl"></i>
          </div>
          <h2 id="give-heading" class="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Support Our Ministry
          </h2>
          <p class="text-gray-300 text-lg leading-relaxed mb-8">
            Your generosity enables us to serve the South Dallas community, support our programs,
            and spread the Gospel. Give online securely — anytime, anywhere.
          </p>
          <a href="/give"
            class="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold2 text-brand-charcoal font-bold px-8 py-4 rounded-full transition-all shadow-xl hover:-translate-y-0.5 text-base">
            <i class="fas fa-heart"></i> Give Online
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PHOTO STRIP 2 — more congregation photos
      ══════════════════════════════════════════════════ */}
      <section class="overflow-hidden" aria-label="More photos from THE AVENUE">
        <div class="photo-grid grid grid-cols-3 md:grid-cols-6 h-48 md:h-56">
          {[
            { src: PHOTOS.pianist1,      alt: 'Pianist at THE AVENUE' },
            { src: PHOTOS.worshipPrayer, alt: 'Member in prayer at THE AVENUE' },
            { src: PHOTOS.congregation5, alt: 'Congregation at THE AVENUE' },
            { src: PHOTOS.congregation6, alt: 'THE AVENUE congregation' },
            { src: PHOTOS.couple,        alt: 'Church members at THE AVENUE' },
            { src: PHOTOS.congregation7, alt: 'THE AVENUE fellowship' },
          ].map((p, i) => (
            <div key={i} class="overflow-hidden">
              <img src={p.src} alt={p.alt} class="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CONTACT / GET IN TOUCH
      ══════════════════════════════════════════════════ */}
      <section class="py-24 bg-brand-cream" aria-labelledby="contact-home-heading">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div class="fade-in">
              <div class="section-divider left"></div>
              <h2 id="contact-home-heading" class="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal mb-5">
                We&apos;d Love to<br /><span class="gold-text">Hear From You</span>
              </h2>
              <p class="text-gray-600 text-lg leading-relaxed mb-8">
                Have a question? Need prayer? Want to learn more about THE AVENUE?
                Our team will get back to you promptly.
              </p>
              <div class="space-y-4">
                {[
                  { icon: 'fa-map-marker-alt', label: 'Address',  value: '3745 Dildock Street, Dallas, TX 75215', href: 'https://www.google.com/maps/search/?api=1&query=3745+Dildock+Street+Dallas+TX+75215', ext: true },
                  { icon: 'fa-phone',           label: 'Phone',    value: '(214) 421-0000', href: 'tel:+12144210000', ext: false },
                  { icon: 'fa-envelope',        label: 'Email',    value: 'info@avenuepbc.org', href: 'mailto:info@avenuepbc.org', ext: false },
                ].map((item, i) => (
                  <a key={i} href={item.href}
                    target={item.ext ? '_blank' : undefined}
                    rel={item.ext ? 'noopener noreferrer' : undefined}
                    class="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow group">
                    <div class="w-11 h-11 rounded-xl bg-brand-maroon flex items-center justify-center flex-shrink-0 group-hover:bg-brand-maroon2 transition-colors">
                      <i class={`fas ${item.icon} text-brand-gold text-sm`}></i>
                    </div>
                    <div>
                      <div class="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</div>
                      <div class="text-brand-charcoal font-semibold text-sm">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Contact Form */}
            <div class="bg-white rounded-3xl p-8 shadow-xl fade-in delay-2">
              <h3 class="font-serif text-2xl font-bold text-brand-charcoal mb-6">Send Us a Message</h3>
              <form id="home-contact-form" class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label for="hc-name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" id="hc-name" name="name" required placeholder="Your name" class="form-input" />
                  </div>
                  <div>
                    <label for="hc-phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" id="hc-phone" name="phone" placeholder="(214) 000-0000" class="form-input" />
                  </div>
                </div>
                <div>
                  <label for="hc-email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="hc-email" name="email" required placeholder="your@email.com" class="form-input" />
                </div>
                <div>
                  <label for="hc-subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select id="hc-subject" name="subject" class="form-input">
                    <option value="">Select a subject…</option>
                    <option>General Inquiry</option>
                    <option>Prayer Request</option>
                    <option>First-Time Visit</option>
                    <option>Ministries & Volunteering</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label for="hc-message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="hc-message" name="message" rows={4} required placeholder="How can we help you?" class="form-input resize-none"></textarea>
                </div>
                <button type="submit" id="hc-submit"
                  class="w-full bg-brand-maroon hover:bg-brand-maroon2 text-white font-semibold py-3 rounded-full transition-colors shadow-md">
                  Send Message <i class="fas fa-paper-plane ml-1"></i>
                </button>
                <div id="hc-success" class="hidden text-center text-green-700 bg-green-50 border border-green-200 rounded-xl py-3 text-sm font-medium">
                  <i class="fas fa-check-circle mr-1"></i> Thank you! We&apos;ll be in touch soon.
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{ __html: `
        document.getElementById('home-contact-form').addEventListener('submit', async function(e) {
          e.preventDefault();
          const btn = document.getElementById('hc-submit');
          btn.disabled = true; btn.textContent = 'Sending…';
          try {
            await fetch('/contact', { method: 'POST', body: new FormData(this) });
            document.getElementById('hc-success').classList.remove('hidden');
            this.reset();
          } catch(err) {}
          btn.disabled = false;
          btn.innerHTML = 'Send Message <i class="fas fa-paper-plane ml-1"></i>';
        });
      ` }} />
    </div>,
    {
      title: undefined,
      description: 'Avenue Progressive Baptist Church in South Dallas, TX. Join us Sundays at 11:15 AM for worship. A Christ-centered community serving South Dallas since 1961.',
      canonicalPath: '/'
    }
  )
}
