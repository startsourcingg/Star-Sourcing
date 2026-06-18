import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';
import ProductCard from '../../components/ProductCard';

export const metadata = {
  title: 'Label Printing Machine | Start Sourcing',
  description: 'High-speed thermal, digital, and flexographic label printing machines for industrial production.',
};

export default function LabelPrintingMachinePage() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main id="main-content" role="main">

        {/* ── Hero ───────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(135deg, #001433 0%, #002966 55%, #004080 100%)',
          color: '#fff', padding: '7rem 0 5rem', position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden="true" style={{ position: 'absolute', bottom: '-80px', right: '-80px', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,100,255,0.2) 0%, transparent 70%)' }} />
          <div className="container">
            <p className="js-reveal" style={{ color: 'rgba(100,160,255,0.9)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Label Printing &amp; Cutting Machines
            </p>
            <h1 className="js-reveal" style={{ color: '#fff', marginBottom: '1.5rem', maxWidth: '700px' }}>Label Printing Machine</h1>
            <p className="js-reveal" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: '580px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Industrial label printing machines built for speed, precision, and reliability — from compact desktop units to full production-line flexographic systems.
            </p>
            <div className="js-reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/#contact" className="btn btn-accent btn-lg">Request a Demo</a>
              <a href="#types" className="btn btn-outline-white btn-lg">View Machine Types</a>
            </div>
          </div>
        </section>

        {/* ── Featured Machines (10 product cards) ───────────────────────── */}
        <section className="section">
          <div className="container">
            <div className="section-header js-reveal">
              <h3>Featured Printing Machines</h3>
              <p style={{ marginTop: 8, color: 'var(--color-muted)' }}>Representative machines across technologies and sizes.</p>
            </div>

            <div className="grid-3 js-reveal-stagger" style={{ gap: '1rem' }}>
              {[
                { 
                  id: 'thermal-1', 
                  title: '1 Color Screen Print Machine', 
                  desc: 'High-speed thermal transfer for barcode & asset labels', 
                  image: '/1 Color Screen Print Machine.png', 
                  price: 'Contact for price',
                  features: ['Single-Color Precision Printing: Produces crisp, clean, and uniform prints for one-color applications', 'Durable Screen Frame System: Ensures stable performance and accurate print registration', 'High-Quality Squeegee Mechanism: Delivers even ink distribution for consistent output', 'User-Friendly Operation: Simple setup and operation requiring minimal training', 'Compact & Space-Saving Design: Fits easily into small studios and workshop environments', 'Multi-Material Compatibility: Supports printing on paper, textiles, PVC, leather, wood, metal, and more', 'Automatic Cleaning Support: Reduces downtime and simplifies maintenance workflow', 'Reliable Industrial Build: Designed for long-term use in commercial and production settings',],
                 },
                { 
                  id: 'digital-1', 
                  title: 'Fast Speed Fabric Printing Machine', 
                  desc: 'Full-color digital press for short-run labels', 
                  image: '/Fast Speed Fabric Printing Machine.png', 
                  price: 'Contact for price',
                  features: ['Dual Ink System: Supports both direct-to-fabric and dye-sublimation printing for maximum flexibility', 'Wide-Format Printing Capability: Handles print widths up to 1800mm for large-scale textile production', 'High-Resolution Output: Produces sharp, vibrant prints at up to 1200 dpi', 'High-Speed Industrial Production: Capable of printing hundreds of square meters per hour', 'Advanced Digital Control System: Ensures precise alignment, color accuracy, and reduced operator errors', 'Multi-Color Printing Capability: Delivers rich gradients and complex designs with professional color accuracy', 'Versatile Fabric Compatibility: Works with cotton, silk, polyester, nylon, and blended textiles', 'User-Friendly Operation: Intuitive interface designed to reduce training time and improve efficiency', 'Automatic Cleaning System: Minimizes maintenance downtime and extends machine lifespan', 'Energy-Efficient Design: Optimized for reduced ink usage and lower operational costs',],
                 },
                { 
                  id: 'flexo-1', 
                  title: 'Five Color Flexo Tape Printing Machine', 
                  desc: 'High-capacity flexo press for long runs', 
                  image: '/Five Color Flexo Tape Printing Machine.jpg', 
                  price: 'Contact for price',
                  features: ['Five-Color Flexographic Printing: Produces vivid, sharp, and multi-color prints with excellent registration accuracy', 'High-Speed Production Capability: Achieves printing speeds up to 1 meter per second for large-scale output', 'Wide Material Compatibility: Supports adhesive tapes, masking tapes, duct tapes, cotton, rubber, nylon, and paper tapes', 'Precision Gear-Driven System: Ensures smooth, stable, and reliable operation even at high speeds', 'Advanced Ink Control System: Double-chambered doctor blade delivers clean and consistent ink application', 'Ceramic Anilox Roller Technology: Provides precise ink transfer and uniform color distribution', 'Real-Time Quality Monitoring: Static screen and camera system ensures continuous inspection and accuracy', 'Large Printing Capacity: Supports printing widths up to 150mm and lengths up to 300mm', 'Automatic Feeding & Tension Control: Reduces manual work and minimizes material waste', 'Integrated Infrared Drying System: Enables fast ink curing for uninterrupted production flow', 'Industrial-Grade Build Quality: Designed for durability and long-term heavy-duty operation', 'User-Friendly Operation: Simple interface for easy control, maintenance, and workflow management',],
                 },
                { 
                  id: 'uv-1', 
                  title: 'Flexo Narrow Garment Label Printing Machine (ORR)', 
                  desc: 'UV inkjet for specialty substrates and foil', 
                  image: '/Flexo Narrow Garment Label Printing Machine (ORR).jpg', 
                  price: 'Contact for price',
                  features: ['On-Running Registration Control: Enables real-time adjustment during operation for improved accuracy and reduced downtime', 'Pneumatic Ink Fountain System: Ensures stable, leak-proof ink delivery with consistent printing pressure', 'Quick Changeover System: Allows fast ink fountain and cylinder replacement to minimize production downtime', 'High-Precision Narrow Label Printing: Produces sharp, detailed output for garment labels and narrow-width materials', 'Compact Industrial Design: Optimized for efficient performance in space-limited production environments', 'Versatile Application Range: Suitable for satin, nylon, polyester, paper labels, and garment branding materials', 'High Productivity Output: Designed for continuous high-speed operation in demanding manufacturing workflows', 'Stable Flexographic Performance: Ensures consistent print quality across long production runs', 'Multi-Material Compatibility: Supports cotton tape, rubber tape, nylon tape, and paper tape printing',],
                 },
                { 
                  id: 'desktop-1', 
                  title: 'Garment Label Screen Printing Machine', 
                  desc: 'Compact desktop printer for on-demand labels', 
                  image: '/Garment Label Screen Printing Machine.jpg', 
                  price: 'From $899',
                  features: ['Fully Computerized Control System: Touchscreen operation for precise automation, efficiency, and easy control', 'High-Speed Industrial Production: Designed for consistent, large-scale garment label output', 'Servo Motor & Rexroth Pneumatic System: Ensures smooth motion, stability, and accurate printing performance', 'Multi-Color Printing Capability: Supports high-definition, multi-color designs with precise registration', 'Double-Sided Printing Function: Enables synchronized printing on both sides of labels for premium branding', 'Advanced Color Sensor System: Provides real-time color matching and registration correction', 'Wide Material Compatibility: Works with cotton, polyester, nylon, satin, and other label substrates', 'Energy-Efficient Operation: Built-in auto-cleaning and optimized system reduces maintenance and power use', 'User-Friendly Interface: Simple controls suitable for operators of all experience levels',],
                 },
                { 
                  id: 'thermal-2', 
                  title: 'High Speed Three Colors Flexo Clothing Label Printing Machine', 
                  desc: 'Entry-level thermal transfer for low volume', 
                  image: '/High Speed Three Colors Flexo Clothing Label Printing Machine.jpg', 
                  price: 'From $1299',
                  features: ['High-Speed Printing Performance: Operates up to 70 meters per minute (1m/s) for large-scale production efficiency', 'Three-Color Flexo System: Supports vivid, precise printing with expandable 3+2 color configuration', 'Dual-Belt Printing Capability: Enables simultaneous printing on two belts to reduce production time and cost', 'Wide Material Compatibility: Works with cotton, rubber, nylon, paper, and adhesive tapes', 'Superior Print Quality Output: Delivers strong solid colors with fast color development and clarity','Fully Automatic Operation: Streamlines workflow for higher productivity and reduced manual effort', 'User-Friendly Interface: Simple controls for easy setup, operation, and adjustment', 'Robust Industrial Construction: Built for durability and long-term performance in heavy-duty environments', 'Low Maintenance Design: Easy cleaning and reduced downtime for continuous production',],
                 },
                { 
                    id: 'digital-2', 
                    title: 'Jet UV Printer', 
                    desc: 'Variable-data digital press for personalization', 
                    image: '/Jet UV Printer.jpg', 
                    price: 'Contact for price',
                    features: ['Advanced UV Curing Technology: Enables instant ink drying for faster production and high durability', 'Multi-Material Printing Capability: Supports glass, metal, wood, plastic, leather, and more', 'High-Resolution CMYK + White Ink System: Produces vibrant, detailed, and professional-quality output', 'Dark & Transparent Substrate Support: Ensures excellent visibility on challenging surfaces', 'Precision Ink Droplet Technology: Delivers accurate placement for sharp and consistent prints', 'Adjustable Print Resolution: Balances speed and quality based on production requirements', 'User-Friendly Design Software: Simplifies design creation and print management workflow', 'Intelligent Control System: Automatically adjusts printing parameters for optimal results', 'Cool LED UV Lamps: Protects heat-sensitive materials during curing process', 'Flexible Production Modes: Supports both continuous and batch printing workflows',],
                   },
                  { 
                    id: 'flexo-2', 
                    title: 'Multi Colour Film Screen Printing Machine', 
                    desc: 'Flexo press with integrated slitting & rewind', 
                    image: '/Multi Colour Film Screen Printing Machine.jpg', 
                    price: 'Contact for price',
                    features: ['Multi-Color Screen Printing System: Produces vibrant, detailed, and high-quality prints', 'Wide Material Compatibility: Supports PET, PVC, PE, BOPP, and other film materials', 'High-Precision Screen Frame & Squeegee: Ensures accurate and consistent ink transfer', 'Digital Control Interface: Provides precise registration and ink management control', 'Fast & Stable Printing Performance: Delivers consistent output at high production speeds', 'Automatic Cleaning System: Reduces downtime and improves maintenance efficiency', 'Versatile Application Support: Suitable for labels, stickers, plastic cards, bags, and decals', 'Compact Industrial Design: Space-saving structure suitable for various production setups', 'Strong Ink Adhesion: Ensures long-lasting, durable print results', 'User-Friendly Operation: Simple setup requiring minimal operator training',],
                   },
                  { 
                    id: 'uv-2', 
                    title: 'Roll To Roll Screen Printing Machine', 
                    desc: 'Wide-format UV inkjet for labels up to 220mm', 
                    image: '/Roll To Roll Screen Printing Machine.jpg', 
                    price: 'Contact for price',
                    features: ['Automatic Computer-Controlled Operation: Ensures precise multi-color alignment and consistent printing accuracy', 'Up to 8-Color Screen Printing Capability: Delivers stable, high-speed multi-color production', 'High Color Fastness & Concealment: Produces vibrant, durable prints with long-lasting results', 'Excellent Dark Material Printing: Achieves sharp text, solid coverage, and 3D visual effects', 'Multi-Technique Compatibility: Supports thermal transfer, UV, Braille, bronzing, hot silver, and rubber printing', 'Roll-to-Roll Printing System: Enables continuous, efficient production workflow', 'Wide Material Compatibility: Works with ribbons, cotton tapes, nylon belts, elastic bands, PVC, and paper rolls', 'High Print Clarity Output: Prevents side bleeding and ensures clean, precise edges', 'Industrial Application Versatility: Ideal for textile, label, toy, and accessory manufacturing industries',],
                   },
                  { 
                    id: 'desktop-2', 
                    title: 'Six Color Flexo Label Printing Machine (ORR)', 
                    desc: 'Desktop printer with built-in cutter and rewinder', 
                    image: '/Six Color Flexo Label Printing Machine (ORR).jpg', 
                    price: 'From $1499',
                    features: ['Six-Color Flexographic Printing System: Enables high-resolution, vibrant multi-color output', 'Ceramic Anilox Roller Technology: Ensures uniform ink transfer with reduced ink waste', 'On-Running Registration (ORR) System: Provides real-time alignment correction during printing', 'Servo Motor & PLC Control: Delivers precise operation and automated performance adjustments', 'Integrated Infrared (IR) Drying System: Enables fast and efficient ink curing for continuous production', 'Wide Printing Capacity: Supports up to 150mm print width and 300mm print length', 'Multi-Material Compatibility: Works with satin, cotton, nylon, polyester, and other label fabrics', 'Stable Industrial Performance: Low-noise, consistent operation for long production runs', 'User-Friendly Operation: Simple interface with easy setup and maintenance', 'High-Efficiency Production: Minimizes material waste and reduces downtime',],
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
        <section style={{ background: '#002966', padding: '3rem 0' }}>
          <div className="container">
            <div className="js-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', textAlign: 'center' }}>
              {[['300mm/s', 'Max Print Speed'], ['1200 DPI', 'Max Resolution'], ['168mm', 'Max Print Width'], ['5 Min', 'Media Changeover']].map(([val, label]) => (
                <div key={label} style={{ padding: '1.5rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#66aaff', fontFamily: 'var(--font-display)' }}>{val}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)', marginTop: '0.3rem' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Machine Types ──────────────────────────── */}
        <section className="section" id="types">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Machine Range</span>
              <h2>Six Printing Technologies</h2>
              <p>Every label printing technology under one roof — matched to your label type, volume, and substrate.</p>
            </div>
            <div className="grid-3 js-reveal-stagger">
              {[
                { icon: '🌡️', title: 'Thermal Transfer', desc: 'Durable, high-resolution labels on ribbon-based media. Ideal for barcodes, asset tags, and product labels.' },
                { icon: '📄', title: 'Direct Thermal', desc: 'Ribbon-free printing for shipping labels, receipts, and short-shelf-life products. Low cost per label.' },
                { icon: '🎨', title: 'Digital Label Press', desc: 'Full-color, variable-data digital presses for short-to-medium runs with photographic print quality.' },
                { icon: '🖨️', title: 'Flexographic Press', desc: 'High-speed flexo for long-run label production with consistent color on rolls.' },
                { icon: '☀️', title: 'UV Inkjet', desc: 'Instant-cure UV inkjet printing on virtually any substrate — paper, film, foil, or textured media.' },
                { icon: '🖥️', title: 'Desktop Printers', desc: 'Compact office-friendly units for low-volume, on-demand label printing without a production line.' },
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

        {/* Machine Comparison removed */}

        {/* ── Selection Guide ────────────────────────── */}
        <section className="section">
          <div className="container">
            <div className="section-header js-reveal">
              <span className="eyebrow">Buying Guide</span>
              <h2>How to Choose the Right Machine</h2>
            </div>
            <div className="js-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
              {[
                ['📦', 'Consider Volume', 'Low volume (< 5K labels/day)? Go desktop. Medium? Digital press. High volume? Flexo.'],
                ['🎨', 'Consider Color Needs', 'Monochrome barcodes only? Thermal transfer. Full-color product labels? Digital or UV inkjet.'],
                ['🧪', 'Consider Substrate', 'Standard paper: any technology. Film, foil, or synthetic: UV inkjet or flexo.'],
                ['💰', 'Consider Budget', 'Total cost of ownership includes media, consumables, and maintenance — we model this for you.'],
              ].map(([icon, title, desc]) => (
                <div key={title as string} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '2rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{icon}</div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{title}</h4>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────── */}
        <section className="section section--dark">
          <div className="container js-reveal" style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Get the Right Machine for Your Line</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
              Tell us your production requirements and we'll recommend the perfect label printing solution — with a free ROI analysis.
            </p>
            <a href="/#contact" className="btn btn-accent btn-lg">Request a Consultation</a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
