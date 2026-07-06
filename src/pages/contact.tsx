import type { Context } from 'hono'
import { PageHero } from './shared'
import { PHOTOS } from '../renderer'

export const contactPage = (c: Context) => c.render(
  <div>
    <PageHero
      title="Contact Us"
      subtitle="We'd love to hear from you — questions, prayer requests, or just saying hello."
      breadcrumb="Contact"
      bgPhoto={PHOTOS.friendsGroup}
    />

    <section class="py-24 bg-brand-cream">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* Left: Info + Map */}
          <div class="lg:col-span-2 space-y-6 fade-in">
            <div class="section-divider left"></div>
            <h2 class="font-serif text-3xl font-bold text-brand-maroon mb-2">Get in Touch</h2>
            <p class="text-gray-600 leading-relaxed">
              Have a question? Need prayer? Want to learn more about our church?
              Our team will respond promptly.
            </p>

            {/* Contact cards */}
            <div class="space-y-4">
              {[
                { icon: 'fa-map-marker-alt', label: 'Address', lines: ['3745 Dildock Street', 'Dallas, TX 75215'], href: 'https://www.google.com/maps/search/?api=1&query=3745+Dildock+Street+Dallas+TX+75215', external: true },
                { icon: 'fa-phone', label: 'Phone', lines: ['(214) 421-0000'], href: 'tel:+12144210000', external: false },
                { icon: 'fa-envelope', label: 'Email', lines: ['info@avenuepbc.org'], href: 'mailto:info@avenuepbc.org', external: false },
                { icon: 'fa-clock', label: 'Office Hours', lines: ['Mon–Fri: 9:00 AM – 4:00 PM', 'Sunday: 9:00 AM – 1:00 PM'], href: undefined, external: false },
              ].map((item, i) => {
                const Inner = () => (
                  <div class="flex items-center gap-4">
                    <div class="w-11 h-11 bg-brand-maroon rounded-xl flex items-center justify-center flex-shrink-0">
                      <i class={`fas ${item.icon} text-brand-gold text-sm`}></i>
                    </div>
                    <div>
                      <div class="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</div>
                      {item.lines.map((l, j) => <div key={j} class="text-brand-maroon font-semibold text-sm">{l}</div>)}
                    </div>
                    {item.href && <i class="fas fa-chevron-right text-gray-300 text-xs ml-auto"></i>}
                  </div>
                )
                return item.href ? (
                  <a key={i} href={item.href} target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    class="block bg-white rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow">
                    <Inner />
                  </a>
                ) : (
                  <div key={i} class="block bg-white rounded-2xl px-5 py-4 shadow-sm">
                    <Inner />
                  </div>
                )
              })}
            </div>

            {/* Social */}
            <div class="bg-white rounded-2xl p-5 shadow-sm">
              <p class="text-sm font-semibold text-brand-maroon mb-3">Follow Us</p>
              <div class="flex gap-3">
                <a href="https://www.facebook.com/AvenuePBC" target="_blank" rel="noopener noreferrer"
                  class="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl text-sm font-semibold transition-colors">
                  <i class="fab fa-facebook-f"></i> Facebook
                </a>
                <a href="https://www.youtube.com/@AvenuePBC" target="_blank" rel="noopener noreferrer"
                  class="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-xl text-sm font-semibold transition-colors">
                  <i class="fab fa-youtube"></i> YouTube
                </a>
                <a href="https://www.instagram.com/avenuepbc" target="_blank" rel="noopener noreferrer"
                  class="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2.5 rounded-xl text-sm font-semibold transition-colors">
                  <i class="fab fa-instagram"></i> Instagram
                </a>
              </div>
            </div>

            {/* Congregation photo */}
            <div class="rounded-2xl overflow-hidden shadow-md h-48">
              <img src={PHOTOS.congregation7} alt="THE AVENUE congregation" class="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>

          {/* Right: Form */}
          <div class="lg:col-span-3 fade-in delay-2">
            <div class="bg-white rounded-3xl p-8 shadow-xl">
              <h3 class="font-serif text-2xl font-bold text-brand-maroon mb-6">Send Us a Message</h3>
              <form id="contact-page-form" class="space-y-5">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label for="cp-first" class="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input type="text" id="cp-first" name="first_name" required class="form-input" />
                  </div>
                  <div>
                    <label for="cp-last" class="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <input type="text" id="cp-last" name="last_name" required class="form-input" />
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label for="cp-email" class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input type="email" id="cp-email" name="email" required class="form-input" />
                  </div>
                  <div>
                    <label for="cp-phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" id="cp-phone" name="phone" class="form-input" />
                  </div>
                </div>
                <div>
                  <label for="cp-subject" class="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                  <select id="cp-subject" name="subject" required class="form-input">
                    <option value="">Select a subject&hellip;</option>
                    <option>General Inquiry</option>
                    <option>Prayer Request</option>
                    <option>First-Time Visit</option>
                    <option>Ministries &amp; Volunteering</option>
                    <option>Pastoral Care</option>
                    <option>Giving &amp; Stewardship</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label for="cp-message" class="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea id="cp-message" name="message" rows={5} required placeholder="How can we help you?" class="form-input resize-none"></textarea>
                </div>
                <div class="flex items-start gap-3">
                  <input type="checkbox" id="cp-prayer" name="prayer_request" class="mt-1 accent-brand-gold" />
                  <label for="cp-prayer" class="text-sm text-gray-600 cursor-pointer">
                    This is a <strong>prayer request</strong> &mdash; I&apos;d like the prayer team to pray for me.
                  </label>
                </div>
                <button type="submit" id="cp-submit"
                  class="w-full bg-brand-maroon hover:bg-brand-maroon2 text-white font-semibold py-3.5 rounded-full transition-colors shadow-md">
                  Send Message <i class="fas fa-paper-plane ml-1"></i>
                </button>
                <div id="cp-success" class="hidden text-center text-green-700 bg-green-50 border border-green-200 rounded-xl py-4 text-sm font-medium">
                  <i class="fas fa-check-circle text-lg mb-1 block"></i>
                  Thank you for reaching out! Our team will respond within 1&ndash;2 business days.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <script dangerouslySetInnerHTML={{ __html: `
      document.getElementById('contact-page-form').addEventListener('submit', async function(e) {
        e.preventDefault();
        const btn = document.getElementById('cp-submit');
        btn.disabled = true;
        btn.textContent = 'Sending\u2026';
        try {
          const fd = new FormData(this);
          await fetch('/contact', { method: 'POST', body: fd });
          document.getElementById('cp-success').classList.remove('hidden');
          this.reset();
          window.scrollTo({ top: document.getElementById('cp-success').offsetTop - 100, behavior: 'smooth' });
        } catch(err) {}
        btn.disabled = false;
        btn.innerHTML = 'Send Message <i class="fas fa-paper-plane ml-1"></i>';
      });
    ` }} />
  </div>,
  {
    title: 'Contact Us',
    description: "Contact Avenue Progressive Baptist Church in South Dallas. Call (214) 421-0000, email info@avenuepbc.org, or use our online form. We'd love to hear from you.",
    canonicalPath: '/contact'
  }
)
