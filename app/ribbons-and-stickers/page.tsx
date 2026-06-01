import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import Link from 'next/link';

export const metadata = {
  title: 'Ribbons And Stickers | PTP Solutions',
  description: 'Explore ribbon labels, security labels, and barcode stickers for every industry.',
};

const subCategories = [
  { href: '/ribbons-and-stickers/ribbon-labels', icon: '🎀', title: 'Ribbon Labels', desc: 'Satin, grosgrain, and taffeta ribbon labels for garments, gifts, and retail.' },
  { href: '/ribbons-and-stickers/security-labels', icon: '🔒', title: 'Security Labels', desc: 'Tamper-evident, holographic, and void labels to protect your brand.' },
  { href: '/ribbons-and-stickers/barcode-stickers', icon: '📊', title: 'Barcode Stickers', desc: 'Scannable barcode and QR code stickers for inventory, retail, and logistics.' },
];

export default function RibbonsAndStickersPage() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main id="main-content" role="main">

        {/* ── Hero ───────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(135deg, #1a0533 0%, #3d1a6e 50%, #c41e1e 100%)',
          color: '#fff', padding: '7rem 0 5rem', position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden="true" style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)' }} />
          <div className="container">
            <p className="js-reveal" style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Product Category</p>
            <h1 className="js-reveal" style={{ color: '#fff', marginBottom: '1.5rem', maxWidth: '680px' }}>Ribbons And Stickers</h1>
            <p className="js-reveal" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: '580px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              From elegant woven ribbon labels to tamper-proof security stickers and precision barcodes — complete labeling solutions for every product and industry.
            </p>
            <div className="js-reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/#contact" className="btn btn-accent btn-lg">Get a Quote</a>
              <a href="#categories" className="btn btn-outline-white btn-lg">Browse Categories</a>
            </div>
          </div>
        </section>

        {/* ── Sub-categories ─────────────────────────── */}
        <section className="section" id="categories">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Browse Categories</span>
              <h2>Three Specialised Product Lines</h2>
              <p>Each category is built for a specific labeling need — choose yours to explore the full range.</p>
            </div>
            <div className="grid-3 js-reveal-stagger">
              {subCategories.map((cat) => (
                <Link key={cat.href} href={cat.href} style={{ textDecoration: 'none' }}>
                  <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '2.5rem 2rem', textAlign: 'center', transition: 'all 0.25s', cursor: 'pointer' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>{cat.icon}</div>
                    <h3 style={{ marginBottom: '0.75rem', fontSize: '1.15rem' }}>{cat.title}</h3>
                    <p style={{ color: 'var(--color-muted)', fontSize: '0.93rem', lineHeight: 1.7, margin: '0 0 1.25rem' }}>{cat.desc}</p>
                    <span style={{ color: '#c41e1e', fontWeight: 700, fontSize: '0.85rem' }}>Explore →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Us ─────────────────────────────────── */}
        <section className="section section--surface">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Why PTP Solutions</span>
              <h2>Quality at Every Scale</h2>
            </div>
            <div className="js-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              {[
                ['🏭', 'In-House Production', 'Full control from design to dispatch — zero outsourcing.'],
                ['⚡', '3–5 Day Turnaround', 'Standard orders shipped within 3–5 business days.'],
                ['🎨', 'Custom Designs', 'Any color, shape, or size — matched to your brand spec.'],
                ['📦', 'Bulk Pricing', 'Volume discounts starting from 500 units.'],
              ].map(([icon, title, desc]) => (
                <div key={title as string} style={{ padding: '2rem 1.5rem', textAlign: 'center', background: '#fff', borderRight: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{icon}</div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{title}</h4>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Industries ─────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Who We Serve</span>
              <h2>Industries That Rely on Our Labels</h2>
            </div>
            <div className="js-reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
              {[['👗','Fashion & Apparel'],['💊','Pharma & Healthcare'],['🛒','Retail & FMCG'],['📦','Logistics & Shipping'],['🍷','Food & Beverage'],['💎','Luxury Goods'],['🔌','Electronics'],['🏥','Medical Devices']].map(([icon, label]) => (
                <div key={label as string} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1rem 1.25rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{icon}</span>
                  <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Certifications ─────────────────────────── */}
        <section className="section section--surface">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Compliance</span>
              <h2>Certified for Global Markets</h2>
            </div>
            <div className="js-reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              {['ISO 9001:2015', 'OEKO-TEX Standard 100', 'REACH Compliant', 'CPSC Compliant', 'FSC Certified', 'EU REACH', 'FDA Compliant'].map((cert) => (
                <span key={cert} style={{ border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-full)', padding: '0.4rem 1rem', fontSize: '0.82rem', fontWeight: 600, background: '#fff' }}>✅ {cert}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────── */}
        <section className="section section--dark">
          <div className="container js-reveal" style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Need a Custom Labeling Solution?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
              Talk to our labeling experts and get a tailored quote within 24 hours.
            </p>
            <a href="/#contact" className="btn btn-accent btn-lg">Contact Us Today</a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
