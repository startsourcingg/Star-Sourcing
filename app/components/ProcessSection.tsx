export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Upload Your Design',
      description:
        'Send us your print-ready artwork or use our free design templates — PDF, AI, PSD accepted.',
    },
    {
      number: '02',
      title: 'Choose Your Specs',
      description:
        'Select paper stock, finish, quantity, and delivery speed that fits your budget and timeline.',
    },
    {
      number: '03',
      title: 'We Print & Package',
      description:
        'Your order goes through prepress, printing, cutting, and quality inspection by our experts.',
    },
    {
      number: '04',
      title: 'Delivered to You',
      description:
        'We ship nationwide with tracking. Most orders arrive in 48–72 hours, ready to use.',
    },
  ];

  return (
    <section className="process-section" id="process" aria-labelledby="process-heading">
      <div className="container">

        {/* Section Header */}
        <div className="section-header js-reveal">
          <span className="eyebrow">How It Works</span>
          <h2 id="process-heading">
            From File to Doorstep<br />in 4 Simple Steps
          </h2>
          <span className="accent-line" aria-hidden="true" />
          <p style={{ marginTop: '1rem' }}>
            Our streamlined process makes ordering commercial printing as easy
            as possible — no printing experience required.
          </p>
        </div>

        {/* Steps */}
        <div className="steps-grid js-reveal-stagger">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="step-item"
              id={`step-${i + 1}`}
            >
              <div className="step-number" aria-label={`Step ${step.number}`}>
                {step.number}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA sub-section */}
        <div
          className="js-reveal"
          style={{
            marginTop: '4rem',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div>
            <h3 style={{ marginBottom: '0.5rem' }}>Ready to start your print project?</h3>
            <p style={{ color: 'var(--color-secondary)', margin: 0 }}>
              Talk to our team and get a custom quote within 2 hours.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary btn-lg" id="btn-start-project">
              Start My Project
            </a>
            <a href="tel:+923214091144" className="btn btn-outline" id="btn-call-us">
              📞 +923214091144
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
