import type { Context } from 'hono'
import { PageHero } from './shared'
import { PHOTOS } from '../renderer'

// Five pastors — all real data from church records
const PASTORS = [
  {
    num:   '01',
    photo: 'pastor1Dickens',
    name:  'Dr. E. B. Glenn Dickens',
    title: 'Founding Pastor',
    years: '1961 – 2000',
    note:  'Opened the mission on May 7, 1961. Preached the first sermon: \u201cA Mind to Work.\u201d Served faithfully for nearly four decades.',
    current: false,
  },
  {
    num:   '02',
    photo: 'pastor2Vernon',
    name:  'Rev. Aaron Paul Vernon',
    title: 'Second Pastor',
    years: '2000 – 2011',
    note:  'Continued the legacy of Dr. Dickens, shepherding the congregation through a new century with steadfast faith and vision.',
    current: false,
  },
  {
    num:   '03',
    photo: 'pastor3Rogers',
    name:  'Rev. Elmer Rogers',
    title: 'Third Pastor',
    years: '2011 – 2013',
    note:  'Guided the church through a season of transition, maintaining the spirit of community and worship at THE AVENUE.',
    current: false,
  },
  {
    num:   '04',
    photo: 'pastor4Shaw',
    name:  'Rev. Raymond Shaw',
    title: 'Fourth Pastor',
    years: '2014 – 2024',
    note:  'Strengthened the congregation\u2019s roots in South Dallas over a decade of dedicated ministry and community service.',
    current: false,
  },
  {
    num:   '05',
    photo: 'pastorHeadshot',
    name:  'Dr. Mancil Carroll III',
    title: 'Senior Pastor',
    years: '2025 – Present',
    note:  'Elected May 2025. Holds M.Div. & D.Min. from Liberty University. Leads with a passion for expository preaching and South Dallas.',
    current: true,
  },
]

export const historyPage = (c: Context) => c.render(
  <div>
    <PageHero
      title="Our History"
      subtitle="Over 60 years of faith, community, and God's faithfulness in South Dallas."
      breadcrumb="Our History"
      bgPhoto={PHOTOS.congregation1}
    />

    {/* ══════════════════════════════════════════════
        FOUNDING STORY
    ══════════════════════════════════════════════ */}
    <section class="section section--cream">
      <div class="container--narrow">
        <div class="section-header section-header--center fade-in">
          <p class="eyebrow eyebrow--dark">Est. 1961</p>
          <div class="title-rule title-rule--center"></div>
          <h2 class="section-title section-title--maroon">A Way to Christ</h2>
        </div>
        <p class="section-body section-body--center fade-in" style="margin-bottom:1.5rem;">
          The name &ldquo;Avenue Baptist Church&rdquo; was inspired by the intersection of Grand Avenue
          and Oakland Avenue &mdash; symbolizing{' '}
          <em style="color:#6b1a2a;font-weight:600;">&ldquo;A Way to Christ.&rdquo;</em>{' '}
          For over six decades, that vision has guided everything we do.
        </p>
        <p class="section-body section-body--center fade-in">
          On May 7, 1961, Rev. E. B. Glenn Dickens opened the doors of the mission at 2714 Grand Avenue
          in South Dallas&apos;s historic &ldquo;Queen City&rdquo; neighborhood. Three weeks later he
          preached the mission&apos;s first sermon &mdash;
          <em style="color:#6b1a2a;font-weight:600;"> &ldquo;A Mind to Work.&rdquo;</em>{' '}
          Fifteen individuals united with the congregation that day, and a community of faith was born.
        </p>
      </div>
    </section>

    {/* ══════════════════════════════════════════════
        FOUNDING PASTOR + OLD BUILDING — side by side
    ══════════════════════════════════════════════ */}
    <section class="section section--sm" style="background:#f5f5f5;">
      <div class="container">
        <div class="history-photos fade-in" style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;">

          {/* Founding Pastor — Dr. E. B. Glenn Dickens */}
          <figure style="margin:0;">
            <div style="position:relative;overflow:hidden;background:#111;aspect-ratio:4/5;">
              <img
                src={PHOTOS.pastor1Dickens}
                alt="Dr. E. B. Glenn Dickens, Founding Pastor of Avenue Baptist Church, 1961–2000"
                style="width:100%;height:100%;object-fit:cover;object-position:top center;display:block;"
                loading="lazy"
              />
              <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(17,17,17,0.92));padding:1.75rem 1.25rem 1.25rem;">
                <p style="color:#c9a84c;font-size:0.65rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:0.3rem;">Founding Pastor</p>
                <p style="color:#fff;font-family:'Playfair Display',serif;font-size:1.15rem;font-weight:700;line-height:1.2;margin-bottom:0.2rem;">Dr. E. B. Glenn Dickens</p>
                <p style="color:rgba(255,255,255,0.6);font-size:0.8rem;">1961 &ndash; 2000</p>
              </div>
            </div>
            <figcaption style="font-size:0.78rem;color:#888;margin-top:0.65rem;text-align:center;font-style:italic;line-height:1.5;">
              Dr. E. B. Glenn Dickens opened the mission on May 7, 1961,
              and served as founding pastor for nearly four decades.
            </figcaption>
          </figure>

          {/* Original Building */}
          <figure style="margin:0;">
            <div style="position:relative;overflow:hidden;background:#111;aspect-ratio:4/5;">
              <img
                src={PHOTOS.oldBuilding}
                alt="Original Avenue Baptist Church building, South Dallas, TX — circa 1961"
                style="width:100%;height:100%;object-fit:cover;object-position:center 30%;display:block;"
                loading="lazy"
              />
              <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(17,17,17,0.92));padding:1.75rem 1.25rem 1.25rem;">
                <p style="color:#c9a84c;font-size:0.65rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:0.3rem;">Original Building</p>
                <p style="color:#fff;font-family:'Playfair Display',serif;font-size:1.15rem;font-weight:700;line-height:1.2;margin-bottom:0.2rem;">Avenue Baptist Church</p>
                <p style="color:rgba(255,255,255,0.6);font-size:0.8rem;">South Dallas, TX &mdash; Est. 1961</p>
              </div>
            </div>
            <figcaption style="font-size:0.78rem;color:#888;margin-top:0.65rem;text-align:center;font-style:italic;line-height:1.5;">
              The original Avenue Baptist Church building where the congregation
              first gathered in 1961.
            </figcaption>
          </figure>

        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════════
        FIVE PASTORS — photo cards + bordered grid
    ══════════════════════════════════════════════ */}
    <section class="section" aria-labelledby="pastors-heading">
      <div class="container">
        <div class="section-header section-header--center fade-in">
          <p class="eyebrow">Our Shepherds</p>
          <div class="title-rule title-rule--center"></div>
          <h2 id="pastors-heading" class="section-title">Leadership Through the Years</h2>
          <p class="section-body section-body--center" style="margin-top:1rem;">
            Over six decades, Avenue Progressive has been blessed with faithful pastoral
            leadership. Only five pastors have served this congregation.
          </p>
        </div>

        {/* Photo cards row */}
        <div class="pastors-photos fade-in" style="display:grid;grid-template-columns:repeat(5,1fr);gap:1.5rem;margin-bottom:3rem;">
          {PASTORS.map((p) => (
            <div key={p.num} style="display:flex;flex-direction:column;align-items:center;text-align:center;">
              {/* Portrait */}
              <div style={`position:relative;overflow:hidden;width:100%;aspect-ratio:3/4;margin-bottom:0.85rem;${p.current ? 'border:3px solid #6b1a2a;' : 'border:1px solid #e5e5e5;'}`}>
                <img
                  src={(PHOTOS as any)[p.photo]}
                  alt={`${p.name}, ${p.title}, ${p.years}`}
                  style="width:100%;height:100%;object-fit:cover;object-position:top center;display:block;"
                  loading="lazy"
                />
                {p.current && (
                  <div style="position:absolute;top:0.6rem;right:0.6rem;background:#6b1a2a;color:#c9a84c;font-size:0.6rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:0.2rem 0.5rem;">
                    Current
                  </div>
                )}
              </div>
              {/* Name & years */}
              <p style={`font-family:'Playfair Display',serif;font-size:0.9rem;font-weight:700;line-height:1.25;margin-bottom:0.25rem;${p.current ? 'color:#6b1a2a;' : 'color:#111;'}`}>
                {p.name}
              </p>
              <p style="font-size:0.72rem;color:#888;letter-spacing:0.04em;">
                {p.years}
              </p>
            </div>
          ))}
        </div>

        {/* Detail grid — bordered Wheeler-style */}
        <div class="pastors-grid fade-in" style="display:grid;grid-template-columns:repeat(5,1fr);gap:0;border:1px solid #e5e5e5;">
          {PASTORS.map((p) => (
            <div key={p.num} style={`padding:1.75rem 1.5rem;border-right:1px solid #e5e5e5;position:relative;${p.current ? 'background:#6b1a2a;' : 'background:#fff;'}`}>
              {/* Number */}
              <div style={`font-family:'Playfair Display',serif;font-size:2.25rem;font-weight:700;line-height:1;margin-bottom:0.75rem;${p.current ? 'color:rgba(255,255,255,0.15);' : 'color:#ebebeb;'}`}>
                {p.num}
              </div>
              {/* Years */}
              <div style="font-size:0.65rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#c9a84c;margin-bottom:0.5rem;">
                {p.years}
              </div>
              {/* Name */}
              <h3 style={`font-family:'Playfair Display',serif;font-size:0.95rem;font-weight:700;line-height:1.25;margin-bottom:0.3rem;${p.current ? 'color:#fff;' : 'color:#111;'}`}>
                {p.name}
              </h3>
              {/* Title */}
              <p style={`font-size:0.7rem;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:0.75rem;${p.current ? 'color:rgba(255,255,255,0.55);' : 'color:#999;'}`}>
                {p.title}
              </p>
              {/* Note */}
              <p style={`font-size:0.8rem;line-height:1.65;${p.current ? 'color:rgba(255,255,255,0.72);' : 'color:#666;'}`}>
                {p.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════════
        TIMELINE
    ══════════════════════════════════════════════ */}
    <section class="section section--cream" aria-labelledby="timeline-heading">
      <div class="container--narrow">
        <div class="section-header section-header--center fade-in">
          <p class="eyebrow eyebrow--dark">Through the Decades</p>
          <div class="title-rule title-rule--center"></div>
          <h2 id="timeline-heading" class="section-title section-title--maroon">Our Story</h2>
        </div>

        <div style="position:relative;">
          <div class="timeline-line" style="position:absolute;left:50%;top:0;bottom:0;width:1px;background:rgba(201,168,76,0.3);transform:translateX(-50%);"></div>
          <div style="display:flex;flex-direction:column;gap:3rem;">
            {[
              { year: '1961', title: 'The Mission Opens', side: 'left',
                text: 'On May 7, 1961, Rev. E. B. Glenn Dickens opened the doors of the mission at 2714 Grand Avenue. When no one came on the first night, he turned to God for strength. Three weeks later he preached the first sermon \u2014 \u201cA Mind to Work.\u201d' },
              { year: '1961', title: 'First Members United', side: 'right',
                text: 'Fifteen individuals united with the congregation after that first sermon. The church was officially organized by Mount Sinai Baptist Church, and Rev. Dickens was appointed its first pastor. A community of faith was born.' },
              { year: '1961\u20132000', title: 'Dr. Dickens\u2019 Founding Era', side: 'left',
                text: 'Under Dr. Dickens\u2019 nearly four decades of leadership, THE AVENUE became a spiritual anchor in South Dallas \u2014 faithfully preaching the Gospel through the civil rights era, urban renewal, and community transformation.' },
              { year: '2000\u20132011', title: 'Rev. Aaron Paul Vernon', side: 'right',
                text: 'Rev. Vernon assumed the pastorate in 2000, carrying the baton of faith into a new century. His steady leadership kept the congregation rooted in its founding values of worship and community.' },
              { year: '2011\u20132013', title: 'Rev. Elmer Rogers', side: 'left',
                text: 'Rev. Rogers served as the third pastor, guiding the congregation through a season of prayer and transition, maintaining the spirit of worship and fellowship at THE AVENUE.' },
              { year: '2014\u20132024', title: 'Rev. Raymond Shaw', side: 'right',
                text: 'Rev. Shaw served for a decade as fourth pastor, deepening the church\u2019s roots in South Dallas through dedicated ministry, outreach, and steadfast service to families across the community.' },
              { year: '2025', title: 'Dr. Mancil Carroll III', side: 'left',
                text: 'In May 2025, Dr. Mancil Carroll III was elected Senior Pastor. Holding a Master of Divinity and Doctor of Ministry from Liberty University, Dr. Carroll leads with fresh vision and a deep love for South Dallas.' },
              { year: 'Today', title: 'Continuing the Legacy', side: 'right',
                text: 'Avenue Progressive Baptist Church continues as a cornerstone of faith \u2014 Sunday School at 10:00 AM, Sunday Worship at 11:15 AM, and Wednesday Prayer & Bible Study at 6:30 PM. Our doors and hearts remain open to all.' },
            ].map((item, i) => (
              <div key={i} style="display:grid;grid-template-columns:1fr 2rem 1fr;align-items:start;gap:1.5rem;" class={`fade-in delay-${(i % 3) + 1}`}>
                <div>
                  {item.side === 'left' && (
                    <div style="background:#fff;padding:1.5rem;border:1px solid #e5e5e5;text-align:right;">
                      <span style="display:inline-block;background:#6b1a2a;color:#c9a84c;font-size:0.65rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;padding:0.2rem 0.65rem;margin-bottom:0.6rem;">{item.year}</span>
                      <h3 style="font-family:'Playfair Display',serif;font-size:1.05rem;font-weight:700;color:#111;margin-bottom:0.5rem;">{item.title}</h3>
                      <p style="font-size:0.875rem;color:#666;line-height:1.7;">{item.text}</p>
                    </div>
                  )}
                </div>
                <div style="display:flex;justify-content:center;padding-top:1.25rem;">
                  <div style="width:14px;height:14px;border-radius:50%;background:#c9a84c;border:3px solid #fdf8f0;box-shadow:0 0 0 2px #c9a84c;flex-shrink:0;z-index:1;"></div>
                </div>
                <div>
                  {item.side === 'right' && (
                    <div style="background:#fff;padding:1.5rem;border:1px solid #e5e5e5;">
                      <span style="display:inline-block;background:#6b1a2a;color:#c9a84c;font-size:0.65rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;padding:0.2rem 0.65rem;margin-bottom:0.6rem;">{item.year}</span>
                      <h3 style="font-family:'Playfair Display',serif;font-size:1.05rem;font-weight:700;color:#111;margin-bottom:0.5rem;">{item.title}</h3>
                      <p style="font-size:0.875rem;color:#666;line-height:1.7;">{item.text}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════════
        PHOTO STRIP
    ══════════════════════════════════════════════ */}
    <div style="display:grid;grid-template-columns:repeat(3,1fr);height:260px;">
      <div style="position:relative;overflow:hidden;">
        <img src={PHOTOS.ushers} alt="Church ushers" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy" />
        <div style="position:absolute;inset:0;background:rgba(107,26,42,0.2);"></div>
      </div>
      <div style="position:relative;overflow:hidden;">
        <img src={PHOTOS.worshipPraise} alt="Congregation worshipping" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy" />
        <div style="position:absolute;inset:0;background:rgba(17,17,17,0.2);"></div>
      </div>
      <div style="position:relative;overflow:hidden;">
        <img src={PHOTOS.womenGroup} alt="Women of the church" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy" />
        <div style="position:absolute;inset:0;background:rgba(107,26,42,0.2);"></div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════
        CTA
    ══════════════════════════════════════════════ */}
    <section class="section section--dark fade-in" aria-labelledby="history-cta">
      <div class="container--narrow" style="text-align:center;">
        <p class="eyebrow eyebrow--light" style="display:block;margin-bottom:1rem;">Join the Story</p>
        <div class="title-rule title-rule--center"></div>
        <h2 id="history-cta" class="section-title section-title--white" style="margin-bottom:1rem;">
          Become Part of Our Legacy
        </h2>
        <p style="color:rgba(255,255,255,0.7);font-size:1.0625rem;line-height:1.8;max-width:540px;margin:0 auto 2.5rem;">
          Join us this Sunday and write the next chapter with us.
        </p>
        <a href="/visit" class="btn btn-gold">Plan Your Visit</a>
      </div>
    </section>
  </div>,
  {
    title: 'Our History',
    description: 'Discover the 60+ year story of Avenue Progressive Baptist Church in South Dallas — from a 1961 storefront mission to THE AVENUE, a way of access to Jesus.',
    canonicalPath: '/about/history'
  }
)
