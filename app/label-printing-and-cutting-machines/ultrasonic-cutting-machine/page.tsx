import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';
import ProductCard from '../../components/ProductCard';

export const metadata = {
  title: 'Ultrasonic Cutting Machine | Start Sourcing',
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

        {/* ── Featured Ultrasonic Products (8 cards) ───────────────────── */}
        <section className="section">
          <div className="container">
            <div className="section-header js-reveal">
              <h3>Featured Ultrasonic Cutting Products</h3>
              <p style={{ marginTop: 8, color: 'var(--color-muted)' }}>Common ultrasonic cutting configurations and tooling options.</p>
            </div>

            <div className="grid-3 js-reveal-stagger" style={{ gap: '1rem' }}>
              {[
                { 
                  id: 'rotary-1', 
                  title: 'Automatic Label Cold Cutting Machine', 
                  desc: 'Continuous rotary cutter for high throughput', 
                  image: '/Automatic Label Cold Cutting Machine.png', 
                  price: 'Contact for price',
                  features: ['High-Speed Cutting Performance: Processes up to 300 labels per minute for efficient production', 'Advanced Cold Cutting Technology: Ensures clean, precise edges without material damage', 'Optional Automatic Stacker: Provides organized output and reduces manual labor requirements', 'User-Friendly PLC Touchscreen Control: Simplifies operation with intuitive controls', 'Wide Material Compatibility: Suitable for paper, plastic, and fabric labels', 'Durable Industrial Construction: Built for long-lasting performance and reliability', 'Easy Maintenance Design: Reduces downtime and simplifies servicing requirements', 'Versatile Industrial Application: Ideal for printing, packaging, and label manufacturing industries',],
                 },
                { 
                  id: 'blade-1', 
                  title: 'Automatic Ultrasonic Center Cutting And Folding Machine', 
                  desc: 'Precision straight-cut system for narrow labels', 
                  image: '/Automatic Ultrasonic Center Cutting And Folding Machine.jpg', 
                  price: 'Contact for price',
                  features: ['Ultrasonic Cutting Technology: Produces precise, clean, and sealed edges without fraying', 'Automatic Roller Feeding System: Ensures smooth, continuous material feeding with reduced waste', 'Touchscreen Control Panel: Enables easy adjustment of cutting length, folding width, speed, and blade count', 'Multiple Folding Modes: Supports center fold, end fold, and piece cut configurations', 'High-Speed Production Capability: Designed for rapid processing in large-scale manufacturing', 'Wide Material Compatibility: Works with polyester, nylon, satin, cotton, and woven tapes', 'Automatic Tension Control: Maintains consistent material tension throughout operation', 'Integrated Counting & Measurement: Provides accurate length tracking and production control', 'Labor-Saving Automation: Reduces manual effort and lowers overall production costs', 'Compact Industrial Design: Built for stable, long-term continuous operation',],
                 },
                { 
                  id: 'multihead-1', 
                  title: 'Automatic Ultrasonic Cutting Machine', 
                  desc: 'Cuts 4 lanes simultaneously for jumbo rolls', 
                  image: '/Automatic Ultrasonic Cutting Machine.jpg', 
                  price: 'Contact for price',
                  features: ['Ultrasonic Vibration Cutting: Delivers clean, precise, and sealed edges without deformation', 'Full Servo Motor Drive System: Ensures high-speed, stable, and accurate operation', 'Food-Grade Titanium Blade: Provides hygienic, durable, and long-lasting cutting performance', 'PLC Touchscreen Control Interface: Enables simple and intuitive machine operation', 'Wide Cutting Capacity: Supports cutting widths up to 700mm', 'High Cutting Height Range: Handles materials up to 130mm in height', 'Automatic Feeding & Collection System: Improves efficiency and reduces manual handling', 'Intelligent Fault Detection: Built-in alarm system for safe and reliable operation', 'Multi-Material Compatibility: Suitable for food, rubber, plastic, leather, textiles, and more', 'Low-Noise Energy-Efficient Design: Supports continuous 24/7 industrial performance',],
                 },
                { 
                  id: 'stacker-1', 
                  title: 'Book Cover Cut Fold Machine', 
                  desc: 'Integrated stacking and counting module', 
                  image: '/Book Cover Cut Fold Machine.jpg', 
                  price: 'Contact for price',
                  features: ['Triple Cutting Modes: Supports hot, cold, and ultrasonic cutting for versatile material processing', 'Multiple Folding Options: Enables end fold, center fold, envelope fold, book fold, and more', 'High-Precision Sensor System: Ensures accurate cutting, alignment, and automatic correction', 'Touchscreen Control Panel: Provides easy setup, real-time monitoring, and job memory storage', 'Fully Automatic Workflow: Automates feeding, folding, and stacking processes end-to-end', 'Customizable Machine Configuration: Supports optional double-sided heat pressing, counting, and adjustable folding units', 'Wide Material Compatibility: Works with satin, nylon, polyester, cotton, adhesive tape, and similar substrates', 'Heavy-Duty Industrial Construction: Built for long-term durability with minimal maintenance needs', 'Low Maintenance Operation: Designed for easy cleaning and reduced downtime', 'High Production Efficiency: Optimized for mass production with reduced labor requirements',],
                 },
                { 
                  id: 'tooling-1', 
                  title: 'Label Slitting Machine', 
                  desc: 'Custom-shaped sonotrodes for specific label profiles', 
                  image: '/Label Slitting Machine.jpg', 
                  price: 'Contact for price',
                  features: ['High-Precision Slitting System: Uses rotary or ultrasonic blades for clean and accurate cuts across label materials', 'Adjustable Blade Configuration: Allows flexible control of slit width and number of blades for different label sizes', 'Robust Feeding Mechanism: Ensures smooth, continuous material flow with stable tension and alignment', 'Advanced Web Guiding System: Automatically corrects alignment using sensors for consistent slitting accuracy', 'Touchscreen Control Interface: Enables easy adjustment of speed, blade pressure, and slit width', 'High-Speed Production Capability: Supports slitting up to 300 labels per minute for large-scale output', 'Wide Material Compatibility: Works with paper, film, synthetic materials, and adhesive-backed labels', 'Enhanced Safety System: Includes emergency stop, safety sensors, and protective covers', 'Low Maintenance Industrial Design: Built for durability and reduced operational downtime', 'Versatile Application Range: Suitable for barcode labels, RFID labels, adhesive tapes, and more',],
                 },
                { 
                  id: 'inspection-1', 
                  title: 'Satin Label Folding Machine', 
                  desc: 'Vision inspection for cut accuracy and defects', 
                  image: '/Satin Label Folding Machine.jpg', 
                  price: 'Contact for price',
                  features: ['Multi Cutting Modes: Supports hot, cold, and ultrasonic cutting for diverse material requirements', 'Multiple Folding Options: Includes end fold, center fold, envelope fold, book fold, and more', 'Touchscreen Control Panel: Provides easy setup, monitoring, and parameter adjustment', 'High-Precision Sensors with Auto Correction: Ensures accurate alignment and consistent output', 'Fully Automatic Workflow: Handles feeding, cutting, and folding without manual intervention', 'Automatic Counting System: Tracks production output in real time', 'Optional Double-Sided Heat Pressing: Improves durability and premium label finish', 'Production Memory Function: Stores job settings for quick repeat production', 'High-Speed Stable Operation: Designed for reliable mass production performance', 'Customizable Machine Configuration: Adaptable to various materials and production needs',],
                 },
                { 
                  id: 'rewind-1', 
                  title: 'Ultrasonic Center Cut And Fold Machine', 
                  desc: 'Precision rewind for fast production lines', 
                  image: '/Ultrasonic Center Cut And Fold Machine.jpg', 
                  price: 'Contact for price',
                  features: ['Automated Optical Inspection (AOI) System: Detects and removes defective labels to reduce waste and improve quality', 'Fully Automated Program Control: Requires minimal input, typically only label length adjustment', 'High-Speed Production Capability: Achieves up to 180 pieces per minute using roller feeding and precision sensors', 'Ultrasonic Cutting Technology: Produces smooth, sealed edges without fraying or deformation', 'PLC Touchscreen Control System: Ensures easy, intelligent, and user-friendly machine operation', 'High Accuracy Performance: Suitable for complex label shapes and multi-material applications', 'Versatile Industrial Application: Ideal for garment, home textile, packaging, and related industries',],
                 },
                { 
                  id: 'safety-1', 
                  title: 'Woven Label Cutting And Folding Machine', 
                  desc: 'Noise reduction and safety enclosure', 
                  image: '/Woven Label Cutting And Folding Machine.png', 
                  price: 'Contact for price',
                  features: ['Multi-Fold Capability: Supports end fold, center fold, mitre fold, and piece cut formats', 'Smart Cutting Mode Selection: Automatically switches between hot and cold cutting based on material type', 'High-Speed Production Output: Capable of producing up to 300 labels per minute', 'Touchscreen Control System: Simplifies setup of cutting width, speed, and folding modes', 'Automatic Blade Adjustment: Intelligently configures blade quantity and spacing for different label sizes', 'Wide Material Compatibility: Works with satin, polyester, cotton, and blended woven labels', 'High-Precision Cutting & Folding: Ensures consistent, accurate results with minimal errors', 'Labor & Cost Efficiency: Fully automated operation reduces manpower and material waste', 'Heavy-Duty Industrial Design: Built for long-term, reliable performance in demanding environments',],
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

        {/* Machine Specifications removed */}

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
