import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';

export const metadata = {
  title: 'Ultrasonic Cutting Machine | PTP Solutions',
  description: 'Precision ultrasonic cutting machines for clean, sealed edges on woven and synthetic labels.',
};

export default function UltrasonicCuttingMachinePage() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main id="main-content" role="main">

        {/* ── Hero ───────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(135deg, #0d1a0d 0%, #1a3320 55%, #2d4a1a 100%)',
          color: '#fff', padding: '7rem 0 5rem', position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: '-60px', left: '-60px', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(100,200,100,0.12) 0%, transparent 70%)' }} />
          <div className="container">
            <p className="js-reveal" style={{ color: 'rgba(120,220,120,0.9)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Label Printing &amp; Cutting Machines
            </p>
            <h1 className="js-reveal" style={{ color: '#fff', marginBottom: '1.5rem', maxWidth: '700px' }}>Ultrasonic Cutting Machine</h1>
            <p className="js-reveal" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: '580px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Advanced ultrasonic cutting technology that seals and cuts synthetic fabrics, woven labels, and ribbons simultaneously — delivering perfectly finished edges at production-line speeds.
            </p>
            <div className="js-reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/#contact" className="btn btn-accent btn-lg">Request a Demo</a>
              <a href="#advantages" className="btn btn-outline-white btn-lg">See the Advantages</a>
            </div>
          </div>
        </section>

        {/* ── Performance Stats ──────────────────────── */}
        <section style={{ background: '#1a3320', padding: '3rem 0' }}>
          <div className="container">
            <div className="js-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', textAlign: 'center' }}>
              {[['200m/min', 'Max Cutting Speed'], ['35 kHz', 'Ultrasonic Frequency'], ['±0.1mm', 'Cut Precision'], ['< 75dB', 'Operating Noise']].map(([val, label]) => (
                <div key={label} style={{ padding: '1.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#80e080', fontFamily: 'var(--font-display)' }}>{val}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)', marginTop: '0.3rem' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Machine Types ──────────────────────────── */}
        <section className="section">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Machine Configurations</span>
              <h2>Six Cutting System Types</h2>
              <p>From continuous rotary systems to multi-lane configurations — engineered for every production scenario.</p>
            </div>
            <div className="grid-3 js-reveal-stagger">
              {[
                { icon: '⚙️', title: 'Rotary Ultrasonic', desc: 'Continuous rotary cutting for high-speed label and ribbon lines. Perfectly sealed edges every time.' },
                { icon: '✂️', title: 'Blade Ultrasonic', desc: 'Precision straight-blade cutting for narrow labels and technical textiles with exact dimension control.' },
                { icon: '🔧', title: 'Multi-Head Systems', desc: 'Cut multiple lanes simultaneously for maximum throughput on jumbo roll production runs.' },
                { icon: '📚', title: 'Automated Stacking', desc: 'Integrated stacking and counting delivers cut labels in pre-counted stacks ready for packing.' },
                { icon: '🛠️', title: 'Custom Tooling', desc: 'Custom sonotrode and anvil tooling designed for your specific label dimensions and materials.' },
                { icon: '🏭', title: 'Stand-Alone & Inline', desc: 'Available as stand-alone units or integrated inline with your existing printing and rewinding equipment.' },
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

        {/* ── Advantages ─────────────────────────────── */}
        <section className="section section--surface" id="advantages">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">The Ultrasonic Difference</span>
              <h2>Why Ultrasonic vs. Traditional Cutting?</h2>
            </div>
            <div className="js-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              {[
                ['🚫', 'Zero Fraying', 'Sealed synthetic edges eliminate fraying on polyester and nylon labels permanently.'],
                ['🔥', 'No Heat Damage', 'Ultrasonic vibration — not heat — means no scorching, no discoloration.'],
                ['⚡', 'High Speed', 'Cuts at up to 200m/min without compromising edge quality or seal integrity.'],
                ['🔇', 'Low Noise', 'Operates below 75dB for a safer, more comfortable production environment.'],
              ].map(([icon, title, desc]) => (
                <div key={title as string} style={{ padding: '2rem 1.5rem', background: '#fff', borderRight: '1px solid var(--color-border)', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{icon}</div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{title}</h4>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>

            {/* Traditional vs Ultrasonic comparison */}
            <div className="js-reveal" style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div style={{ background: '#fff3f3', border: '1px solid #ffcccc', borderRadius: 'var(--radius-lg)', padding: '2rem' }}>
                <h4 style={{ color: '#c41e1e', marginBottom: '1rem' }}>❌ Traditional Blade Cutting</h4>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: 2 }}>
                  <li>Fraying on synthetic materials</li>
                  <li>Blade wear requires frequent replacement</li>
                  <li>Heat damage on delicate fabrics</li>
                  <li>Separate sealing step required</li>
                  <li>Lower production speeds</li>
                </ul>
              </div>
              <div style={{ background: '#f0fff4', border: '1px solid #99ddaa', borderRadius: 'var(--radius-lg)', padding: '2rem' }}>
                <h4 style={{ color: '#006633', marginBottom: '1rem' }}>✅ Ultrasonic Cutting</h4>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: 2 }}>
                  <li>Sealed, fray-free edges instantly</li>
                  <li>Sonotrode lasts 10× longer than blades</li>
                  <li>No heat — no damage to any material</li>
                  <li>Simultaneous cut and seal in one pass</li>
                  <li>Up to 200m/min production speed</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Specs ──────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Technical Data</span>
              <h2>Machine Specifications</h2>
            </div>
            <div className="js-reveal" style={{ overflowX: 'auto' }}>
              <table>
                <thead>
                  <tr><th>Parameter</th><th>Standard</th><th>High-Speed</th><th>Multi-Head</th></tr>
                </thead>
                <tbody>
                  {[
                    ['Cutting Speed', 'Up to 80 m/min', 'Up to 200 m/min', 'Up to 150 m/min'],
                    ['Frequency', '20 kHz', '35 kHz', '20 kHz'],
                    ['Max Cut Width', '160mm', '250mm', '500mm'],
                    ['Min Label Width', '5mm', '5mm', '5mm'],
                    ['Power', '500W', '1000W', '2000W'],
                    ['Materials', 'Poly, Nylon, Woven', 'All synthetics', 'All synthetics'],
                    ['Noise Level', '< 72dB', '< 75dB', '< 78dB'],
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
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Upgrade Your Cutting Line Today</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
              Our engineers will configure the right ultrasonic cutting system for your exact production requirements.
            </p>
            <a href="/#contact" className="btn btn-accent btn-lg">Request a Free Demo</a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
