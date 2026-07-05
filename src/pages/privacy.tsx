import type { Context } from 'hono'
import { PageHero } from './shared'

export const privacyPage = (c: Context) => c.render(
  <div>
    <PageHero
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information."
      breadcrumb="Privacy Policy"
    />

    <section class="py-24 bg-brand-cream">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="bg-white rounded-3xl p-8 md:p-12 shadow-md prose prose-gray max-w-none">
          <p class="text-gray-400 text-sm mb-8"><strong>Last updated:</strong> July 2026</p>

          <h2 class="font-serif text-2xl font-bold text-brand-navy mb-3">1. Information We Collect</h2>
          <p class="text-gray-600 leading-relaxed mb-6">
            We may collect personal information such as your name, email address, phone number, and
            message content when you submit a contact form, sign up to receive communications, or
            plan a visit through our website.
          </p>

          <h2 class="font-serif text-2xl font-bold text-brand-navy mb-3">2. How We Use Your Information</h2>
          <p class="text-gray-600 leading-relaxed mb-3">We use the information you provide to:</p>
          <ul class="list-disc pl-6 text-gray-600 space-y-1 mb-6 text-sm leading-relaxed">
            <li>Respond to your inquiries and prayer requests</li>
            <li>Welcome first-time visitors on Sunday</li>
            <li>Send church announcements and event updates (with your permission)</li>
            <li>Improve our website and services</li>
          </ul>

          <h2 class="font-serif text-2xl font-bold text-brand-navy mb-3">3. We Do Not Sell Your Data</h2>
          <p class="text-gray-600 leading-relaxed mb-6">
            Avenue Progressive Baptist Church does not sell, trade, or rent your personal information
            to any third parties. We may share data with service providers who assist us in operating
            our website, under strict confidentiality agreements.
          </p>

          <h2 class="font-serif text-2xl font-bold text-brand-navy mb-3">4. Cookies & Analytics</h2>
          <p class="text-gray-600 leading-relaxed mb-6">
            Our website may use cookies and analytics tools (such as Google Analytics) to understand
            how visitors use our site. This information is anonymous and used solely to improve the
            user experience.
          </p>

          <h2 class="font-serif text-2xl font-bold text-brand-navy mb-3">5. Your Rights</h2>
          <p class="text-gray-600 leading-relaxed mb-6">
            You may request access to, correction of, or deletion of your personal data at any time
            by contacting us at <a href="mailto:info@avenuepbc.org" class="text-brand-gold hover:underline">info@avenuepbc.org</a>.
          </p>

          <h2 class="font-serif text-2xl font-bold text-brand-navy mb-3">6. Contact</h2>
          <p class="text-gray-600 leading-relaxed">
            If you have questions about this Privacy Policy, please contact us at:
            <br /><strong>Avenue Progressive Baptist Church</strong>
            <br />3745 Dildock Street, Dallas, TX 75215
            <br /><a href="mailto:info@avenuepbc.org" class="text-brand-gold hover:underline">info@avenuepbc.org</a>
            <br /><a href="tel:+12144210000" class="text-brand-gold hover:underline">(214) 421-0000</a>
          </p>
        </div>
      </div>
    </section>
  </div>,
  {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Avenue Progressive Baptist Church — how we collect, use, and protect your personal information.',
    canonicalPath: '/privacy'
  }
)
