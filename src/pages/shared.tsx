import type { Context } from 'hono'

export const PageHero = ({ title, subtitle, breadcrumb, bgPhoto }: {
  title: string
  subtitle?: string
  breadcrumb: string
  bgPhoto?: string
}) => (
  <section class="page-hero">
    {bgPhoto && (
      <img
        src={bgPhoto}
        alt=""
        class="page-hero__bg"
        aria-hidden="true"
        loading="eager"
      />
    )}
    <div class="page-hero__overlay"></div>
    <div class="container page-hero__content">
      <nav aria-label="Breadcrumb">
        <ol class="page-hero__breadcrumb">
          <li><a href="/">Home</a></li>
          <li><i class="fas fa-chevron-right" style="font-size:0.55rem;"></i></li>
          <li style="color:rgba(255,255,255,0.85);">{breadcrumb}</li>
        </ol>
      </nav>
      <h1 class="page-hero__title">{title}</h1>
      {subtitle && <p class="page-hero__subtitle">{subtitle}</p>}
    </div>
  </section>
)
