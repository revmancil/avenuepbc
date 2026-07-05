import type { Context } from 'hono'

const heroImage = "https://sspark.genspark.ai/cfimages?u1=UzgtRwG8h0j9%2FU0zAhhSLxYeLBe14WVPdH4DCHW7mo0KZRlvSZ0fbhwIAv9qAUYmoxJ5yzGi0uSbK%2B6aC7biFJAET564LRDWxOmfld1Ut4Gu&u2=QQx1LShUbFx47Vcn&width=2560"
const communityImg = "https://sspark.genspark.ai/cfimages?u1=Qtj30QwHU7YefhS75ieOFj4tuHKKCEhrX0nOXXelbI3LofukCrXc6GKFUWcS2QiT2of%2BfDgJbypKTZeeJgMemAuYpis%3D&u2=DlaZlJmmRscIE4rS&width=1280"
const pastorImg = "https://sspark.genspark.ai/cfimages?u1=DIe6ySYitvYvw%2Bcf6P6EaBXhSzNnmBXa5NZyMHxbkVdwnaKS9x8gD%2FJIDXn%2Bas1lNZ9dEQhmsgdFV1kY1XC1WDp6z6CxmQ%3D%3D&u2=xngxgdfFljGrYEtQ&width=1024"
const buildingImg = "https://sspark.genspark.ai/cfimages?u1=Z1azsx2AKKnl1o0g0dWV9%2FwbiGC6ZunshJ65xTInJ85vKs5QHwrkgaZHoNAp%2BKXKvM%2BrfGvQ6vKxpYXHXb8NIHjgIpbOb5JWYoUrlNun&u2=tguAxeeOeDCWBDbJ&width=1280"

export const homePage = (c: Context) => {
  return c.render(
    <div>
      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div class="absolute inset-0">
          <img
            src={heroImage}
            alt="Avenue Progressive Baptist Church congregation in worship"
            class="w-full h-full object-cover"
            loading="eager"
          />
          <div class="absolute inset-0 hero-gradient"></div>
          {/* Decorative pattern */}
          <div class="absolute inset-0 opacity-10"
            style="background-image: radial-gradient(circle, rgba(201,168,76,0.4) 1px, transparent 1px); background-size: 40px 40px;"></div>
        </div>

        {/* Content */}
        <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Badge */}
          <div class="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 backdrop-blur-sm text-brand-gold px-5 py-2 rounded-full text-sm font-semibold tracking-wide mb-8 fade-in">
            <i class="fas fa-cross text-xs"></i>
            Serving South Dallas Since 1961
          </div>

          <h1 class="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 fade-in delay-1">
            Welcome to<br />
            <span class="gold-text">THE AVENUE</span>
          </h1>

          <p class="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed fade-in delay-2">
            Avenue Progressive Baptist Church — a warm, Christ-centered family where everyone is welcomed,
            loved, and encouraged to grow in faith.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center fade-in delay-3">
            <a href="/visit" class="bg-brand-gold hover:bg-yellow-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-base">
              <i class="fas fa-map-marker-alt mr-2"></i> Plan Your Visit
            </a>
            <a href="/watch" class="bg-white/10 hover:bg-white/20 border border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 backdrop-blur-sm text-base">
              <i class="fas fa-play mr-2"></i> Watch Online
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
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
              { icon: 'fa-bible', day: 'Sunday School', time: '10:00 AM', note: 'Classes for all ages' },
              { icon: 'fa-church', day: 'Sunday Worship', time: '11:15 AM', note: 'Main service · ~90 mins' },
              { icon: 'fa-pray', day: 'Wed Prayer & Bible Study', time: '6:30 PM', note: 'Midweek gathering' },
            ].map((s, i) => (
              <div key={i} class={`time-card rounded-2xl px-6 py-5 text-center fade-in delay-${i + 1}`}>
                <div class="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center mx-auto mb-3">
                  <i class={`fas ${s.icon} text-brand-gold text-lg`}></i>
                </div>
                <div class="text-brand-gold font-serif font-bold text-2xl mb-1">{s.time}</div>
                <div class="text-white font-semibold text-sm mb-1">{s.day}</div>
                <div class="text-gray-400 text-xs">{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHO WE ARE
      ══════════════════════════════════════════════════ */}
      <section class="py-24 bg-brand-cream" aria-labelledby="who-we-are-heading">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="fade-in">
              <div class="section-divider left"></div>
              <h2 id="who-we-are-heading" class="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                A Place Where<br /><em class="text-brand-gold not-italic">You Belong</em>
              </h2>
              <p class="text-gray-600 text-lg leading-relaxed mb-6">
                For over 60 years, <strong>THE AVENUE</strong> — Avenue Progressive Baptist Church —
                has been a cornerstone of faith and community in South Dallas. We are a warm,
                Bible-believing church family where everyone is welcomed, loved, and encouraged
                to grow in Christ.
              </p>
              <p class="text-gray-600 leading-relaxed mb-8">
                Whether you&apos;re looking for a church home, exploring your faith, or searching for
                a community that cares — you'll find open doors and open hearts at THE AVENUE.
              </p>
              <div class="flex flex-wrap gap-4">
                <a href="/about/history" class="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-full transition-colors">
                  Our Story <i class="fas fa-arrow-right text-sm"></i>
                </a>
                <a href="/visit" class="inline-flex items-center gap-2 border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold px-6 py-3 rounded-full transition-colors">
                  Plan a Visit
                </a>
              </div>
            </div>
            <div class="relative fade-in delay-2">
              <div class="absolute -top-4 -right-4 w-full h-full border-2 border-brand-gold/30 rounded-3xl"></div>
              <img
                src={communityImg}
                alt="THE AVENUE congregation gathered in fellowship"
                class="relative w-full h-80 lg:h-96 object-cover rounded-3xl shadow-2xl"
                loading="lazy"
              />
              {/* Stat badge */}
              <div class="absolute -bottom-5 -left-5 bg-brand-navy text-white px-6 py-4 rounded-2xl shadow-xl">
                <div class="font-serif font-bold text-3xl text-brand-gold">60+</div>
                <div class="text-xs text-gray-300 mt-0.5">Years Serving<br />South Dallas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHAT TO EXPECT (First-Time Visitor)
      ══════════════════════════════════════════════════ */}
      <section class="py-24 bg-white" aria-labelledby="expect-heading">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14 fade-in">
            <div class="section-divider"></div>
            <h2 id="expect-heading" class="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              First Time Visiting?
            </h2>
            <p class="text-gray-500 text-lg max-w-2xl mx-auto">
              We know visiting a new church can feel uncertain. Here's exactly what to expect.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'fa-clock', title: 'Relaxed & On Time', desc: 'Sunday worship starts at 11:15 AM and lasts about 90 minutes. Arrive early so we can greet you.', delay: '1' },
              { icon: 'fa-music', title: 'Uplifting Worship', desc: 'Experience heartfelt praise through traditional hymns and contemporary gospel led by our worship team.', delay: '2' },
              { icon: 'fa-book-open', title: 'Biblical Preaching', desc: 'Pastor Carroll delivers expository, Christ-centered messages rooted in Scripture and daily life.', delay: '3' },
              { icon: 'fa-tshirt', title: 'Come As You Are', desc: "No dress code. Some come in suits, some in jeans. What matters most is that you're here.", delay: '1' },
              { icon: 'fa-child', title: 'Family Friendly', desc: 'Children are welcome in the sanctuary. Sunday School classes are available for every age group.', delay: '2' },
              { icon: 'fa-handshake', title: 'Warm Welcome', desc: 'Our greeters and members will make you feel at home from the moment you walk in.', delay: '3' },
            ].map((item, i) => (
              <div key={i} class={`bg-brand-cream rounded-2xl p-7 card-hover fade-in delay-${item.delay}`}>
                <div class="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <i class={`fas ${item.icon} text-brand-gold text-lg`}></i>
                </div>
                <h3 class="font-serif font-bold text-brand-navy text-xl mb-2">{item.title}</h3>
                <p class="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div class="text-center mt-12 fade-in">
            <a href="/visit" class="inline-flex items-center gap-2 bg-brand-gold hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-lg">
              <i class="fas fa-map-marker-alt"></i> Plan Your Visit
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PASTOR SECTION
      ══════════════════════════════════════════════════ */}
      <section class="py-24 stats-strip relative overflow-hidden" aria-labelledby="pastor-heading">
        {/* Decorative circle */}
        <div class="absolute right-0 top-0 w-96 h-96 bg-brand-gold/5 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="relative fade-in">
              <img
                src={pastorImg}
                alt="Dr. Mancil Carroll III, Senior Pastor of THE AVENUE"
                class="w-full h-[480px] object-cover object-top rounded-3xl shadow-2xl"
                loading="lazy"
              />
              <div class="absolute -bottom-4 -right-4 bg-brand-gold text-white px-6 py-4 rounded-2xl shadow-xl">
                <div class="font-serif font-bold text-xl">Dr. Mancil Carroll III</div>
                <div class="text-sm text-white/80 mt-0.5">Senior Pastor</div>
              </div>
            </div>
            <div class="fade-in delay-2">
              <div class="section-divider left"></div>
              <h2 id="pastor-heading" class="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
                A Word from<br /><span class="gold-text">Our Pastor</span>
              </h2>
              <blockquote class="pull-quote text-gray-300 mb-8">
                "THE AVENUE is more than a church — it is a family. Here you will find a people
                committed to walking with you in faith, praying alongside you, and helping you
                discover the abundant life that Jesus offers."
              </blockquote>
              <p class="text-gray-400 leading-relaxed mb-8">
                Elected as Senior Pastor in May 2025, Dr. Carroll brings over 20 years of ministry
                experience, a passion for expository preaching, and a deep love for the South Dallas
                community. He is the author of <em class="text-brand-gold">Holy, But Not Perfect</em> — a
                powerful testimony of redemption and grace.
              </p>
              <a href="/about/pastor" class="inline-flex items-center gap-2 bg-brand-gold hover:bg-yellow-500 text-white font-semibold px-7 py-3 rounded-full transition-colors">
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
            <h2 id="ministries-heading" class="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-4">Our Ministries</h2>
            <p class="text-gray-500 text-lg max-w-2xl mx-auto">
              There's a place for you at THE AVENUE. Find where you can connect, grow, and serve.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Sunday School', icon: 'fa-bible', color: 'from-blue-900 to-blue-700', time: 'Sundays at 10:00 AM', desc: 'Bible study for all ages with classes designed to help everyone grow in faith.' },
              { title: 'Youth Ministry', icon: 'fa-users', color: 'from-purple-900 to-purple-700', time: 'Fridays at 6:30 PM', desc: 'Engaging programs for teenagers focused on building strong faith foundations.' },
              { title: "Women's Ministry", icon: 'fa-heart', color: 'from-rose-900 to-rose-700', time: '2nd Saturday · 10:00 AM', desc: 'Empowering women through Bible study, fellowship, and service.' },
              { title: "Men's Ministry", icon: 'fa-shield-alt', color: 'from-green-900 to-green-700', time: '1st Saturday · 8:00 AM', desc: 'Building godly men through fellowship, accountability, and service.' },
              { title: 'Music Ministry', icon: 'fa-music', color: 'from-amber-900 to-amber-700', time: 'Thursdays at 7:00 PM', desc: 'Using the gift of music to worship God and inspire the congregation.' },
              { title: 'Hospitality Ministry', icon: 'fa-hands-helping', color: 'from-teal-900 to-teal-700', time: 'Sundays · Before & After', desc: 'Welcoming guests with warmth and creating an inviting atmosphere.' },
            ].map((m, i) => (
              <div key={i} class={`bg-gradient-to-br ${m.color} rounded-2xl p-7 card-hover fade-in delay-${(i % 3) + 1}`}>
                <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <i class={`fas ${m.icon} text-brand-gold text-xl`}></i>
                </div>
                <h3 class="font-serif font-bold text-white text-xl mb-1">{m.title}</h3>
                <div class="text-brand-gold/80 text-xs font-medium mb-3 flex items-center gap-1">
                  <i class="far fa-clock"></i> {m.time}
                </div>
                <p class="text-gray-300 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          <div class="text-center mt-12 fade-in">
            <a href="/ministries" class="inline-flex items-center gap-2 border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold px-8 py-4 rounded-full transition-colors">
              All Ministries <i class="fas fa-arrow-right text-sm"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          LEGACY / STATS BANNER
      ══════════════════════════════════════════════════ */}
      <section class="py-20 bg-brand-cream" aria-label="Church statistics">
        <div class="max-w-5xl mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '1961', label: 'Year Founded' },
              { num: '60+', label: 'Years of Ministry' },
              { num: '6', label: 'Active Ministries' },
              { num: '1', label: 'Community of Faith' },
            ].map((s, i) => (
              <div key={i} class={`fade-in delay-${i + 1}`}>
                <div class="font-serif font-bold text-4xl md:text-5xl text-brand-navy mb-2 stat-num">{s.num}</div>
                <div class="text-gray-500 text-sm uppercase tracking-wide font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          HISTORY TEASER
      ══════════════════════════════════════════════════ */}
      <section class="py-24 bg-white" aria-labelledby="legacy-heading">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="fade-in">
              <div class="section-divider left"></div>
              <div class="inline-block bg-brand-gold/10 text-brand-gold font-semibold text-xs px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
                Est. May 1961
              </div>
              <h2 id="legacy-heading" class="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                Deep Roots,<br /><em class="text-brand-gold not-italic">Growing Faith</em>
              </h2>
              <p class="text-gray-600 text-lg leading-relaxed mb-5">
                Founded in May 1961, Avenue Progressive Baptist Church has faithfully served the
                South Dallas community for over six decades. Through seasons of change and growth,
                our commitment to the Gospel and to our neighbors has never wavered.
              </p>
              <p class="text-gray-600 leading-relaxed mb-8">
                From humble beginnings in a storefront at 2714 Grand Avenue to becoming
                "THE AVENUE" — a way of access to Jesus — our story is one of God's faithfulness
                and a people dedicated to His kingdom.
              </p>
              <a href="/about/history" class="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-dark text-white font-semibold px-7 py-3 rounded-full transition-colors">
                Discover Our History <i class="fas fa-arrow-right text-sm"></i>
              </a>
            </div>
            <div class="relative fade-in delay-2">
              <img
                src={buildingImg}
                alt="Avenue Progressive Baptist Church building in South Dallas"
                class="w-full h-80 object-cover rounded-3xl shadow-2xl"
                loading="lazy"
              />
              <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-brand-navy px-5 py-3 rounded-xl shadow-lg">
                <div class="font-serif font-bold text-lg">South Dallas</div>
                <div class="text-xs text-gray-500">3745 Dildock St · 75215</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          GIVE / ONLINE GIVING CTA
      ══════════════════════════════════════════════════ */}
      <section class="py-20 stats-strip relative overflow-hidden" aria-labelledby="give-heading">
        <div class="absolute inset-0 opacity-5"
          style="background-image: radial-gradient(circle, #c9a84c 1px, transparent 1px); background-size: 30px 30px;"></div>
        <div class="relative max-w-3xl mx-auto px-4 text-center fade-in">
          <div class="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <i class="fas fa-heart text-brand-gold text-2xl"></i>
          </div>
          <h2 id="give-heading" class="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Support Our Ministry</h2>
          <p class="text-gray-300 text-lg leading-relaxed mb-8">
            Your generosity enables us to serve the South Dallas community, support our programs,
            and spread the Gospel. Give online securely — anytime, anywhere.
          </p>
          <a href="/give" class="inline-flex items-center gap-2 bg-brand-gold hover:bg-yellow-500 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-xl hover:-translate-y-0.5 text-base">
            <i class="fas fa-heart"></i> Give Online
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CONTACT / GET IN TOUCH
      ══════════════════════════════════════════════════ */}
      <section id="contact" class="py-24 bg-brand-cream" aria-labelledby="contact-home-heading">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div class="fade-in">
              <div class="section-divider left"></div>
              <h2 id="contact-home-heading" class="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                We'd Love to<br /><span class="text-brand-gold">Hear From You</span>
              </h2>
              <p class="text-gray-600 text-lg leading-relaxed mb-8">
                Have a question? Need prayer? Want to learn more about THE AVENUE?
                Drop us a message and our team will get back to you promptly.
              </p>

              {/* Info cards */}
              <div class="space-y-4">
                {[
                  { icon: 'fa-map-marker-alt', label: 'Our Location', value: '3745 Dildock Street, Dallas, TX 75215', href: 'https://www.google.com/maps/search/?api=1&query=3745+Dildock+Street+Dallas+TX+75215' },
                  { icon: 'fa-phone', label: 'Phone', value: '(214) 421-0000', href: 'tel:+12144210000' },
                  { icon: 'fa-envelope', label: 'Email', value: 'info@avenuepbc.org', href: 'mailto:info@avenuepbc.org' },
                ].map((item, i) => (
                  <a key={i} href={item.href} target={item.icon === 'fa-map-marker-alt' ? '_blank' : undefined}
                    rel={item.icon === 'fa-map-marker-alt' ? 'noopener noreferrer' : undefined}
                    class="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow group">
                    <div class="w-11 h-11 rounded-xl bg-brand-navy flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold transition-colors">
                      <i class={`fas ${item.icon} text-brand-gold group-hover:text-white text-sm transition-colors`}></i>
                    </div>
                    <div>
                      <div class="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</div>
                      <div class="text-brand-navy font-semibold text-sm">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Contact Form */}
            <div class="bg-white rounded-3xl p-8 shadow-xl fade-in delay-2">
              <h3 class="font-serif text-2xl font-bold text-brand-navy mb-6">Send Us a Message</h3>
              <form id="home-contact-form" class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label for="hc-name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" id="hc-name" name="name" required placeholder="Your name" class="form-input" />
                  </div>
                  <div>
                    <label for="hc-phone" class="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
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
                  class="w-full bg-brand-navy hover:bg-brand-dark text-white font-semibold py-3 rounded-full transition-colors shadow-md">
                  Send Message <i class="fas fa-paper-plane ml-1"></i>
                </button>
                <div id="hc-success" class="hidden text-center text-green-700 bg-green-50 border border-green-200 rounded-xl py-3 text-sm font-medium">
                  <i class="fas fa-check-circle mr-1"></i> Thank you! We'll be in touch soon.
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
          btn.disabled = true;
          btn.textContent = 'Sending…';
          try {
            const fd = new FormData(this);
            await fetch('/contact', { method: 'POST', body: fd });
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
