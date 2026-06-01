import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import Link from 'next/link';

export const metadata = {
  title: 'Label Printing And Cutting Machines | PTP Solutions',
  description: 'Industrial label printing, ultrasonic cutting, and RFID labeling machines for every production scale.',
};

const subCategories = [
  { href: '/label-printing-and-cutting-machines/label-printing-machine', icon: '🖨️', title: 'Label Printing Machine', desc: 'High-speed thermal, digital, and flexographic label printing machines for all label types and volumes.' },
  { href: '/label-printing-and-cutting-machines/ultrasonic-cutting-machine', icon: '✂️', title: 'Ultrasonic Cutting Machine', desc: 'Precision ultrasonic cutting that produces clean, sealed edges on woven and synthetic label materials.' },
  { href: '/label-printing-and-cutting-machines/rfid-labeling-machine', icon: '📡', title: 'RFID Labeling Machine', desc: 'Automated RFID encoding, printing, and application machines for smart supply chain management.' },
];

export default function LabelPrintingMachinesPage() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main id="main-content" role="main">

        {/* ── Hero ───────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #2d1000 100%)',
          color: '#fff', padding: '7rem 0 5rem', position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: '-60px', right: '-80px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,30,30,0.14) 0%, transparent 70%)' }} />
          <div className="container">
            <p className="js-reveal" style={{ color: '#c41e1e', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Machinery
            </p>
            <h1 className="js-reveal" style={{ color: '#fff', marginBottom: '1.5rem', maxWidth: '750px' }}>
              Label Printing And Cutting Machines
            </h1>
            <p className="js-reveal" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: '580px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Industrial-grade machinery engineered for reliability, precision, and high throughput — covering every step of label production from printing to cutting to RFID encoding.
            </p>
            <div className="js-reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/#contact" className="btn btn-accent btn-lg">Talk to an Engineer</a>
              <a href="#machines" className="btn btn-outline-white btn-lg">View Machines</a>
            </div>
          </div>
        </section>

        {/* ── Key Numbers ────────────────────────────── */}
        <section style={{ background: '#1a1a1a', padding: '3rem 0' }}>
          <div className="container">
            <div className="js-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', textAlign: 'center' }}>
              {[['300m/min', 'Max Print Speed'], ['20+', 'Machine Models'], ['50+', 'Countries Supplied'], ['24/7', 'Technical Support']].map(([val, label]) => (
                <div key={label} style={{ padding: '1.5rem', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#c41e1e', fontFamily: 'var(--font-display)' }}>{val}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.3rem' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Machine Categories ─────────────────────── */}
        <section className="section" id="machines">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Our Machinery</span>
              <h2>Three Machine Categories</h2>
              <p>Select a machine category to explore full technical specifications, models, and configurations.</p>
            </div>
            <div className="grid-3 js-reveal-stagger">
              {subCategories.map((cat) => (
                <Link key={cat.href} href={cat.href} style={{ textDecoration: 'none' }}>
                  <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '2.5rem 2rem', textAlign: 'center', cursor: 'pointer', height: '100%' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>{cat.icon}</div>
                    <h3 style={{ marginBottom: '0.75rem', fontSize: '1.1rem' }}>{cat.title}</h3>
                    <p style={{ color: 'var(--color-muted)', fontSize: '0.93rem', lineHeight: 1.7, margin: '0 0 1.5rem' }}>{cat.desc}</p>
                    <span style={{ color: '#c41e1e', fontWeight: 700, fontSize: '0.85rem' }}>View Details →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Key Features ───────────────────────────── */}
        <section className="section section--surface">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Built to Perform</span>
              <h2>Engineering Excellence in Every Machine</h2>
            </div>
            <div className="js-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              {[
                ['⚙️', 'Precision Engineering', 'Tolerances held to ±0.1mm across all cutting and printing operations.'],
                ['🔧', 'Tool-Free Changeover', 'Switch between label widths in under 5 minutes with zero tools.'],
                ['📊', 'Smart Diagnostics', 'Self-monitoring sensors with live production data and fault alerts.'],
                ['🌍', 'Global Compliance', 'CE, UL, and RoHS certified — ready for any market.'],
              ].map(([icon, title, desc]) => (
                <div key={title as string} style={{ padding: '2rem 1.5rem', background: '#fff', borderRight: '1px solid var(--color-border)', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{icon}</div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{title}</h4>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Us ─────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Why PTP Solutions</span>
              <h2>More Than a Machine — A Complete Solution</h2>
            </div>
            <div className="js-reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
              {[
                { icon: '🤝', title: 'Consultative Sales', desc: 'Our engineers assess your production requirements and recommend the optimal machine configuration.' },
                { icon: '🛠️', title: 'Installation & Training', desc: 'On-site installation, commissioning, and operator training included with every machine.' },
                { icon: '📞', title: '24/7 Support', desc: 'Round-the-clock technical helpdesk with remote diagnostics and on-site escalation.' },
                { icon: '🔄', title: 'Spare Parts', desc: 'Full spare parts inventory held locally for next-business-day delivery.' },
              ].map((item) => (
                <div key={item.title} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '2rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                  <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>{item.title}</h4>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────── */}
        <section className="section section--dark">
          <div className="container js-reveal" style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Find the Right Machine for Your Line</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
              Our engineers will help you select, configure, and install the ideal machine for your production needs.
            </p>
            <a href="/#contact" className="btn btn-accent btn-lg">Request a Consultation</a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
