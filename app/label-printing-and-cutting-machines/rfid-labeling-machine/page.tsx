import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';
import ProductCard from '../../components/ProductCard';

export const metadata = {
  title: 'RFID Labeling Machine | Start Sourcing',
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

        {/* ── Featured RFID Products (6 cards) ───────────────────── */}
        <section className="section">
          <div className="container">
            <div className="section-header js-reveal">
              <h3>Featured RFID Solutions</h3>
              <p style={{ marginTop: 8, color: 'var(--color-muted)' }}>Sample RFID applicators, encoders, and verification modules.</p>
            </div>

            <div className="grid-3 js-reveal-stagger" style={{ gap: '1rem' }}>
              {[
                { 
                  id: 'rfid-print-1', 
                  title: 'DR EAS Label All In One Machine', 
                  desc: 'Combined printer-encoder for label production lines', 
                  image: '/DR EAS Label All In One Machine.jpg', 
                  price: 'Contact for price',
                  features: ['Integrated Folding, Sealing & Application System: Combines multiple processes for streamlined label production', 'High-Speed Output Capability: Processes up to 300 labels per minute for efficient mass production', 'Wide DR EAS Label Compatibility: Supports various sizes and material types', 'Automatic Feeding & Alignment System: Ensures precise positioning and smooth material flow', 'Real-Time Label Detection & Correction: Improves accuracy and reduces production errors', 'User-Friendly Touchscreen Interface: Simplifies operation and machine control', 'Automatic Counting & Batch Separation: Enhances production tracking and organization', 'Quick Format Changeover: Allows fast switching between different label formats', 'Production Line Integration: Easily connects with existing manufacturing workflows', 'Built-in Safety System: Includes emergency stop buttons and advanced safety sensors',],
                 },
                { 
                  id: 'rfid-app-1', 
                  title: 'NC RFID Tag Bonding Machine', 
                  desc: 'High-precision applicator for cartons and units', 
                  image: '/NC RFID Tag Bonding Machine.jpg', 
                  price: 'Contact for price',
                  features: ['Low-Noise High-Speed Design: Enables efficient operation with reduced sound levels', 'High-Precision Servo Motor System: Ensures accurate label transfer and registration', 'Imported Detection Sensors: Provides precise label bonding and material supplementation control', 'Anti-Static Worktable: Protects RFID chips from electrostatic damage during operation', 'NC Touchscreen Control System: Offers smart, intuitive operation and easy maintenance', 'Wide RFID Compatibility: Supports bonding and printing of various RFID label shapes and sizes', 'CNC-Based Precision Technology: Delivers consistent accuracy and high production efficiency', 'Industrial Application Suitability: Ideal for logistics, warehousing, and supply chain operations',],
                 },
                { 
                  id: 'rfid-encoder-1', 
                  title: 'RFID Coding Machine', 
                  desc: 'High-speed encoder for pre-programming rolls', 
                  image: '/RFID Coding Machine.jpg', 
                  price: 'Contact for price', 
                  features: ['Versatile Tag Support: Compatible with a wide range of RFID tag types and formats', 'Flexible Data Handling: Supports dynamic data input and efficient encoding processes', 'User-Friendly Interface: Simplifies operation with an intuitive control system', 'High-Speed Multi-Tag Encoding: Enables fast processing of multiple RFID tags simultaneously', 'Error Checking & Data Integrity: Ensures accurate encoding and reliable data validation', 'Advanced Tag Programming: Supports complex RFID data structures and configurations', 'Seamless System Integration: Easily integrates with existing production and logistics systems',],
                },
                { 
                  id: 'rfid-inspect-1', 
                  title: 'RFID Label Printing Machine', 
                  desc: 'Automated read-check and reject station', 
                  image: '/RFID Label Printing Machine.jpg', 
                  price: 'Contact for price',
                  features: ['RFID Encoding & Printing in One Step: Combines labeling and encoding for streamlined workflow', 'High-Speed Production Capability: Achieves up to 15,000 labels per hour for mass production','Automatic Feeding & Precise Positioning: Ensures accurate label handling and placement', 'Multi-RFID Compatibility: Supports both passive and active RFID tags', 'UHF & HF Frequency Support: Works with multiple RFID communication standards', 'Multi-Format Data Handling: Compatible with ASCII, hexadecimal, and other encoding formats', 'Real-Time RFID Verification: Reads and validates data during production for accuracy', 'User-Friendly Touchscreen Interface: Simplifies operation and machine control', 'Automatic Cleaning System: Maintains consistent performance and reduces downtime', 'Industrial Application Use: Ideal for inventory, asset tracking, and access control systems',],
                 },
                { 
                  id: 'rfid-handheld-1', 
                  title: 'RFID Labeling Machine', 
                  desc: 'Portable encoder for manual operations and overrides', 
                  image: '/RFID Labeling Machine.jpg', 
                  price: 'From $899',
                  features: ['High Production Speed: Up to 60 meters per minute (maximum output)', 'High Precision Accuracy: Maintains ±0.3mm processing accuracy', 'Minimum Chip Width: Supports chip widths as small as 20mm', 'Large Unwind Capacity: Outer core dimension of Ø500mm for stable feeding', 'Maximum Unwind Diameter: Supports up to 650mm roll diameter', 'Material Compatibility: Designed for RFID chips and paper composite materials', 'Industrial Machine Dimensions: 7500 × 2500 × 2050mm footprint', 'High Power Requirement: Operates on 380V, 32KW industrial power supply', 'Heavy-Duty Build: Machine weight of 3000kg for stable industrial performance',],
                 },
                { 
                  id: 'rfid-tunnel-1', 
                  title: 'RFID Labeling Machine', 
                  desc: 'High-sensitivity tunnel reader for conveyor systems', 
                  image: '/RFID Labeling Machine 2.png', 
                  price: 'Contact for price',
                  features: ['Integrated RFID Encoding & Printing: Combines tag encoding with printing of text, graphics, and barcodes in a single process', 'High-Speed Processing Capability: Handles up to 200 labels per minute for efficient production', 'Multi-RFID Type Support: Compatible with passive, active, and semi-passive RFID tags', 'Wide Material Compatibility: Works with paper, plastic, cardboard, and metal-based label surfaces', 'Automatic Feeding & Alignment System: Ensures precise positioning and smooth continuous operation', 'Real-Time Error Detection & Correction: Automatically identifies and resolves encoding and printing issues', 'User-Friendly Control Interface: Allows easy adjustment of speed, tag position, and label size', 'Quick Changeover Functionality: Enables fast switching between different RFID tag types and label formats', 'ERP & Production Line Integration: Seamlessly connects with existing enterprise systems', 'Enhanced Safety System: Includes emergency stop, protective covers, and multiple safety sensors',],
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

        {/* Frequency Bands & Capabilities removed */}

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

