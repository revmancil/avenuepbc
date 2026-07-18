import type { Context } from 'hono'
import { PHOTOS } from '../renderer'

export const homePage = (c: Context) => c.render(
  <>
    {/* ══════════════════════════════════════════════
        HERO — Full-screen with 3-line serif tagline
    ══════════════════════════════════════════════ */}
    <section class="hero-section" aria-label="Welcome to THE AVENUE">
      <img
        src={PHOTOS.heroSanctuary}
        alt="Avenue Progressive Baptist Church congregation in worship"
        class="hero-bg"
        loading="eager"
        fetchpriority="high"
      />
      <div class="hero-overlay"></div>
      <div class="hero-content fade-in">
        <p class="eyebrow eyebrow--light" style="margin-bottom:1.5rem;">South Dallas, TX &mdash; Est. 1961</p>
        <h1 class="hero-tagline">
          <span>Worshiping.</span>
          <span>Witnessing.</span>
          <span>Welcoming.</span>
        </h1>
        <p class="hero-sub">
          Join us every Sunday at THE AVENUE &mdash; a Christ-centered family
          committed to love, service, and transforming our community.
        </p>
        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
          <a href="/visit" class="btn btn-primary">Plan a Visit</a>
          <a href="/watch" class="btn btn-outline-white">Watch Online</a>
        </div>
      </div>
      <div class="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <i class="fas fa-chevron-down"></i>
      </div>
    </section>

    {/* ══════════════════════════════════════════════
        SERVICE TIMES BAR
    ══════════════════════════════════════════════ */}
    <div class="times-bar" role="complementary" aria-label="Service schedule">
      <div class="container" style="display:flex;align-items:center;justify-content:center;gap:2.5rem;flex-wrap:wrap;">
        <span><strong>Sunday School</strong> &mdash; 10:00 AM</span>
        <span style="color:rgba(255,255,255,0.3);">|</span>
        <span><strong>Sunday Worship</strong> &mdash; 11:15 AM</span>
        <span style="color:rgba(255,255,255,0.3);">|</span>
        <span><strong>Wed Prayer &amp; Bible Study</strong> &mdash; 6:30 PM</span>
        <a href="/visit" style="color:#c9a84c;font-size:0.78rem;font-weight:700;letter-spacing:0.1em;text-decoration:none;text-transform:uppercase;margin-left:0.5rem;">
          Get Directions &rarr;
        </a>
      </div>
    </div>

    {/* ══════════════════════════════════════════════
        PASTOR SECTION — Dark 2-col grid
    ══════════════════════════════════════════════ */}
    <section class="pastor-section" aria-labelledby="pastor-heading">
      <div class="pastor-photo">
        <img
          src={PHOTOS.pastorHeadshot}
          alt="Senior Pastor Dr. Marcus A. Carroll"
          loading="lazy"
        />
      </div>
      <div class="pastor-content fade-in">
        <p class="eyebrow eyebrow--light">Leadership</p>
        <div class="title-rule"></div>
        <h2 id="pastor-heading" class="section-title section-title--white" style="margin-bottom:1.25rem;">
          Dr. Marcus A. Carroll
        </h2>
        <p style="font-size:0.8rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#c9a84c;margin-bottom:1.5rem;">
          Senior Pastor &amp; Teacher
        </p>
        <p style="color:rgba(255,255,255,0.72);font-size:1rem;line-height:1.8;margin-bottom:1.25rem;">
          Dr. Carroll leads THE AVENUE with a passion for Scripture, community, and raising
          up the next generation of believers. Under his leadership, our church has grown
          in faith and service throughout South Dallas.
        </p>
        <p style="color:rgba(255,255,255,0.72);font-size:1rem;line-height:1.8;margin-bottom:2rem;">
          A graduate of Dallas Theological Seminary, Dr. Carroll brings depth of
          knowledge and warmth of spirit to every Sunday message and pastoral encounter.
        </p>
        <a href="/about/pastor" class="btn btn-outline-white" style="align-self:flex-start;">
          Meet Our Pastor
        </a>
      </div>
    </section>

    {/* ══════════════════════════════════════════════
        FEATURED ANNOUNCEMENTS / EVENTS
    ══════════════════════════════════════════════ */}
    <section class="section section--light" aria-labelledby="events-heading">
      <div class="container">
        <div class="section-header section-header--center fade-in">
          <p class="eyebrow">What&apos;s Happening</p>
          <div class="title-rule title-rule--center"></div>
          <h2 id="events-heading" class="section-title">Featured Announcements</h2>
        </div>

        <div class="event-grid fade-in">
          <article class="event-card">
            <div class="event-card__date">Sunday, July 20, 2026</div>
            <h3 class="event-card__title">Annual Church Anniversary</h3>
            <p class="event-card__desc">
              Join us as we celebrate 65 years of faith, fellowship, and service
              in South Dallas. Special guest preacher and celebration reception to follow.
            </p>
            <a href="/events" class="event-card__link">
              Learn More <i class="fas fa-arrow-right" style="font-size:0.7rem;"></i>
            </a>
          </article>

          <article class="event-card">
            <div class="event-card__date">Wednesday, July 23, 2026</div>
            <h3 class="event-card__title">Mid-Week Prayer &amp; Bible Study</h3>
            <p class="event-card__desc">
              Gather with us every Wednesday at 6:30 PM for an evening of prayer,
              worship, and in-depth Bible study led by Pastor Carroll.
            </p>
            <a href="/events" class="event-card__link">
              Learn More <i class="fas fa-arrow-right" style="font-size:0.7rem;"></i>
            </a>
          </article>

          <article class="event-card">
            <div class="event-card__date">Saturday, August 2, 2026</div>
            <h3 class="event-card__title">Community Back-to-School Drive</h3>
            <p class="event-card__desc">
              Help us equip South Dallas students for success. Donate school supplies
              or volunteer at our annual back-to-school giveaway event.
            </p>
            <a href="/events" class="event-card__link">
              Learn More <i class="fas fa-arrow-right" style="font-size:0.7rem;"></i>
            </a>
          </article>

          <article class="event-card">
            <div class="event-card__date">Sunday, August 10, 2026</div>
            <h3 class="event-card__title">New Members Sunday</h3>
            <p class="event-card__desc">
              We welcome all who are new to THE AVENUE family. Orientation and
              membership class information available at the Welcome Center.
            </p>
            <a href="/visit" class="event-card__link">
              Plan a Visit <i class="fas fa-arrow-right" style="font-size:0.7rem;"></i>
            </a>
          </article>
        </div>

        <div class="fade-in" style="text-align:center;margin-top:3rem;">
          <a href="/events" class="btn btn-outline-dark">View All Events</a>
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════════
        MISSION STRIP — Dark italic full-width
    ══════════════════════════════════════════════ */}
    <div class="mission-strip" role="complementary" aria-label="Our mission">
      <div class="container--narrow fade-in">
        <p class="eyebrow eyebrow--light" style="display:block;text-align:center;margin-bottom:1.5rem;">Our Mission</p>
        <blockquote class="mission-text">
          &ldquo;To worship God with authenticity, witness to our community with boldness,
          and welcome all people with the unconditional love of Jesus Christ.&rdquo;
        </blockquote>
      </div>
    </div>

    {/* ══════════════════════════════════════════════
        PHOTO PANELS — Wheeler alternating full-bleed
    ══════════════════════════════════════════════ */}

    {/* Panel 1: Ministries (photo left, dark right) */}
    <div class="photo-panel fade-in" aria-label="Ministries">
      <div class="photo-panel__img">
        <img
          src={PHOTOS.worshipFull}
          alt="Avenue congregation in full worship"
          loading="lazy"
        />
      </div>
      <div class="photo-panel__body photo-panel__body--dark">
        <p class="eyebrow eyebrow--light">Serve &amp; Grow</p>
        <div class="title-rule"></div>
        <h2 class="section-title section-title--white" style="margin-bottom:1.25rem;">
          Ministries for Every Season
        </h2>
        <p style="color:rgba(255,255,255,0.72);font-size:1rem;line-height:1.8;margin-bottom:2rem;">
          From youth and young adults to seniors, choir, ushers, and community outreach &mdash;
          THE AVENUE has a place for you to belong, grow, and serve.
        </p>
        <a href="/ministries" class="btn btn-outline-white" style="align-self:flex-start;">
          Explore Ministries
        </a>
      </div>
    </div>

    {/* Panel 2: Worship (maroon left, photo right) */}
    <div class="photo-panel photo-panel--reverse fade-in" aria-label="Worship experience">
      <div class="photo-panel__img">
        <img
          src={PHOTOS.worshipPraise}
          alt="Congregation in praise and worship"
          loading="lazy"
        />
      </div>
      <div class="photo-panel__body photo-panel__body--maroon">
        <p class="eyebrow eyebrow--light">Sunday Experience</p>
        <div class="title-rule"></div>
        <h2 class="section-title section-title--white" style="margin-bottom:1.25rem;">
          Come Experience Worship
        </h2>
        <p style="color:rgba(255,255,255,0.72);font-size:1rem;line-height:1.8;margin-bottom:2rem;">
          Our Sunday morning services are filled with powerful music, relevant teaching,
          and the warm welcome of a church family that truly cares about you.
        </p>
        <a href="/visit" class="btn btn-outline-white" style="align-self:flex-start;">
          Plan Your Visit
        </a>
      </div>
    </div>

    {/* Panel 3: Watch Online (photo left, cream right) */}
    <div class="photo-panel fade-in" aria-label="Watch online">
      <div class="photo-panel__img">
        <img
          src={PHOTOS.congregation2}
          alt="Congregation members connected in community"
          loading="lazy"
        />
      </div>
      <div class="photo-panel__body photo-panel__body--cream">
        <p class="eyebrow eyebrow--dark">Online Ministry</p>
        <div class="title-rule"></div>
        <h2 class="section-title" style="margin-bottom:1.25rem;">
          Worship From Anywhere
        </h2>
        <p style="color:#555;font-size:1rem;line-height:1.8;margin-bottom:2rem;">
          Can&apos;t make it in person? Watch our live stream every Sunday at 11:15 AM
          and access our full library of messages on YouTube and Facebook.
        </p>
        <a href="/watch" class="btn btn-primary" style="align-self:flex-start;">
          Watch Online
        </a>
      </div>
    </div>

    {/* ══════════════════════════════════════════════
        SCRIPTURE QUOTE
    ══════════════════════════════════════════════ */}
    <div class="scripture-block fade-in" role="complementary" aria-label="Scripture">
      <p class="eyebrow" style="display:block;text-align:center;margin-bottom:1.25rem;">A Word of Truth</p>
      <blockquote class="scripture-text">
        &ldquo;For where two or three are gathered in my name,
        there am I among them.&rdquo;
      </blockquote>
      <cite class="scripture-ref">Matthew 18:20 &mdash; ESV</cite>
    </div>

    {/* ══════════════════════════════════════════════
        COMMUNITY PHOTO STRIP
    ══════════════════════════════════════════════ */}
    <section class="section section--sm" aria-label="Our congregation">
      <div class="container">
        <div class="section-header section-header--center fade-in">
          <p class="eyebrow">Our Family</p>
          <div class="title-rule title-rule--center"></div>
          <h2 class="section-title">A Community of Faith</h2>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0;overflow:hidden;" class="fade-in">
          {[
            [PHOTOS.congregation3, 'Members gathering after Sunday service'],
            [PHOTOS.installation, 'Pastor Carroll installation service'],
            [PHOTOS.congregation5, 'Church family in fellowship'],
          ].map(([src, alt]) => (
            <div style="position:relative;overflow:hidden;aspect-ratio:4/3;" key={src}>
              <img src={src} alt={alt} loading="lazy"
                style="width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.5s ease;" />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════════
        PRAYER / CTA SECTION
    ══════════════════════════════════════════════ */}
    <section class="section section--dark fade-in" aria-labelledby="cta-heading">
      <div class="container--narrow" style="text-align:center;">
        <p class="eyebrow eyebrow--light" style="display:block;margin-bottom:1rem;">We Care About You</p>
        <div class="title-rule title-rule--center"></div>
        <h2 id="cta-heading" class="section-title section-title--white" style="margin-bottom:1.25rem;">
          Let Us Pray With You
        </h2>
        <p style="color:rgba(255,255,255,0.7);font-size:1.0625rem;line-height:1.8;max-width:600px;margin:0 auto 2.5rem;">
          Do you have a prayer need? We would be honored to stand in agreement with you.
          Reach out to our pastoral team or join us any Sunday morning.
        </p>
        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
          <a href="/contact" class="btn btn-gold">Submit a Prayer Request</a>
          <a href="/give" class="btn btn-outline-white">Support Our Ministry</a>
        </div>
      </div>
    </section>
  </>,
  {
    title: undefined,
    description: 'Avenue Progressive Baptist Church in South Dallas, TX. Join us Sundays at 11:15 AM for worship. A Christ-centered community serving South Dallas since 1961.',
    canonicalPath: '/'
  }
)
