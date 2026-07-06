import type { Context } from 'hono'

export const PageHero = ({ title, subtitle, breadcrumb, bgPhoto }: {
  title: string
  subtitle?: string
  breadcrumb: string
  bgPhoto?: string
}) => (
  <section class="breadcrumb-hero pt-36 pb-16 text-white relative" style={bgPhoto ? `background-image: url('${bgPhoto}'); background-size: cover; background-position: center;` : ''}>
    {bgPhoto && <div class="absolute inset-0" style="background: linear-gradient(160deg, rgba(17,17,17,0.88) 0%, rgba(107,26,42,0.78) 100%);"></div>}
    <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
      <nav aria-label="Breadcrumb" class="mb-4">
        <ol class="flex items-center justify-center gap-2 text-sm text-gray-400">
          <li><a href="/" class="hover:text-brand-gold transition-colors">Home</a></li>
          <li><i class="fas fa-chevron-right text-xs text-gray-600"></i></li>
          <li class="text-brand-gold font-medium">{breadcrumb}</li>
        </ol>
      </nav>
      <h1 class="font-serif text-4xl md:text-6xl font-bold mb-4">{title}</h1>
      {subtitle && <p class="text-gray-300 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  </section>
)
