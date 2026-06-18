import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import ProductCard from '../components/ProductCard';
import { features } from 'process';

export const metadata = {
  title: 'Label Cloth Jumbo Roll | Start Sourcing',
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
            {/* Four Product Cards for Label Cloth */}
            <div style={{ marginTop: '2rem' }} className="js-reveal">
              <h3 style={{ marginBottom: '1rem' }}>Featured Label Cloth Products</h3>
              <div className="grid-3 js-reveal-stagger" style={{ gap: '1.25rem' }}>
                {[
                  { 
                    id: 'woven-premium', 
                    title: '36″ TYVEK LABEL ROLL', 
                    desc: 'ITEM: TYVEK LABEL', 
                    image: '/36″ TYVEK LABEL ROLL.png', 
                    price: 'From $29',
                    features: ['ITEM: TYVEK LABEL', 'COLOUR: WHITE', 'SIZE: 36″ X 200 METER', 'MATERIAL NAME: TYVEK', 'CLASSIFICATION: NORMAL/ FOR USE ON OFFSET PRINTING MACHINE', 'CORE SIZE: 76MM', 'BRAND: Star Sourcing'],
                  },
                  { 
                    id: 'satin-finish', 
                    title: '56″ TEARAWAY LABEL ROLL', 
                    desc: 'Soft satin finish for luxury garments', 
                    image: '/56″ TEARAWAY LABEL ROLL.png', 
                    price: 'From $49' ,
                    features: ['ITEM: LABEL Cloth', 'COLOUR: WHITE', 'SIZE: 64″ X 200 METER', 'MATERIAL NAME: NYLON TAFFETTA', 'CLASSIFICATION: NORMAL/ FOR USE ON OFFSET PRINTING MACHINE', 'CORE SIZE: 76MM', 'BRAND: Star Sourcing'],
                  },
                  { 
                    id: 'heat-transfer-soft', 
                    title: '63″ SATIN LABEL ROLL', 
                    desc: 'Tagless heat-transfer rolls for comfort', 
                    image: '/63″ SATIN LABEL ROLL.png', 
                    price: 'From $39' ,
                    features: ['ITEM: LABEL Cloth', 'COLOUR: WHITE', 'SIZE: 64″ X 200 METER', 'MATERIAL NAME: NYLON TAFFETTA', 'CLASSIFICATION: NORMAL/ FOR USE ON OFFSET PRINTING MACHINE', 'CORE SIZE: 76MM', 'BRAND: Star Sourcing'],
                  },
                  { 
                    id: 'taffeta-durable', 
                    title: '64″ JUMBO ROLL LABEL CLOTH', 
                    desc: 'Durable taffeta for care & size labels', 
                    image: '/64″ JUMBO ROLL LABEL CLOTH.png', 
                    price: 'From $34' ,
                    features: ['ITEM: SATIN LABEL', 'COLOUR: WHITE', 'SIZE: 63″ X 200 METER', 'MATERIAL NAME: POLYESTER SATIN', 'CLASSIFICATION: NORMAL/ FOR USE ON OFFSET PRINTING MACHINE', 'CORE SIZE: 76MM', 'BRAND: Star Sourcing'],
                  },
                ].map((p) => (
                  <ProductCard
                    key={p.id}
                    product={{ id: p.id, title: p.title, description: p.desc, image: p.image, price: p.price, features: (p as any).features }}
                  />
                ))}
              </div>
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

        {/* Technical Data Sheet removed */}

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
