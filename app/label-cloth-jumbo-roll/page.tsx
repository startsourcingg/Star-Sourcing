import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export const metadata = {
  title: 'Label Cloth Jumbo Roll | PTP Solutions',
  description: 'Premium woven and non-woven label cloth jumbo rolls for garment, textile, and industrial labeling.',
};

export default function LabelClothJumboRollPage() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main id="main-content" role="main">

        {/* ── Hero ───────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
          color: '#fff', padding: '7rem 0 5rem', position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden="true" style={{
            position: 'absolute', top: '-80px', right: '-80px', width: '500px', height: '500px',
            borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,30,30,0.18) 0%, transparent 70%)',
          }} />
          <div className="container">
            <p className="js-reveal" style={{ color: '#c41e1e', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Product Category
            </p>
            <h1 className="js-reveal" style={{ color: '#fff', marginBottom: '1.5rem', maxWidth: '700px' }}>
              Label Cloth Jumbo Roll
            </h1>
            <p className="js-reveal" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '580px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Industry-leading woven and non-woven label cloth jumbo rolls engineered for precision, durability, and consistent print performance across every production run.
            </p>
            <div className="js-reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/#contact" className="btn btn-accent btn-lg">Request a Sample</a>
              <a href="#products" className="btn btn-outline-white btn-lg">View Products</a>
            </div>
          </div>
        </section>

        {/* ── Stats ──────────────────────────────────── */}
        <section style={{ background: '#c41e1e', padding: '3rem 0' }}>
          <div className="container">
            <div className="js-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0', textAlign: 'center' }}>
              {[
                ['500M+', 'Meters Produced Yearly'],
                ['10mm–500mm', 'Width Range'],
                ['60°C', 'Wash Certification'],
                ['48h', 'Sample Turnaround'],
              ].map(([val, label]) => (
                <div key={label} style={{ padding: '1.5rem', borderRight: '1px solid rgba(255,255,255,0.2)' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-display)' }}>{val}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', marginTop: '0.25rem' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Product Range ──────────────────────────── */}
        <section className="section" id="products">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Our Range</span>
              <h2>Label Cloth Types</h2>
              <p>Six categories of label cloth rolls — each engineered for a specific production requirement.</p>
            </div>
            <div className="grid-3 js-reveal-stagger">
              {[
                { icon: '🧵', title: 'Woven Label Rolls', desc: 'High-definition woven labels on jumbo rolls — ideal for garment and fashion brands. Crisp text, rich color, soft feel.' },
                { icon: '🏷️', title: 'Non-Woven Rolls', desc: 'Cost-effective non-woven label rolls for bulk production. Excellent printability and dimensional stability.' },
                { icon: '🌡️', title: 'Heat-Transfer Rolls', desc: 'Soft, tagless heat-transfer label rolls that bond directly to fabric — no stitching required.' },
                { icon: '✨', title: 'Satin Ribbon Rolls', desc: 'Elegant satin-finish label rolls for premium garment branding and luxury product packaging.' },
                { icon: '📋', title: 'Taffeta Label Rolls', desc: 'Durable taffeta woven rolls perfect for care labels, brand labels, and size labels.' },
                { icon: '📐', title: 'Custom Width & Length', desc: 'Order any width from 10mm to 500mm. Custom lengths available for high-volume manufacturing.' },
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

        {/* ── How It's Made ──────────────────────────── */}
        <section className="section section--surface">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Our Process</span>
              <h2>From Yarn to Jumbo Roll</h2>
              <p>A precise five-step process guarantees consistent quality on every meter.</p>
            </div>
            <div className="js-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0', position: 'relative' }}>
              {[
                ['01', '🧶', 'Yarn Selection', 'Premium polyester or nylon yarns sourced from certified suppliers.'],
                ['02', '🖥️', 'Digital Design', 'Your artwork is digitized with up to 16 color thread accuracy.'],
                ['03', '🏭', 'Weaving / Printing', 'High-speed looms or flexo presses run at 200–300 m/min.'],
                ['04', '✂️', 'Slitting & Winding', 'Precision-slit to exact widths and wound to custom roll lengths.'],
                ['05', '✅', 'QC & Dispatch', '100% visual inspection, wash test sampling, and sealed dispatch.'],
              ].map(([num, icon, title, desc]) => (
                <div key={num as string} style={{ padding: '2rem 1.5rem', background: '#fff', borderRight: '1px solid var(--color-border)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#c41e1e', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>STEP {num}</div>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{icon}</div>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>{title}</h4>
                  <p style={{ fontSize: '0.83rem', color: 'var(--color-muted)', margin: 0, lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Specs Table ────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Specifications</span>
              <h2>Technical Data Sheet</h2>
            </div>
            <div className="js-reveal" style={{ overflowX: 'auto' }}>
              <table>
                <thead>
                  <tr><th>Property</th><th>Woven</th><th>Non-Woven</th><th>Heat-Transfer</th><th>Satin</th></tr>
                </thead>
                <tbody>
                  {[
                    ['Width Range', '10–500mm', '10–300mm', '20–200mm', '6–150mm'],
                    ['Roll Length', 'Up to 5000m', 'Up to 8000m', 'Up to 3000m', 'Up to 6000m'],
                    ['Material', 'Polyester / Nylon', 'Polypropylene', 'PU Film', 'Polyester'],
                    ['Colors', 'Up to 12', 'Up to 8', 'Full CMYK', 'Up to 8'],
                    ['Washability', '60°C certified', '40°C certified', '60°C certified', '60°C certified'],
                    ['MOQ', '1000m/roll', '500m/roll', '500m/roll', '500m/roll'],
                  ].map(([prop, ...vals]) => (
                    <tr key={prop}>
                      <td><strong>{prop}</strong></td>
                      {vals.map((v, i) => <td key={i}>{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Industries ─────────────────────────────── */}
        <section className="section section--surface">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Industries Served</span>
              <h2>Who Uses Our Label Rolls?</h2>
            </div>
            <div className="js-reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
              {[['👗', 'Garments'], ['🧸', 'Toys'], ['👟', 'Footwear'], ['🛋️', 'Home Textiles'], ['💊', 'Pharma'], ['🏭', 'Industrial'], ['🎁', 'Gifting'], ['🏪', 'Retail']].map(([icon, label]) => (
                <div key={label as string} style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{icon}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────── */}
        <section className="section section--dark">
          <div className="container js-reveal" style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to Place Your Order?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
              Custom widths, custom lengths, any material — get a quote within 24 hours.
            </p>
            <a href="/#contact" className="btn btn-accent btn-lg">Request a Quote</a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
