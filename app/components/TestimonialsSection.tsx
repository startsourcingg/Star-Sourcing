export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 'testimonial-1',
      quote: '"',
      text: 'Start Sourcing printed our entire product line packaging and the quality blew us away. Colors were spot-on, delivery was faster than expected. Will never use another printer.',
      name: 'Sarah Mitchell',
      role: 'Brand Director, Lumière Co.',
      initials: 'SM',
      rating: 5,
    },
    {
      id: 'testimonial-2',
      quote: '"',
      text: "We order business cards and brochures for our real estate team every quarter. Start Sourcing's turnaround is insane \u2014 48 hours and everything looks immaculate.",
      name: 'James Harrington',
      role: 'Managing Partner, Harrington Realty',
      initials: 'JH',
      rating: 5,
    },
    {
      id: 'testimonial-3',
      quote: '"',
      text: 'The trade show banners were stunning. Several people at the expo asked who our printer was. Start Sourcing is now our exclusive print partner.',
      name: 'Priya Anand',
      role: 'Marketing Manager, NovaTech Solutions',
      initials: 'PA',
      rating: 5,
    },
  ];

  return (
    <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">

        {/* Section Header */}
        <div className="section-header js-reveal">
          <span className="eyebrow">Client Stories</span>
          <h2 id="testimonials-heading">
            Trusted by Thousands<br />of Businesses
          </h2>
          <span className="accent-line" aria-hidden="true" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid-3 js-reveal-stagger">
          {testimonials.map((t) => (
            <blockquote
              key={t.id}
              className="testimonial-card"
              id={t.id}
              cite="#"
            >
              {/* Stars */}
              <div className="stars" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} aria-hidden="true">★</span>
                ))}
              </div>

              <p className="testimonial-quote" aria-hidden="true">{t.quote}</p>

              <p className="testimonial-text">{t.text}</p>

              <footer className="testimonial-author">
                <div
                  className="testimonial-avatar"
                  aria-hidden="true"
                  style={{ background: t.initials === 'PA' ? 'var(--color-accent)' : 'var(--color-heading)' }}
                >
                  {t.initials}
                </div>
                <div>
                  <cite className="testimonial-name" style={{ fontStyle: 'normal' }}>{t.name}</cite>
                  <p className="testimonial-role" style={{ margin: 0 }}>{t.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

      </div>
    </section>
  );
}
