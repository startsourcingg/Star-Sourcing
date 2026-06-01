import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';

export const metadata = {
  title: 'Label Printing Machine | PTP Solutions',
  description: 'High-speed thermal, digital, and flexographic label printing machines for industrial production.',
};

export default function LabelPrintingMachinePage() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main id="main-content" role="main">

        {/* ── Hero ───────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(135deg, #001433 0%, #002966 55%, #004080 100%)',
          color: '#fff', padding: '7rem 0 5rem', position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden="true" style={{ position: 'absolute', bottom: '-80px', right: '-80px', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,100,255,0.2) 0%, transparent 70%)' }} />
          <div className="container">
            <p className="js-reveal" style={{ color: 'rgba(100,160,255,0.9)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Label Printing &amp; Cutting Machines
            </p>
            <h1 className="js-reveal" style={{ color: '#fff', marginBottom: '1.5rem', maxWidth: '700px' }}>Label Printing Machine</h1>
            <p className="js-reveal" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: '580px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Industrial label printing machines built for speed, precision, and reliability — from compact desktop units to full production-line flexographic systems.
            </p>
            <div className="js-reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/#contact" className="btn btn-accent btn-lg">Request a Demo</a>
              <a href="#types" className="btn btn-outline-white btn-lg">View Machine Types</a>
            </div>
          </div>
        </section>

        {/* ── Performance Bar ────────────────────────── */}
        <section style={{ background: '#002966', padding: '3rem 0' }}>
          <div className="container">
            <div className="js-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', textAlign: 'center' }}>
              {[['300mm/s', 'Max Print Speed'], ['1200 DPI', 'Max Resolution'], ['168mm', 'Max Print Width'], ['5 Min', 'Media Changeover']].map(([val, label]) => (
                <div key={label} style={{ padding: '1.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#66aaff', fontFamily: 'var(--font-display)' }}>{val}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)', marginTop: '0.3rem' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Machine Types ──────────────────────────── */}
        <section className="section" id="types">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Machine Range</span>
              <h2>Six Printing Technologies</h2>
              <p>Every label printing technology under one roof — matched to your label type, volume, and substrate.</p>
            </div>
            <div className="grid-3 js-reveal-stagger">
              {[
                { icon: '🌡️', title: 'Thermal Transfer', desc: 'Durable, high-resolution labels on ribbon-based media. Ideal for barcodes, asset tags, and product labels.' },
                { icon: '📄', title: 'Direct Thermal', desc: 'Ribbon-free printing for shipping labels, receipts, and short-shelf-life products. Low cost per label.' },
                { icon: '🎨', title: 'Digital Label Press', desc: 'Full-color, variable-data digital presses for short-to-medium runs with photographic print quality.' },
                { icon: '🖨️', title: 'Flexographic Press', desc: 'High-speed flexo for long-run label production with consistent color on rolls.' },
                { icon: '☀️', title: 'UV Inkjet', desc: 'Instant-cure UV inkjet printing on virtually any substrate — paper, film, foil, or textured media.' },
                { icon: '🖥️', title: 'Desktop Printers', desc: 'Compact office-friendly units for low-volume, on-demand label printing without a production line.' },
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

        {/* ── Comparison Table ───────────────────────── */}
        <section className="section section--surface">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Side by Side</span>
              <h2>Machine Comparison</h2>
              <p>Compare key specifications across our printing technology range to find your ideal match.</p>
            </div>
            <div className="js-reveal" style={{ overflowX: 'auto' }}>
              <table>
                <thead>
                  <tr><th>Technology</th><th>Print Width</th><th>Max Speed</th><th>Resolution</th><th>Best For</th></tr>
                </thead>
                <tbody>
                  {[
                    ['Thermal Transfer', 'Up to 168mm', '300 mm/s', '300 DPI', 'Barcodes, Asset Tags'],
                    ['Digital Press', 'Up to 330mm', '75 m/min', '1200 DPI', 'Short-Run, Variable Data'],
                    ['Flexographic', 'Up to 520mm', '200 m/min', '150 LPI', 'Long-Run, Consistent Color'],
                    ['UV Inkjet', 'Up to 220mm', '50 m/min', '1440 DPI', 'Specialty Substrates'],
                    ['Desktop', 'Up to 108mm', '150 mm/s', '203–600 DPI', 'Low Volume, On-Demand'],
                  ].map((row) => (
                    <tr key={row[0]}>{row.map((cell, i) => <td key={i}>{i === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Selection Guide ────────────────────────── */}
        <section className="section">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Buying Guide</span>
              <h2>How to Choose the Right Machine</h2>
            </div>
            <div className="js-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
              {[
                ['📦', 'Consider Volume', 'Low volume (< 5K labels/day)? Go desktop. Medium? Digital press. High volume? Flexo.'],
                ['🎨', 'Consider Color Needs', 'Monochrome barcodes only? Thermal transfer. Full-color product labels? Digital or UV inkjet.'],
                ['🧪', 'Consider Substrate', 'Standard paper: any technology. Film, foil, or synthetic: UV inkjet or flexo.'],
                ['💰', 'Consider Budget', 'Total cost of ownership includes media, consumables, and maintenance — we model this for you.'],
              ].map(([icon, title, desc]) => (
                <div key={title as string} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '2rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{icon}</div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{title}</h4>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────── */}
        <section className="section section--dark">
          <div className="container js-reveal" style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Get the Right Machine for Your Line</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
              Tell us your production requirements and we'll recommend the perfect label printing solution — with a free ROI analysis.
            </p>
            <a href="/#contact" className="btn btn-accent btn-lg">Request a Consultation</a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
