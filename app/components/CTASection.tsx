'use client';

export default function CTASection() {
  return (
    <>
      {/* ── Red CTA Bar ────────────────────────────────────── */}
      <div className="cta-bar" id="cta-bar" role="complementary" aria-label="Quick contact bar">
        <div className="container">
          <div className="cta-bar-inner">
            <p className="cta-bar-text">
              🖨️ &nbsp;Need a custom quote? Our team responds within 2 hours.
            </p>
            <a href="#contact" className="btn btn-outline-white" id="btn-cta-bar-quote">
              Request Quote Now →
            </a>
          </div>
        </div>
      </div>

      {/* ── Main CTA Section ─────────────────────────────────── */}
      <section className="cta-section" id="cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="cta-inner js-reveal">

            <span className="cta-eyebrow">Start Today</span>

            <h2 id="cta-heading">
              Ready to Elevate Your<br />Brand's Print Presence?
            </h2>

            <p>
              Join over 5,000 businesses that trust PTP Solutions for premium commercial
              printing. Get a tailored quote — no commitment required.
            </p>

            <div className="cta-actions">
              <a href="#contact" className="btn btn-accent btn-lg" id="btn-cta-get-quote">
                Get My Free Quote
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="tel:+10001234567" className="btn btn-outline-white btn-lg" id="btn-cta-call">
                📞 Call (000) 123-4567
              </a>
            </div>

            {/* Trust signals */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2.5rem',
                marginTop: '3rem',
                flexWrap: 'wrap',
              }}
            >
              {[
                { icon: '🔒', text: 'No spam. Ever.' },
                { icon: '⚡', text: '2-hour response' },
                { icon: '💯', text: '100% satisfaction' },
                { icon: '🚚', text: 'Free shipping $150+' },
              ].map((trust, i) => (
                <div
                  key={i}
                  id={`trust-signal-${i + 1}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'rgba(255,255,255,0.55)',
                    fontSize: '0.9rem',
                  }}
                >
                  <span aria-hidden="true">{trust.icon}</span>
                  <span>{trust.text}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Contact / Quote Form Section ───────────────────────── */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        style={{
          padding: 'var(--section-padding)',
          background: 'var(--color-bg)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            {/* Left — info */}
            <div className="js-reveal">
              <span className="eyebrow" style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.8125rem', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
                Get In Touch
              </span>
              <h2 id="contact-heading" style={{ marginBottom: '1rem' }}>
                Let's Bring Your Print Vision to Life
              </h2>
              <p style={{ color: 'var(--color-secondary)', fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Fill out the form and our printing consultants will prepare
                a tailored quote for your project within 2 business hours.
              </p>

              {/* Contact details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { icon: '📍', label: 'Address', value: '123 Print Avenue, Suite 400\nNew York, NY 10001' },
                  { icon: '📞', label: 'Phone', value: '(000) 123-4567' },
                  { icon: '✉️', label: 'Email', value: 'hello@ptpsolutions.com' },
                  { icon: '🕒', label: 'Hours', value: 'Mon–Fri: 8am–7pm EST\nSaturday: 9am–4pm EST' },
                ].map((item) => (
                  <div key={item.label} className="footer-contact-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.25rem', flexShrink: 0 }} aria-hidden="true">{item.icon}</span>
                    <div>
                      <div style={{ fontWeight: 'normal', fontSize: '0.875rem', color: 'var(--color-secondary)', marginBottom: '0.125rem' }}>{item.label}</div>
                      <div style={{ fontSize: '0.9375rem', whiteSpace: 'pre-line' }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="js-reveal" style={{ transitionDelay: '0.15s' }}>
              <form
                id="quote-form"
                aria-label="Request a printing quote"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2.5rem',
                  boxShadow: 'var(--shadow-md)',
                }}
                onSubmit={(e) => e.preventDefault()}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="input-first-name">First Name</label>
                    <input id="input-first-name" type="text" className="form-input" placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="input-last-name">Last Name</label>
                    <input id="input-last-name" type="text" className="form-input" placeholder="Smith" required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="input-email">Email Address</label>
                  <input id="input-email" type="email" className="form-input" placeholder="john@company.com" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="input-phone">Phone Number</label>
                  <input id="input-phone" type="tel" className="form-input" placeholder="(555) 000-0000" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="input-product">Product Needed</label>
                  <select id="input-product" className="form-select">
                    <option value="">Select a product...</option>
                    <option value="business-cards">Business Cards</option>
                    <option value="brochures">Brochures & Flyers</option>
                    <option value="banners">Banners & Signage</option>
                    <option value="packaging">Custom Packaging</option>
                    <option value="other">Other / Custom</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="input-message">Project Details</label>
                  <textarea
                    id="input-message"
                    className="form-textarea"
                    rows={4}
                    placeholder="Tell us about your project — quantity, size, finish, timeline..."
                    style={{ resize: 'vertical' }}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-lg" id="btn-submit-quote" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Quote Request
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <p style={{ textAlign: 'center', fontSize: '0.8125rem', color: 'var(--color-muted)', marginTop: '1rem', marginBottom: 0 }}>
                  🔒 Your information is secure and will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
