import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';
import ProductCard from '../../components/ProductCard';

export const metadata = {
  title: 'Barcode Stickers | Start Sourcing',
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

        {/* ── Featured Barcode Products (single 6-card grid) ───────────────── */}
        <section className="section">
          <div className="container">
            <div className="section-header js-reveal">
              <h3>Featured Barcode Stickers</h3>
              <p style={{ marginTop: 8, color: 'var(--color-muted)' }}>Common barcode sticker SKUs across substrates.</p>
            </div>

            <div className="grid-3 js-reveal-stagger" style={{ gap: '1rem' }}>
              {[
                { 
                  id: 'ean-1', 
                  title: 'Asset Tag Barcode Stickers', 
                  desc: 'Retail-ready gloss paper barcode stickers', 
                  image: '/Asset Tag Barcode Stickers.png', 
                  price: 'From $0.05/pc',
                  features: ['Durable Construction: Built for long-lasting performance in demanding environments', 'High-Quality Barcode Printing: Ensures fast, accurate, and reliable scanning', 'Strong Adhesive Backing: Securely adheres to metal, plastic, glass, and other surfaces', 'Customizable Identification Options: Add asset numbers, QR codes, logos, or contact information', 'Resistant to Harsh Conditions: Withstands moisture, abrasion, chemicals, and temperature fluctuations', 'Multiple Material Choices: Available in paper, polyester, and tamper-evident formats',],
                 },
                { 
                  id: 'qr-1', 
                  title: 'Paper Barcode Stickers', 
                  desc: 'Waterproof BOPP QR stickers for packaging', 
                  image: '/Paper Barcode Stickers.png', 
                  price: 'From $0.07/pc',
                  features: ['High-Resolution Print Quality: Delivers accurate, reliable, and fast barcode scanning', 'Wide Printer Compatibility: Works with thermal transfer, inkjet, and laser printing systems', 'Flexible Customization Options: Available in various sizes, shapes, and adhesive strengths', 'Versatile Application Use: Ideal for packaging, inventory management, file labeling, and shipping', 'Custom Printing Capabilities: Supports logos, text, barcodes, and QR codes for branding and identification', 'Cost-Effective Solution: Budget-friendly choice for high-volume labeling requirements',],
                 },
                { 
                  id: 'code128-1', 
                  title: 'Permanent Adhesive Barcode Sticker', 
                  desc: 'Durable polyester for industrial tracking', 
                  image: '/Permanent Adhesive Barcode Sticker.png', 
                  price: 'From $0.09/pc',
                  features: ['Strong Permanent Adhesive: Ensures secure, long-lasting application on various surfaces', 'Multi-Printer Compatibility: Works seamlessly with thermal transfer, laser, and inkjet printers', 'High Print Clarity: Delivers sharp, accurate barcode output for fast scanning', 'Durability Against Wear: Resistant to moisture, abrasion, and daily handling', 'Material Flexibility: Available in paper, vinyl, and synthetic material options', 'Fully Customizable: Supports custom sizes, shapes, and variable data printing',],
                 },
                { 
                  id: 'datamatrix-1', 
                  title: 'PVC Barcode Stickers', 
                  desc: 'High-density DataMatrix for tiny parts', 
                  image: '/PVC Barcode Stickers.png', 
                  price: 'From $0.11/pc',
                  features: ['Premium PVC Construction: Ensures maximum durability and strong weather resistance', 'High-Resolution Barcode Printing: Enables fast, accurate, and error-free scanning', 'Multi-Condition Resistance: Water-resistant, tear-proof, and chemical-resistant surface', 'Wide Printing Compatibility: Works with thermal transfer and digital printing systems', 'Strong Adhesive Backing: Provides secure attachment on both smooth and rough surfaces', 'Fully Customizable Options: Supports variable data, logos, serial numbers, and QR codes',],
                 },
                { 
                  id: 'thermal-1', 
                  title: 'Thermal Transfer Barcode Stickers', 
                  desc: 'Thermal-transfer barcode roll (1 roll min)', 
                  image: '/Thermal Transfer Barcode Stickers.png', 
                  price: 'From $12/roll',
                  features: ['High-Resolution Barcode Printing: Ensures sharp, accurate, and reliable scanning performance', 'Universal Printer Compatibility: Works with all major thermal transfer printers', 'Smudge & Fade Resistance: Maintains long-term readability and print quality', 'Material Flexibility: Available in paper or synthetic options based on application needs', 'Strong Adhesive Bonding: Ensures secure application on a wide range of surfaces', 'Fully Customizable: Supports variable data, QR codes, logos, and serial numbers',],
                 },
                { 
                  id: 'direct-1', 
                  title: 'Transparent Barcode Stickers', 
                  desc: 'Direct thermal for shipping & logistics', 
                  image: '/Transparent Barcode Stickers.png', 
                  price: 'From $8/roll',
                  features: ['Premium Transparent Film: Delivers a discreet, no-label appearance for clean product presentation', 'High-Definition Barcode Printing: Ensures fast, accurate, and reliable scanning performance', 'Strong Adhesive Bonding: Provides secure application on smooth, curved, and glossy surfaces', 'Moisture & Smudge Resistance: Maintains clarity and durability during everyday use and handling', 'Fully Customizable Options: Supports variable data, logos, and QR code integration', 'Multiple Sizes & Finishes: Available in a range of shapes, dimensions, and surface finishes',],
                 },
              ].map((p) => (
                <ProductCard
                  key={p.id}
                  product={{ id: p.id, title: p.title, description: p.desc, image: p.image, price: p.price, features: (p as any).features }}
                />
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

        {/* Barcode Sticker Specifications removed */}

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
