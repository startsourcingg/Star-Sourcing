import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export const metadata = {
  title: 'Flexo Inks | PTP Solutions',
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

        {/* ── Technical Specifications ───────────────────────── */}
        <section className="section">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Technical Specifications</span>
              <h2>Ink Performance Matrix</h2>
            </div>
            <div className="js-reveal" style={{ overflowX: 'auto' }}>
              <table>
                <thead>
                  <tr><th>Ink Formulation</th><th>Drying / Curing Mechanism</th><th>Viscosity (Zahn #2 / Zahn #3)</th><th>Recommended Substrates</th><th>VOC Content</th></tr>
                </thead>
                <tbody>
                  {[
                    ['Water-Based Series', 'Evaporation / Hot Air / IR', '18–24 seconds', 'Paper, Kraft, Board, Thermal Paper', 'Negligible (< 1%)'],
                    ['UV Flexo Series', 'UV Mercury / LED Curing', '250–600 mPa.s', 'PE, PP, PET, Vinyl, Metallic Foils', 'Zero VOCs'],
                    ['Solvent-Based Series', 'Forced Air Evaporation', '16–22 seconds', 'OPP, Polyester, Foil, Cellophane', 'Medium to High'],
                    ['Low Migration UV', 'High-Output UV Curing', '300–700 mPa.s', 'Saran-coated films, Food labels', 'Zero VOCs'],
                    ['Metallic Effect Inks', 'Air Dry or UV Cure', '20–28 seconds', 'Coated Papers, Clear/White Films', 'Substrate Dependent'],
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

