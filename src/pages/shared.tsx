import type { Context } from 'hono'

// Shared page header component
export const PageHero = ({ title, subtitle, breadcrumb }: { title: string; subtitle?: string; breadcrumb: string }) => (
  <section class="breadcrumb-hero pt-36 pb-16 text-white relative">
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
    {/* decorative gold line */}
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-brand-gold rounded-full"></div>
  </section>
)
