import type { Context } from 'hono'
import { PageHero } from './shared'
import { PHOTOS } from '../renderer'

export const visitPage = (c: Context) => c.render(
  <div>
    <PageHero
      title="Plan Your Visit"
      subtitle="We're so glad you're thinking about visiting THE AVENUE. Here's everything you need to know."
      breadcrumb="Plan a Visit"
      bgPhoto={PHOTOS.greeters}
    />

    <section class="py-24 bg-brand-cream">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Info */}
          <div class="fade-in">
            <div class="section-divider left"></div>
            <h2 class="font-serif text-3xl md:text-4xl font-bold text-brand-maroon mb-8">
              What to Expect
            </h2>

            <div class="space-y-5">
              {[
                { icon: 'fa-clock', title: 'Service Times', content: (
                  <ul class="text-gray-600 text-sm space-y-1 mt-1">
                    <li><i class="fas fa-check text-brand-gold mr-2 text-xs"></i>Sunday School: <strong>10:00 AM</strong></li>
                    <li><i class="fas fa-check text-brand-gold mr-2 text-xs"></i>Sunday Worship: <strong>11:15 AM</strong> (~90 minutes)</li>
                    <li><i class="fas fa-check text-brand-gold mr-2 text-xs"></i>Wednesday Prayer &amp; Bible Study: <strong>6:30 PM</strong></li>
                  </ul>
                )},
                { icon: 'fa-tshirt', title: 'What Should I Wear?', content: <p class="text-gray-600 text-sm mt-1">Come as you are! Some dress formally, others casually. What matters is that you&apos;re here.</p> },
                { icon: 'fa-parking', title: 'Parking', content: <p class="text-gray-600 text-sm mt-1">Free parking is available in the church lot and along surrounding streets.</p> },
                { icon: 'fa-child', title: 'Children & Youth', content: <p class="text-gray-600 text-sm mt-1">Children are welcome in the sanctuary. Sunday School classes are available for all age groups at 10:00 AM.</p> },
                { icon: 'fa-accessible-icon', title: 'Accessibility', content: <p class="text-gray-600 text-sm mt-1">Our building is accessible. If you have specific needs, please contact us ahead of your visit.</p> },
              ].map((item, i) => (
                <div key={i} class="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm">
                  <div class="w-11 h-11 bg-brand-maroon rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class={`fas ${item.icon} text-brand-gold`}></i>
                  </div>
                  <div class="flex-1">
                    <h3 class="font-semibold text-brand-maroon text-base">{item.title}</h3>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Congregation photo */}
            <div class="mt-8 rounded-2xl overflow-hidden shadow-lg relative h-52">
              <img src={PHOTOS.congregation5} alt="THE AVENUE congregation welcomes you" class="w-full h-full object-cover" loading="lazy" />
              <div class="absolute inset-0" style="background: linear-gradient(180deg, transparent 40%, rgba(107,26,42,0.75) 100%);"></div>
              <div class="absolute bottom-0 left-0 p-5 text-white">
                <p class="font-serif italic text-lg">&ldquo;All are welcome at THE AVENUE.&rdquo;</p>
              </div>
            </div>
          </div>

          {/* Right: Map + Form */}
          <div class="space-y-8 fade-in delay-2">
            {/* Location card */}
            <div class="bg-white rounded-3xl overflow-hidden shadow-xl">
              {/* Google Maps embed */}
              <div class="h-56">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.8!2d-96.7583!3d32.7459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z3745+Dildock+St%2C+Dallas%2C+TX+75215!5e0!3m2!1sen!2sus!4v1720000000000"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Avenue Progressive Baptist Church location map"
                ></iframe>
              </div>
              <div class="p-5">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-brand-maroon rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-map-marker-alt text-brand-gold"></i>
                  </div>
                  <div class="flex-1">
                    <div class="font-bold text-brand-maroon">3745 Dildock Street</div>
                    <div class="text-gray-500 text-sm">Dallas, TX 75215</div>
                    <div class="text-gray-400 text-xs mt-1">Heart of South Dallas</div>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=3745+Dildock+Street+Dallas+TX+75215"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 bg-brand-gold hover:bg-brand-gold2 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
                  >
                    <i class="fas fa-directions"></i> Directions
                  </a>
                </div>
              </div>
            </div>

            {/* First-Time Guest Form */}
            <div class="bg-white rounded-3xl p-7 shadow-xl">
              <h3 class="font-serif text-2xl font-bold text-brand-maroon mb-2">Let Us Know You&apos;re Coming</h3>
              <p class="text-gray-500 text-sm mb-6">
                Optional &mdash; we&apos;ll welcome you by name on Sunday!
              </p>
              <form id="visit-form" class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label for="v-first" class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" id="v-first" name="first_name" required placeholder="Jane" class="form-input" />
                  </div>
                  <div>
                    <label for="v-last" class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" id="v-last" name="last_name" required placeholder="Smith" class="form-input" />
                  </div>
                </div>
                <div>
                  <label for="v-email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="v-email" name="email" required placeholder="your@email.com" class="form-input" />
                </div>
                <div>
                  <label for="v-phone" class="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
                  <input type="tel" id="v-phone" name="phone" placeholder="(214) 000-0000" class="form-input" />
                </div>
                <div>
                  <label for="v-group" class="block text-sm font-medium text-gray-700 mb-1">Who&apos;s coming with you?</label>
                  <select id="v-group" name="group" class="form-input">
                    <option value="">Select&hellip;</option>
                    <option>Just me</option>
                    <option>Me + a guest</option>
                    <option>Family with children</option>
                    <option>Couple</option>
                  </select>
                </div>
                <div>
                  <label for="v-notes" class="block text-sm font-medium text-gray-700 mb-1">Anything we should know? (optional)</label>
                  <textarea id="v-notes" name="notes" rows={3} placeholder="Questions, accessibility needs, etc." class="form-input resize-none"></textarea>
                </div>
                <button type="submit" id="v-submit"
                  class="w-full bg-brand-maroon hover:bg-brand-maroon2 text-white font-semibold py-3 rounded-full transition-colors shadow-md">
                  <i class="fas fa-check mr-1"></i> I&apos;m Planning to Visit!
                </button>
                <div id="v-success" class="hidden text-center text-green-700 bg-green-50 border border-green-200 rounded-xl py-3 text-sm font-medium">
                  <i class="fas fa-check-circle mr-1"></i> Great! We&apos;ll look for you this Sunday. See you soon!
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <script dangerouslySetInnerHTML={{ __html: `
      document.getElementById('visit-form').addEventListener('submit', async function(e) {
        e.preventDefault();
        const btn = document.getElementById('v-submit');
        btn.disabled = true;
        btn.textContent = 'Saving\u2026';
        try {
          const fd = new FormData(this);
          await fetch('/contact', { method: 'POST', body: fd });
          document.getElementById('v-success').classList.remove('hidden');
          this.reset();
        } catch(err) {}
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-check mr-1"></i> I\\'m Planning to Visit!';
      });
    ` }} />
  </div>,
  {
    title: 'Plan Your Visit',
    description: 'Plan your first visit to Avenue Progressive Baptist Church at 3745 Dildock St, Dallas, TX 75215. Sunday Worship at 11:15 AM. Come as you are — all are welcome!',
    canonicalPath: '/visit'
  }
)
