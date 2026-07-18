import type { Context } from 'hono'
import { PageHero } from './shared'
import { PHOTOS } from '../renderer'

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
        <p class="section-body section-body--center fade-in" style="margin-bottom:2rem;">
          The name &ldquo;Avenue Baptist Church&rdquo; was inspired by the intersection of Grand Avenue
          and Oakland Avenue &mdash; symbolizing{' '}
          <em style="color:#6b1a2a;font-weight:600;">&ldquo;A Way to Christ.&rdquo;</em>{' '}
          For over six decades, that vision has guided everything we do.
        </p>
        <p class="section-body section-body--center fade-in">
          On May 7, 1961, Rev. E. B. Glenn Dickens opened the doors of the mission at 2714 Grand Avenue
          in South Dallas&apos;s historic &ldquo;Queen City&rdquo; neighborhood. Three weeks later,
          he preached the mission&apos;s first sermon &mdash;
          <em style="color:#6b1a2a;font-weight:600;"> &ldquo;A Mind to Work.&rdquo;</em>{' '}
          Fifteen individuals united with the congregation that day, and a community of faith was born.
        </p>
      </div>
    </section>

    {/* ══════════════════════════════════════════════
        FOUNDING PASTOR + OLD BUILDING — 2-col
    ══════════════════════════════════════════════ */}
    <section class="section section--sm" style="background:#f5f5f5;">
      <div class="container">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;" class="history-photos fade-in">

          {/* Founding Pastor */}
          <figure style="margin:0;">
            <div style="position:relative;overflow:hidden;background:#1e1e1e;aspect-ratio:3/4;display:flex;align-items:center;justify-content:center;">
              {PHOTOS.foundingPastor ? (
                <img
                  src={PHOTOS.foundingPastor}
                  alt="Rev. E. B. Glenn Dickens — Founding Pastor, 1961"
                  style="width:100%;height:100%;object-fit:cover;object-position:top center;display:block;"
                  loading="lazy"
                />
              ) : (
                <div style="text-align:center;padding:2rem;color:rgba(255,255,255,0.4);">
                  <i class="fas fa-user" style="font-size:4rem;display:block;margin-bottom:1rem;"></i>
                  <span style="font-size:0.8rem;letter-spacing:0.1em;text-transform:uppercase;">Photo Coming Soon</span>
                </div>
              )}
              <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(17,17,17,0.92));padding:1.5rem 1.25rem 1.25rem;">
                <p style="color:#c9a84c;font-size:0.65rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:0.3rem;">Founding Pastor</p>
                <p style="color:#fff;font-family:'Playfair Display',serif;font-size:1.1rem;font-weight:700;line-height:1.2;">Rev. E. B. Glenn Dickens</p>
                <p style="color:rgba(255,255,255,0.6);font-size:0.8rem;margin-top:0.2rem;">1961 &ndash; [year]</p>
              </div>
            </div>
            <figcaption style="font-size:0.78rem;color:#888;margin-top:0.6rem;text-align:center;font-style:italic;">
              Rev. E. B. Glenn Dickens, who opened the mission on May 7, 1961
            </figcaption>
          </figure>

          {/* Old Church Building */}
          <figure style="margin:0;">
            <div style="position:relative;overflow:hidden;background:#1e1e1e;aspect-ratio:3/4;display:flex;align-items:center;justify-content:center;">
              {PHOTOS.oldBuilding ? (
                <img
                  src={PHOTOS.oldBuilding}
                  alt="Original Avenue Baptist Church building at 2714 Grand Avenue, Dallas TX"
                  style="width:100%;height:100%;object-fit:cover;display:block;"
                  loading="lazy"
                />
              ) : (
                <div style="text-align:center;padding:2rem;color:rgba(255,255,255,0.4);">
                  <i class="fas fa-church" style="font-size:4rem;display:block;margin-bottom:1rem;"></i>
                  <span style="font-size:0.8rem;letter-spacing:0.1em;text-transform:uppercase;">Photo Coming Soon</span>
                </div>
              )}
              <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(17,17,17,0.92));padding:1.5rem 1.25rem 1.25rem;">
                <p style="color:#c9a84c;font-size:0.65rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:0.3rem;">Original Building</p>
                <p style="color:#fff;font-family:'Playfair Display',serif;font-size:1.1rem;font-weight:700;line-height:1.2;">2714 Grand Avenue</p>
                <p style="color:rgba(255,255,255,0.6);font-size:0.8rem;margin-top:0.2rem;">South Dallas, TX &mdash; Est. 1961</p>
              </div>
            </div>
            <figcaption style="font-size:0.78rem;color:#888;margin-top:0.6rem;text-align:center;font-style:italic;">
              The original mission at Grand &amp; Oakland Ave., where it all began
            </figcaption>
          </figure>

        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════════
        FIVE PASTORS
    ══════════════════════════════════════════════ */}
    <section class="section" aria-labelledby="pastors-heading">
      <div class="container">
        <div class="section-header section-header--center fade-in">
          <p class="eyebrow">Pastoral Legacy</p>
          <div class="title-rule title-rule--center"></div>
          <h2 id="pastors-heading" class="section-title">Five Shepherds, One Mission</h2>
          <p class="section-body section-body--center" style="margin-top:1rem;">
            Since 1961, five pastors have faithfully led Avenue Progressive Baptist Church,
            each carrying forward the founding vision of &ldquo;a way of access to Jesus.&rdquo;
          </p>
        </div>

        <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:0;border:1px solid #e5e5e5;" class="pastors-grid fade-in">
          {[
            {
              name: 'Rev. E. B. Glenn Dickens',
              title: 'Founding Pastor',
              years: '1961 – [year]',
              note: 'Opened the mission on May 7, 1961. Preached the first sermon: "A Mind to Work."',
              num: '01',
            },
            {
              name: 'Rev. [Pastor 2]',
              title: 'Second Pastor',
              years: '[year] – [year]',
              note: 'Continued the legacy of faith and community service in South Dallas.',
              num: '02',
            },
            {
              name: 'Rev. [Pastor 3]',
              title: 'Third Pastor',
              years: '[year] – [year]',
              note: 'Guided the congregation through growth and transition.',
              num: '03',
            },
            {
              name: 'Rev. [Pastor 4]',
              title: 'Fourth Pastor',
              years: '[year] – [year]',
              note: 'Strengthened the church\'s roots in the South Dallas community.',
              num: '04',
            },
            {
              name: 'Dr. Mancil Carroll III',
              title: 'Senior Pastor',
              years: '2025 – Present',
              note: 'Elected May 2025. Holds M.Div. & D.Min. from Liberty University.',
              num: '05',
              current: true,
            },
          ].map((p) => (
            <div key={p.num} style={`padding:2rem 1.5rem;border-right:1px solid #e5e5e5;position:relative;${p.current ? 'background:#6b1a2a;color:#fff;' : 'background:#fff;'}`}>
              {/* Number */}
              <div style={`font-family:'Playfair Display',serif;font-size:2.5rem;font-weight:700;line-height:1;margin-bottom:1rem;${p.current ? 'color:rgba(255,255,255,0.2);' : 'color:#e5e5e5;'}`}>
                {p.num}
              </div>
              {/* Years badge */}
              <div style={`font-size:0.65rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:0.6rem;${p.current ? 'color:#c9a84c;' : 'color:#c9a84c;'}`}>
                {p.years}
              </div>
              {/* Name */}
              <h3 style={`font-family:'Playfair Display',serif;font-size:1rem;font-weight:700;line-height:1.25;margin-bottom:0.35rem;${p.current ? 'color:#fff;' : 'color:#111;'}`}>
                {p.name}
              </h3>
              {/* Title */}
              <p style={`font-size:0.75rem;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:0.85rem;${p.current ? 'color:rgba(255,255,255,0.65);' : 'color:#888;'}`}>
                {p.title}
              </p>
              {/* Note */}
              <p style={`font-size:0.825rem;line-height:1.65;${p.current ? 'color:rgba(255,255,255,0.75);' : 'color:#666;'}`}>
                {p.note}
              </p>
              {/* Current indicator */}
              {p.current && (
                <div style="position:absolute;top:1.25rem;right:1.25rem;background:#c9a84c;color:#111;font-size:0.6rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:0.2rem 0.5rem;">
                  Current
                </div>
              )}
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
          {/* Center line */}
          <div style="position:absolute;left:50%;top:0;bottom:0;width:1px;background:rgba(201,168,76,0.3);transform:translateX(-50%);" class="timeline-line"></div>

          <div style="display:flex;flex-direction:column;gap:3rem;">
            {[
              {
                year: '1961',
                title: 'The Mission Opens',
                text: 'On May 7, 1961, Rev. E. B. Glenn Dickens opened the doors of the mission at 2714 Grand Avenue. When no one came on the first night, he turned to God for strength. Three weeks later he preached the first sermon — "A Mind to Work."',
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
                text: 'Through the civil rights movement, urban renewal, and the changing landscape of South Dallas, THE AVENUE stood firm as a spiritual anchor — ministering to families, hosting youth programs, and faithfully preaching the Gospel.',
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
                text: 'In May 2025, Dr. Mancil Carroll III was elected Senior Pastor. Holding a Master of Divinity and Doctor of Ministry from Liberty University, Dr. Carroll carries the legacy forward with fresh vision and a deep love for South Dallas.',
                side: 'left',
              },
              {
                year: 'Today',
                title: 'Continuing the Legacy',
                text: 'Avenue Progressive Baptist Church continues as a cornerstone of faith in South Dallas — Sunday School at 10:00 AM, Sunday Worship at 11:15 AM, and Wednesday Prayer & Bible Study at 6:30 PM. Our doors and hearts remain open to all.',
                side: 'right',
              },
            ].map((item, i) => (
              <div key={i} style="display:grid;grid-template-columns:1fr 2rem 1fr;align-items:start;gap:1.5rem;" class={`fade-in delay-${(i % 3) + 1}`}>
                {/* Left slot */}
                <div style={item.side === 'left' ? '' : 'visibility:hidden;'}>
                  {item.side === 'left' && (
                    <div style="background:#fff;padding:1.5rem;border:1px solid #e5e5e5;text-align:right;">
                      <span style="display:inline-block;background:#6b1a2a;color:#c9a84c;font-size:0.65rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;padding:0.2rem 0.65rem;margin-bottom:0.6rem;">
                        {item.year}
                      </span>
                      <h3 style="font-family:'Playfair Display',serif;font-size:1.05rem;font-weight:700;color:#111;margin-bottom:0.5rem;">{item.title}</h3>
                      <p style="font-size:0.875rem;color:#666;line-height:1.7;">{item.text}</p>
                    </div>
                  )}
                </div>
                {/* Center dot */}
                <div style="display:flex;justify-content:center;padding-top:1.25rem;">
                  <div style="width:14px;height:14px;border-radius:50%;background:#c9a84c;border:3px solid #fdf8f0;box-shadow:0 0 0 2px #c9a84c;flex-shrink:0;z-index:1;"></div>
                </div>
                {/* Right slot */}
                <div style={item.side === 'right' ? '' : 'visibility:hidden;'}>
                  {item.side === 'right' && (
                    <div style="background:#fff;padding:1.5rem;border:1px solid #e5e5e5;">
                      <span style="display:inline-block;background:#6b1a2a;color:#c9a84c;font-size:0.65rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;padding:0.2rem 0.65rem;margin-bottom:0.6rem;">
                        {item.year}
                      </span>
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
