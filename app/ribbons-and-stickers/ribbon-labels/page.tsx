import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';

export const metadata = {
  title: 'Ribbon Labels | PTP Solutions',
  description: 'Premium satin, grosgrain, and taffeta ribbon labels for garments, gifts, and retail products.',
};

export default function RibbonLabelsPage() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main id="main-content" role="main">

        {/* ── Hero ───────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(135deg, #1a0a00 0%, #4a1a00 50%, #8b3a00 100%)',
          color: '#fff', padding: '7rem 0 5rem', position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,140,0,0.15) 0%, transparent 70%)' }} />
          <div className="container">
            <p className="js-reveal" style={{ color: 'rgba(255,180,80,0.9)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Ribbons And Stickers
            </p>
            <h1 className="js-reveal" style={{ color: '#fff', marginBottom: '1.5rem', maxWidth: '680px' }}>Ribbon Labels</h1>
            <p className="js-reveal" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: '580px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Beautifully crafted woven and printed ribbon labels that elevate your brand — available in satin, grosgrain, taffeta, and damask for any product or market.
            </p>
            <div className="js-reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/#contact" className="btn btn-accent btn-lg">Order Samples</a>
              <a href="#types" className="btn btn-outline-white btn-lg">See All Types</a>
            </div>
          </div>
        </section>

        {/* ── Label Types ────────────────────────────── */}
        <section className="section" id="types">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Product Range</span>
              <h2>Every Ribbon Label Type</h2>
              <p>Six distinct ribbon label materials — each suited to different products, brands, and end-use environments.</p>
            </div>
            <div className="grid-3 js-reveal-stagger">
              {[
                { icon: '✨', title: 'Satin Ribbon Labels', desc: 'Smooth, lustrous satin with vivid color printing. A premium choice for fashion and luxury brands.' },
                { icon: '🏷️', title: 'Grosgrain Labels', desc: 'Sturdy ribbed texture ideal for outdoor gear, luggage, and workwear requiring durable labeling.' },
                { icon: '👗', title: 'Taffeta Labels', desc: 'Lightweight, crisp — the industry standard for garment care and size labels.' },
                { icon: '🎨', title: 'Damask Woven', desc: 'Ultra-fine woven labels with intricate designs and razor-sharp text. The hallmark of luxury apparel.' },
                { icon: '🖨️', title: 'Printed Ribbon', desc: 'Full-color digital or screen-printed ribbon labels for any design at any scale.' },
                { icon: '📐', title: 'Die-Cut Shapes', desc: 'Straight-cut, mitre-cut, book-fold, or Manhattan fold — custom shapes for any application.' },
              ].map((item) => (
                <div key={item.title} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '2rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <h3 style={{ marginBottom: '0.75rem', fontSize: '1.05rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--color-muted)', margin: 0, fontSize: '0.93rem', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Fold Types ─────────────────────────────── */}
        <section className="section section--surface">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Finishing Options</span>
              <h2>Label Fold Styles</h2>
              <p>We offer six standard fold types — each suited to different garment constructions and application methods.</p>
            </div>
            <div className="js-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1rem' }}>
              {['Straight Cut', 'Mitre Cut', 'End Fold', 'Centre Fold', 'Manhattan Fold', 'Loop Fold'].map((fold) => (
                <div key={fold} style={{ background: '#fff', border: '2px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', textAlign: 'center', fontWeight: 600, fontSize: '0.9rem' }}>
                  🎀 {fold}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Specs ──────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Technical Data</span>
              <h2>Ribbon Label Specifications</h2>
            </div>
            <div className="js-reveal" style={{ overflowX: 'auto' }}>
              <table>
                <thead>
                  <tr><th>Type</th><th>Width</th><th>Colors</th><th>Min Order</th><th>Washability</th><th>Turnaround</th></tr>
                </thead>
                <tbody>
                  {[
                    ['Satin', '6–150mm', 'Up to 8', '500 pcs', '60°C', '7–10 days'],
                    ['Grosgrain', '10–100mm', 'Up to 6', '500 pcs', '60°C', '7–10 days'],
                    ['Taffeta', '6–50mm', 'Up to 12', '1000 pcs', '95°C', '5–7 days'],
                    ['Damask', '10–80mm', 'Up to 16', '500 pcs', '60°C', '10–14 days'],
                    ['Printed', '10–200mm', 'Full CMYK', '200 pcs', '40°C', '3–5 days'],
                  ].map((row) => (
                    <tr key={row[0]}>{row.map((cell, i) => <td key={i}>{i === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Process ────────────────────────────────── */}
        <section className="section section--surface">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">How It Works</span>
              <h2>Order Process in 4 Steps</h2>
            </div>
            <div className="js-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              {[
                ['01', '📤', 'Submit Artwork', 'Send your design, logo, and label dimensions via our contact form or email.'],
                ['02', '🎨', 'Proof Approval', 'We send a digital proof within 24h. Approve or request changes — unlimited revisions.'],
                ['03', '🏭', 'Production', 'Your labels go into production immediately after approval — tracked every step.'],
                ['04', '📦', 'Delivery', 'Packed securely and shipped to your door within the agreed lead time.'],
              ].map(([num, icon, title, desc]) => (
                <div key={num as string} style={{ textAlign: 'center' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#c41e1e', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', margin: '0 auto 1rem' }}>
                    {num}
                  </div>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{icon}</div>
                  <h4 style={{ marginBottom: '0.5rem' }}>{title}</h4>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────── */}
        <section className="section section--dark">
          <div className="container js-reveal" style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Order Your Ribbon Labels Today</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
              Custom sizes, custom folds, any material — get your quote in 24 hours.
            </p>
            <a href="/#contact" className="btn btn-accent btn-lg">Request a Quote</a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
