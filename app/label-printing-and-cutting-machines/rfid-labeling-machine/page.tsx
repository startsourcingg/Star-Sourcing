import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';

export const metadata = {
  title: 'RFID Labeling Machine | PTP Solutions',
  description: 'Automated RFID encoding and label application machines for smart inventory and supply chain management.',
};

export default function RFIDLabelingMachinePage() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main id="main-content" role="main">

        {/* ── Hero ───────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(135deg, #001f1f 0%, #004d4d 55%, #008080 100%)',
          color: '#fff', padding: '7rem 0 5rem', position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden="true" style={{ position: 'absolute', bottom: '-80px', right: '-80px', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,255,0.15) 0%, transparent 70%)' }} />
          <div className="container">
            <p className="js-reveal" style={{ color: 'rgba(100,255,255,0.9)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Label Printing &amp; Cutting Machines
            </p>
            <h1 className="js-reveal" style={{ color: '#fff', marginBottom: '1.5rem', maxWidth: '700px' }}>RFID Labeling Machine</h1>
            <p className="js-reveal" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: '580px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              End-to-end RFID label encoding, printing, and application machines that transform your supply chain with real-time tracking, accuracy, and automation.
            </p>
            <div className="js-reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/#contact" className="btn btn-accent btn-lg">Request a Demo</a>
              <a href="#features" className="btn btn-outline-white btn-lg">Explore Technology</a>
            </div>
          </div>
        </section>

        {/* ── Performance Bar ────────────────────────── */}
        <section style={{ background: '#004d4d', padding: '3rem 0' }}>
          <div className="container">
            <div className="js-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', textAlign: 'center' }}>
              {[['1,200/min', 'Max Encoding Speed'], ['10 Meters', 'UHF Read Range'], ['100%', 'Inline Data Verification'], ['EPC Gen2', 'Global Standard Compliant']].map(([val, label]) => (
                <div key={label} style={{ padding: '1.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#99ffff', fontFamily: 'var(--font-display)' }}>{val}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)', marginTop: '0.3rem' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Machine Types ──────────────────────────── */}
        <section className="section" id="features">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Smart Tagging</span>
              <h2>RFID Application Solutions</h2>
              <p>State-of-the-art applicator systems that write chip data and print human-readable text on high-speed lines.</p>
            </div>
            <div className="grid-3 js-reveal-stagger">
              {[
                { icon: '📡', title: 'RFID Encoding Stations', desc: 'High-accuracy UHF and HF RFID chip encoding stations for bulk label programming at line speeds without throughput bottlenecks.' },
                { icon: '🖨️', title: 'Print & Encode Printers', desc: 'Combined RFID units that write electronic product code (EPC) data to internal inlays while printing graphics simultaneously.' },
                { icon: '🤖', title: 'Label Applicators', desc: 'Automated high-precision wipe-on and tamp-blow labelers designed to place smart tags on cartons, pallets, and individual units.' },
                { icon: '✅', title: 'Inline Verification', desc: 'Active confirmation systems that automatically reject and flag labels with unreadable or corrupted chips before packaging.' },
                { icon: '📱', title: 'Handheld Encoders', desc: 'Rugged, portable RFID scanners and encoders to manage data correction, inventory counts, and manual labeling in the warehouse.' },
                { icon: '🏁', title: 'Tunnel Readers', desc: 'Configurable tunnel antennas for conveyor belts ensuring 100% item-level tag registration under rapid transport speeds.' },
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

        {/* ── Specification Table ───────────────────────── */}
        <section className="section section--surface">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Technical Specs</span>
              <h2>Frequency Bands & Capabilities</h2>
              <p>Compare UHF and HF/NFC band configurations supported by our line of RFID labeling machinery.</p>
            </div>
            <div className="js-reveal" style={{ overflowX: 'auto' }}>
              <table>
                <thead>
                  <tr><th>Specification</th><th>UHF (Ultra High Frequency)</th><th>HF (High Frequency) / NFC</th></tr>
                </thead>
                <tbody>
                  {[
                    ['Operating Frequency', '860 – 960 MHz (Global Bands)', '13.56 MHz'],
                    ['Typical Read Range', 'Up to 10 Meters (Antenna Dependent)', '1 – 10 Centimeters'],
                    ['Standard Protocols', 'EPC Class 1 Gen 2 / ISO 18000-6C', 'ISO 15693 / ISO 14443 Type A & B'],
                    ['Maximum Encoding Rate', 'Up to 1,200 parts per minute', 'Up to 600 parts per minute'],
                    ['Memory Structures', '96 – 512 bit EPC / User Memory', '1 KB – 64 KB High Security EEPROM'],
                    ['Primary Verticals', 'Logistics, Shipping, Retail Apparel', 'Pharmaceuticals, Smart ticketing, Access'],
                  ].map((row) => (
                    <tr key={row[0]}>{row.map((cell, i) => <td key={i}>{i === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Process ────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Production Flow</span>
              <h2>Verify and Apply Chain</h2>
            </div>
            <div className="js-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              {[
                ['01', '📡', 'Pre-Read & Query', 'The machine queries the database, retrieves the variable code data, and does a pre-read on the chip.'],
                ['02', '🧪', 'Data Encoding', 'The RF transmitter writes the serialization values into the label inlay under millisecond cycle times.'],
                ['03', '📑', 'Print & Validate', 'Thermal headers apply alphanumeric text and barcode graphics, while the antenna verifies successful read rates.'],
                ['04', '📦', 'Precise Placement', 'The pneumatic tamp or vacuum arm applies the validated label to your package, rejecting any bad chips.'],
              ].map(([num, icon, title, desc]) => (
                <div key={num as string} style={{ textAlign: 'center' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#008080', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', margin: '0 auto 1rem' }}>
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
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to Deploy Smart RFID Technology?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
              Tell our automation specialists about your production speeds, carton sizes, and tracking needs. Let us structure the perfect setup.
            </p>
            <a href="/#contact" className="btn btn-accent btn-lg">Talk to a Specialist</a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

