import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';
import ProductCard from '../../components/ProductCard';

export const metadata = {
  title: 'Security Labels | Start Sourcing',
  description: 'Tamper-evident, holographic, and void security labels to protect your products and brand.',
};

export default function SecurityLabelsPage() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main id="main-content" role="main">

        {/* ── Hero ───────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(135deg, #000d1a 0%, #001f3f 55%, #003366 100%)',
          color: '#fff', padding: '7rem 0 5rem', position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: '-60px', right: '-60px', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,120,255,0.18) 0%, transparent 70%)' }} />
          <div className="container">
            <p className="js-reveal" style={{ color: 'rgba(100,180,255,0.9)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Ribbons And Stickers
            </p>
            <h1 className="js-reveal" style={{ color: '#fff', marginBottom: '1.5rem', maxWidth: '700px' }}>Security Labels</h1>
            <p className="js-reveal" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: '580px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Advanced tamper-evident, holographic, and void security labels that safeguard your products, protect your brand integrity, and give customers confidence.
            </p>
            <div className="js-reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/#contact" className="btn btn-accent btn-lg">Request Samples</a>
              <a href="#solutions" className="btn btn-outline-white btn-lg">View Solutions</a>
            </div>
          </div>
        </section>

        {/* ── Threat Stats ───────────────────────────── */}
        <section style={{ background: '#001f3f', padding: '3rem 0' }}>
          <div className="container">
            <div className="js-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0', textAlign: 'center' }}>
              {[['$4.5T', 'Counterfeiting Cost Globally / Year'], ['70%', 'Consumers Check for Authenticity'], ['3s', 'Time to Verify a Hologram'], ['100%', 'Tamper Evidence on Every Label']].map(([val, label]) => (
                <div key={label} style={{ padding: '1.5rem', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#4db8ff', fontFamily: 'var(--font-display)' }}>{val}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.3rem', lineHeight: 1.4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Solutions ──────────────────────────────── */}
        <section className="section" id="solutions">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Security Solutions</span>
              <h2>Six Layers of Protection</h2>
              <p>From basic tamper evidence to multi-layer covert authentication — choose the right protection level for your product.</p>
            </div>
            <div className="grid-3 js-reveal-stagger">
              {[
                { icon: '🌈', title: 'Holographic Labels', desc: 'Rainbow holographic foil that\'s virtually impossible to counterfeit. Used for brand authentication.' },
                { icon: '🔒', title: 'Tamper-Evident', desc: 'Leaves a permanent "VOID" or "OPENED" pattern when removed — instantly signals tampering.' },
                { icon: '⚠️', title: 'Void Labels', desc: 'Reveals hidden text pattern on removal — alerts consumers and inspectors to tampering attempts.' },
                { icon: '🧨', title: 'Destructible Labels', desc: 'Fragile vinyl that shatters when removal is attempted — perfect for warranty seals.' },
                { icon: '📲', title: 'QR Security Labels', desc: 'Serialized QR codes combined with security features for digital product authentication.' },
                { icon: '🛡️', title: 'Asset Protection', desc: 'Heavy-duty security labels for electronics, equipment, and high-value asset management.' },
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

        {/* ── Featured Security Products (single 4-card grid) ───────────────── */}
        <section className="section">
          <div className="container">
            <div className="section-header js-reveal">
              <h3>Featured Security Products</h3>
              <p style={{ marginTop: 8, color: 'var(--color-muted)' }}>Representative security label SKUs and options.</p>
            </div>

            <div className="grid-3 js-reveal-stagger" style={{ gap: '1rem' }}>
              {[
                { 
                  id: 'holo-1', 
                  title: 'Barcode Security Labels', 
                  desc: 'Rainbow holographic seal for brand authentication', 
                  image: '/Barcode Security Labels.png', 
                  price: 'From $0.12/pc',
                  features: ['Tamper-Evident: Reveals “VOID” or self-destructs when removed', 'Anti-Counterfeit: Includes serial numbers, barcodes, and optional holograms', 'Asset Tracking Ready: Unique identifiers for inventory and logistics', 'Durable Materials: Resistant to chemicals, heat, moisture, and', 'High-Resolution Barcodes:Ensures reliable scanning', 'Customizable: Size, color, logo, and code formats available', 'Optional EAS Compatibility: Works with retail anti-theft systems',],
                 },
                { 
                  id: 'tamper-1', 
                  title: 'CHECKPOINT LABEL (EAS)', 
                  desc: 'Leaves VOID pattern on removal for tamper detection', 
                  image: '/CHECKPOINT LABEL (EAS).png', 
                  price: 'From $0.08/pc',
                  features: ['EAS-Integrated: Fully compatible with RF-based Checkpoint security systems', 'Anti-Theft Assurance: Deters theft and reduces shrinkage without disrupting the shopper’s experience', 'Retail-Ready Design: Sleek, low-profile form factor that blends with product packaging', 'Easy to Apply, Hard to Defeat: Fast application via manual or automated processes, with strong adhesion', 'Customizable Sizes & Formats: Available in rolls or sheets to match your packaging workflow', 'Non-Intrusive: Lightweight and discreet—does not affect product presentation or branding',],
                 },
                { 
                  id: 'destruct-1', 
                  title: 'NFC-Enabled Labels', 
                  desc: 'Shatters on removal—ideal for warranty & tamper proofing', 
                  image: '/NFC-Enabled Labels.png', 
                  price: 'From $0.15/pc',
                  features: ['Embedded NFC Technology: Enables fast, wireless communication with NFC-enabled mobile devices', 'Tamper-Evident Protection: Clearly indicates unauthorized access, removal, or interference', 'Custom Data Encoding: Supports security, authentication, tracking, and marketing applications', 'Universal Smartphone Compatibility: Works seamlessly with Android and iOS NFC-enabled devices', 'Strong Adhesive Backing: Provides durable, long-lasting attachment to a wide range of surfaces', 'Custom Printing & Branding Options: Personalize labels with logos, designs, and brand information',],
                 },
                { 
                  id: 'qr-1', 
                  title: 'RFID Security Label', 
                  desc: 'QR + security features for digital verification', 
                  image: '/RFID Security Label.png', 
                  price: 'From $0.20/pc',
                  features: ['Integrated RFID Technology: Enables non-line-of-sight scanning and real-time asset tracking', 'Tamper-Evident Security: Instantly reveals signs of unauthorized access or interference', 'Customizable Frequency Options: Available in UHF, HF, or NFC formats to suit specific applications', 'High-Performance Adhesive: Ensures strong, long-lasting bonding across various surfaces', 'Custom Identification & Branding: Supports barcodes, serial numbers, logos, and branded designs', 'Secure Data Encoding: Protects against cloning, tampering, and unauthorized access',],
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

        {/* ── How It Works ───────────────────────────── */}
        <section className="section section--surface">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Authentication Process</span>
              <h2>How Security Labels Work</h2>
            </div>
            <div className="js-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              {[
                ['🏷️', 'Apply Label', 'Label is applied to product during packaging — tamper seal is activated on contact.'],
                ['🚢', 'Ship & Distribute', 'Product travels through the supply chain. Label integrity is maintained throughout.'],
                ['🔍', 'Consumer Verifies', 'Consumer checks the label — hologram, QR scan, or physical tamper indicator confirms authenticity.'],
                ['✅', 'Trust Established', 'Authentic product confirmed. Tampered or counterfeit items are immediately identified.'],
              ].map(([icon, title, desc]) => (
                <div key={title as string} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{icon}</div>
                  <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>{title}</h4>
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
              <span className="eyebrow">Applications</span>
              <h2>Protecting Products Across Industries</h2>
            </div>
            <div className="js-reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1rem' }}>
              {[['💊','Pharmaceuticals'],['💻','Electronics'],['💎','Luxury Goods'],['🍷','Food & Beverage'],['🚗','Automotive'],['🪪','Government & ID'],['💄','Cosmetics'],['📦','Logistics']].map(([icon, label]) => (
                <div key={label as string} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.4rem' }}>{icon}</div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Label Specifications removed */}

        {/* ── CTA ────────────────────────────────────── */}
        <section className="section section--dark">
          <div className="container js-reveal" style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Protect Your Brand Today</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
              Get custom security labels designed for your specific product and packaging needs.
            </p>
            <a href="/#contact" className="btn btn-accent btn-lg">Get a Security Assessment</a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
