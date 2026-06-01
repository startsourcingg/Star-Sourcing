export default function FeaturesSection() {
  const features = [
    {
      icon: '🖨️',
      title: 'State-of-the-Art Presses',
      description:
        'Our fleet of industrial offset and digital presses produce sharp, accurate, print-ready output every single time.',
    },
    {
      icon: '⚡',
      title: '48-Hour Turnaround',
      description:
        'Need it fast? Our express printing service guarantees delivery within 48 hours on most standard products.',
    },
    {
      icon: '🎨',
      title: 'Color Accuracy Guaranteed',
      description:
        'We use ICC-calibrated profiles and Pantone® matching to ensure your brand colors are consistent and exact.',
    },
    {
      icon: '📦',
      title: 'Nationwide Delivery',
      description:
        'We ship to every ZIP code in the country. Free shipping on orders over $150, with real-time tracking.',
    },
    {
      icon: '✅',
      title: 'Quality Assurance',
      description:
        'Every order goes through a 5-point quality check before it leaves our facility — we stand behind every print.',
    },
    {
      icon: '💬',
      title: 'Dedicated Support',
      description:
        'Our expert team is available Monday–Saturday to help with artwork, order queries, and printing advice.',
    },
  ];

  return (
    <section className="features-section section--surface" id="about" aria-labelledby="features-heading">
      <div className="container">

        {/* Section Header */}
        <div className="section-header js-reveal">
          <span className="eyebrow">Why PTP Solutions</span>
          <h2 id="features-heading">
            Crafted for Quality,<br />Built for Business
          </h2>
          <span className="accent-line" aria-hidden="true" />
          <p style={{ marginTop: '1rem' }}>
            We combine technology, craftsmanship, and service to deliver printing
            that elevates your brand.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid-3 js-reveal-stagger">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="feature-card"
              id={`feature-${i + 1}`}
            >
              <div className="feature-icon" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Metrics row */}
        <div
          className="js-reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2px',
            marginTop: '4rem',
            background: 'var(--color-border)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}
        >
          {[
            { value: '12+',   label: 'Years in Business',   icon: '📅' },
            { value: '50K+',  label: 'Projects Completed',  icon: '📋' },
            { value: '5,000+', label: 'Happy Clients',      icon: '🤝' },
            { value: '99%',   label: 'On-Time Delivery',    icon: '🚀' },
          ].map((metric, i) => (
            <div
              key={metric.label}
              id={`metric-${i + 1}`}
              style={{
                background: 'var(--color-bg)',
                padding: '2rem 1.5rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }} aria-hidden="true">{metric.icon}</div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.25rem',
                  fontWeight: 'normal',
                  color: 'var(--color-heading)',
                  lineHeight: 1,
                  marginBottom: '0.375rem',
                }}
              >
                {metric.value}
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-secondary)' }}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
