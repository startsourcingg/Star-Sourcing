import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import ProductCard from '../components/ProductCard';

export const metadata = {
  title: 'Flexo Inks | Start Sourcing',
  description: 'High-performance flexographic inks for label printing — water-based, UV, and solvent formulations.',
};

export default function FlexoInksPage() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main id="main-content" role="main">

        {/* ── Hero ───────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(135deg, #0e051a 0%, #1c0e3a 50%, #3d1466 100%)',
          color: '#fff', padding: '7rem 0 5rem', position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: '-80px', right: '-80px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(186,85,211,0.15) 0%, transparent 70%)' }} />
          <div className="container">
            <p className="js-reveal" style={{ color: 'rgba(216,180,254,0.9)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Flexographic Solutions
            </p>
            <h1 className="js-reveal" style={{ color: '#fff', marginBottom: '1.5rem', maxWidth: '680px' }}>Flexo Inks</h1>
            <p className="js-reveal" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: '580px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Premium flexographic inks engineered for label printing — delivering consistent, high-fidelity color, excellent adhesion, and compliance with global safety standards.
            </p>
            <div className="js-reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/#contact" className="btn btn-accent btn-lg">Request Ink Samples</a>
              <a href="#formulations" className="btn btn-outline-white btn-lg">Ink Formulations</a>
            </div>
          </div>
        </section>

        {/* ── Stats ──────────────────────────────────── */}
        <section style={{ background: '#3d1466', padding: '3rem 0' }}>
          <div className="container">
            <div className="js-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', textAlign: 'center' }}>
              {[['ΔE < 1.0', 'Industry-Leading Color Accuracy'], ['600+ m/min', 'Max Press Run Speed'], ['100%', 'Safety & Food Compliance'], ['48-Hour', 'Color Matching Turnaround']].map(([val, label]) => (
                <div key={label} style={{ padding: '1.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-display)' }}>{val}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.75)', marginTop: '0.3rem', lineHeight: 1.4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Ink Types ──────────────────────────── */}
        <section className="section" id="formulations">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Product Range</span>
              <h2>High-Performance Ink Formulations</h2>
              <p>We supply and formulate a comprehensive range of flexographic inks to suit all substrate types and press speeds.</p>
            </div>
            <div className="grid-3 js-reveal-stagger">
              {[
                { icon: '💧', title: 'Water-Based Flexo Inks', desc: 'Eco-friendly, low-VOC water-based inks optimized for paper, board, and corrugated label printing. Highly safe for food-contact packaging.' },
                { icon: '☀️', title: 'UV / LED Flexo Inks', desc: 'Instant-cure UV/LED inks offering exceptional gloss, instant drying, superior scratch resistance, and vibrant color density on films.' },
                { icon: '⚗️', title: 'Solvent-Based Inks', desc: 'Fast-drying solvent inks developed for non-porous substrates like PE, PP, and metallic foils with outstanding adhesion and rub resistance.' },
                { icon: '🍏', title: 'Food-Grade & Low Migration', desc: 'Specialized low-migration ink systems complying with strict EU directives, Swiss Ordinance, and Nestlé guidelines for sensitive packaging.' },
                { icon: '✨', title: 'Metallic & Specialty Effects', desc: 'High-impact gold, silver, pearlescent, fluorescent, and thermochromic inks designed to command retail shelf attention.' },
                { icon: '🛡️', title: 'Varnishes & Overprints', desc: 'Gloss, matte, tactile, and protective varnishes to enhance durability, coefficient of friction (COF), and visual contrast.' },
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

        {/* ── Featured Flexo Inks (4 cards) ───────────────── */}
        <section className="section">
          <div className="container">
            <div className="section-header js-reveal">
              <h3>Featured Flexo Inks</h3>
              <p style={{ marginTop: 8, color: 'var(--color-muted)' }}>Sample ink systems for common substrates and effects.</p>
            </div>

            <div className="grid-3 js-reveal-stagger" style={{ gap: '1rem' }}>
              {[
                { 
                  id: 'water-1', 
                  title: 'Electron Beam Curable Flexographic Inks', 
                  desc: 'Low-VOC water-based ink for coated paper', 
                  image: '/Electron Beam Curable Flexographic Inks.png', 
                  price: 'Contact for price',
                  features: ['Instant Electron Beam Curing: Cures ink using electron beam energy without heat or light', 'Photoinitiator-Free System: Safer formulation for food packaging and low-migration applications', 'High Durability Performance: Strong resistance to abrasion, chemicals, and moisture', 'Vibrant High-Opacity Printing: Delivers sharp details and rich color output', 'Excellent Substrate Adhesion: Performs well on flexible and non-porous materials', 'Eco-Friendly Technology: Zero VOC emissions and solvent-free formulation', 'High-Speed Production Compatibility: Suitable for wide-web and industrial-scale printing', 'Regulatory Compliance Ready: Meets strict food and pharmaceutical packaging standards', 'Stable Shelf Life Performance: Maintains consistency under production and storage conditions',],
                 },
                { 
                  id: 'uv-1', 
                  title: 'Solvent Based Flexographic Inks', 
                  desc: 'Instant cure UV ink for films and foils', 
                  image: '/Solvent Based Flexographic Inks.png', 
                  price: 'Contact for price',
                  features: ['Fast Drying Performance: Achieves quick drying through rapid solvent evaporation', 'Strong Adhesion on Non-Porous Surfaces: Bonds effectively with films, foils, and plastics', 'High-Opacity Vibrant Colors: Produces bright, vivid, and visually impactful prints', 'Excellent Durability: Resistant to abrasion, moisture, and chemical exposure', 'High-Speed Flexographic Compatibility: Optimized for fast-running printing presses', 'Sharp Image Reproduction: Ensures smooth ink transfer with precise detail clarity', 'Wide Material Compatibility: Works with various flexible packaging substrates', 'Multiple Finish Options: Available in gloss, matte, and metallic finishes', 'Long-Lasting Print Quality: Suitable for demanding industrial and environmental conditions',],
                 },
                { 
                  id: 'solvent-1', 
                  title: 'UV Curable Flexographic Inks', 
                  desc: 'High adhesion solvent ink for OPP and PET', 
                  image: '/UV Curable Flexographic Inks.png', 
                  price: 'Contact for price',
                  features: ['Instant UV Curing: Cures immediately under UV light for high-speed production workflows', 'Zero Drying Time: Ready for handling and finishing instantly after printing', 'High Gloss Vibrant Finish: Produces consistent, rich, and visually appealing colors', 'Excellent Substrate Adhesion: Works effectively on both porous and non-porous materials', 'Superior Durability: Resistant to abrasion, moisture, and chemical exposure', 'Eco-Friendly Formulation: Low or zero VOC emissions for safer operation', 'High-Precision Image Quality: Ideal for fine details and sharp print reproduction', 'Low Odor & Clean Operation: Ensures a more comfortable working environment', 'Versatile Application Use: Suitable for labels, flexible packaging, and premium printing applications',],
                 },
                { 
                  id: 'metallic-1', 
                  title: 'Water Based Flexographic Inks', 
                  desc: 'Gold & silver effect inks for premium labels', 
                  image: '/Water Based Flexographic Inks.png', 
                  price: 'Contact for price',
                  features: [ 'Eco-Friendly Formulation: Low VOC emissions for safer and cleaner production', 'Water-Based Solvent System: Uses water as the primary carrier for inks', 'Ideal for Absorbent Substrates: Performs well on paper, board, and tissue materials', 'Bright and Consistent Colors: Delivers vivid, stable, and high-quality print output', 'Easy Water Cleanup: Requires no harsh solvents for cleaning and maintenance', 'Strong Adhesion & Durability: Offers good rub and scuff resistance', 'Fast Drying Capability: Supports air and heat-assisted drying for efficiency', 'Cost-Effective Operation: Reduces material and maintenance costs', 'Food Packaging Compliance Ready: Suitable for applications meeting relevant safety standards',],
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

        {/* ── Color Matching Workflow ───────────────────────── */}
        <section className="section section--surface">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Spectrophotometry</span>
              <h2>Precision Color Matching Workflow</h2>
              <p>Our state-of-the-art laboratory guarantees perfect replication of your brand colors under any lighting condition.</p>
            </div>
            <div className="js-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              {[
                ['01', '📊', 'Spectroscopic Analysis', 'We measure your physical swatch or digital color target using spectrophotometers to establish precise LAB values.'],
                ['02', '🧪', 'Formulation Engineering', 'Our database software generates the ideal recipe, balancing pigment load, viscosity, and curing speed.'],
                ['03', '📑', 'Substrate Proofing', 'Inks are proofed directly on your production stock to verify Delta E compliance and adhesion properties.'],
                ['04', '🏭', 'Press-Ready Delivery', 'Batches are manufactured, filtered, and shipped with full certificate of analysis (COA) logs for repeat order consistency.'],
              ].map(([num, icon, title, desc]) => (
                <div key={num as string} style={{ textAlign: 'center' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#3d1466', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', margin: '0 auto 1rem' }}>
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

        {/* Ink Performance Matrix removed */}

        {/* ── CTA ────────────────────────────────────── */}
        <section className="section section--dark">
          <div className="container js-reveal" style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Need a Custom Ink Formulation?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', maxWidth: '520px', margin: '0 auto 2rem' }}>
              Our chemical engineers and color specialists are ready to tailor inks for your specific presses, speeds, and printing materials.
            </p>
            <a href="/#contact" className="btn btn-accent btn-lg">Request a Custom Match</a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

