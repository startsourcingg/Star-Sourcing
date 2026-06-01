import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';

export const metadata = {
  title: 'Barcode Stickers | PTP Solutions',
  description: 'Precision-printed scannable barcode and QR code stickers for retail, inventory, and logistics.',
};

export default function BarcodeStickersPage() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main id="main-content" role="main">

        {/* ── Hero ───────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(135deg, #001a0d 0%, #003d1a 50%, #006633 100%)',
          color: '#fff', padding: '7rem 0 5rem', position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: '-80px', right: '-80px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,200,100,0.15) 0%, transparent 70%)' }} />
          <div className="container">
            <p className="js-reveal" style={{ color: 'rgba(100,255,160,0.9)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Ribbons And Stickers
            </p>
            <h1 className="js-reveal" style={{ color: '#fff', marginBottom: '1.5rem', maxWidth: '680px' }}>Barcode Stickers</h1>
            <p className="js-reveal" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: '580px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Precision-printed, scan-guaranteed barcode and QR code stickers for retail, inventory, logistics, and asset tracking — in any format, on any substrate.
            </p>
            <div className="js-reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/#contact" className="btn btn-accent btn-lg">Get a Quote</a>
              <a href="#barcodes" className="btn btn-outline-white btn-lg">Barcode Types</a>
            </div>
          </div>
        </section>

        {/* ── Stats ──────────────────────────────────── */}
        <section style={{ background: '#006633', padding: '3rem 0' }}>
          <div className="container">
            <div className="js-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', textAlign: 'center' }}>
              {[['99.9%', 'First-Scan Read Rate'], ['200+', 'Barcode Formats Supported'], ['20mm', 'Min Label Size'], ['5M+', 'Labels Printed Monthly']].map(([val, label]) => (
                <div key={label} style={{ padding: '1.5rem', borderRight: '1px solid rgba(255,255,255,0.2)' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-display)' }}>{val}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.75)', marginTop: '0.3rem', lineHeight: 1.4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Barcode Types ──────────────────────────── */}
        <section className="section" id="barcodes">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Supported Formats</span>
              <h2>Every Barcode Type, Covered</h2>
              <p>We print all major 1D and 2D barcode symbologies — tailored to your industry and scanning environment.</p>
            </div>
            <div className="grid-3 js-reveal-stagger">
              {[
                { icon: '📊', title: 'EAN / UPC', desc: 'EAN-13, EAN-8, UPC-A, UPC-E — standard retail barcodes for point-of-sale scanning worldwide.' },
                { icon: '📲', title: 'QR Codes', desc: 'High-density QR in any size, with optional color branding, logo embedding, and variable data.' },
                { icon: '🏭', title: 'Code 128 / 39', desc: 'Alphanumeric barcodes for warehousing, healthcare, shipping, and manufacturing applications.' },
                { icon: '🔢', title: 'DataMatrix', desc: '2D DataMatrix for small-surface labeling on PCBs, medical devices, and precision components.' },
                { icon: '🌡️', title: 'Thermal Transfer', desc: 'Durable thermal transfer barcode labels resistant to heat, chemicals, and abrasion.' },
                { icon: '📦', title: 'Direct Thermal', desc: 'Cost-effective ribbon-free barcode stickers for shipping labels and short-shelf-life uses.' },
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

        {/* ── Material Options ───────────────────────── */}
        <section className="section section--surface">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Substrates</span>
              <h2>Label Materials for Every Environment</h2>
            </div>
            <div className="js-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {[
                ['📄', 'Gloss Paper', 'Indoor retail and office use — high-quality print surface.'],
                ['🧾', 'Matte Paper', 'Easy to write on; ideal for handwritten additions.'],
                ['💧', 'BOPP Film', 'Waterproof and tear-resistant for food and beverage.'],
                ['🏗️', 'Polyester', 'Chemical and heat resistant for industrial environments.'],
                ['🔖', 'Foil Labels', 'Metallic finish for premium product presentation.'],
                ['🧊', 'Freezer Grade', 'Designed to adhere and print clearly at -30°C.'],
              ].map(([icon, title, desc]) => (
                <div key={title as string} style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{icon}</div>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>{title}</h4>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.85rem', margin: 0, lineHeight: 1.5 }}>{desc}</p>
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
              <h2>Barcode Sticker Specifications</h2>
            </div>
            <div className="js-reveal" style={{ overflowX: 'auto' }}>
              <table>
                <thead>
                  <tr><th>Type</th><th>Size Range</th><th>Material</th><th>Min Order</th><th>Print Method</th></tr>
                </thead>
                <tbody>
                  {[
                    ['EAN / UPC', '30×20mm – 100×60mm', 'Gloss / Matte Paper', '500 pcs', 'Digital / Thermal'],
                    ['QR Code', '20×20mm – 200×200mm', 'BOPP / Paper', '200 pcs', 'Digital'],
                    ['Code 128', '25×10mm – 150×50mm', 'Paper / Polyester', '500 pcs', 'Thermal Transfer'],
                    ['DataMatrix', '5×5mm – 50×50mm', 'Polyester', '1000 pcs', 'Digital / Laser'],
                    ['Thermal Labels', 'Custom', 'Direct / Transfer Thermal', '1 Roll', 'Thermal'],
                  ].map((row) => (
                    <tr key={row[0]}>{row.map((cell, i) => <td key={i}>{i === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────── */}
        <section className="section section--dark">
          <div className="container js-reveal" style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to Label Smarter?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
              Get custom barcode stickers for your exact format, substrate, and quantity.
            </p>
            <a href="/#contact" className="btn btn-accent btn-lg">Request a Quote</a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
