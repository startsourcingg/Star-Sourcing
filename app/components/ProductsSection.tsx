import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './ProductCard';

const products = [
  {
    id: 'label-cloth-jumbo-roll',
    category: 'Stationery',
    title: 'Label Cloth Jumbo Roll',
    description:
      'Our Label Cloth Jumbo Rolls are ideal for garment manufacturers and apparel brands seeking high-quality labeling solutions. Designed for durability and smooth printing, they ensure clear branding and product information on every garment.',
    price: 'From $29',
    priceUnit: '/ 250 cards',
    badge: 'Best Seller',
    badgeType: 'badge-accent',
    image: '/label-cloth-jumbo-role.png',
    features: ['Premium-quality cloth material', 'Suitable for garment labels and care tags', 'Available in custom widths and roll sizes'],
  },
  {
    id: 'ribbon-labels',
    category: 'Marketing',
    title: 'Ribbon Labels',
    description:
      'Add a premium touch to your products with our custom ribbon labels. Perfect for clothing, gifts, packaging, and branding, our ribbon labels are printed with exceptional detail and a luxurious finish.',
    price: 'From $49',
    priceUnit: '/ 100 units',
    badge: 'Popular',
    badgeType: 'badge-dark',
    image: '/Ribbon-Labels.png',
    features: ['High-quality satin & woven ribbons', 'Custom colors, logos & designs', 'Durable and elegant branding solution bleed printing'],
  },
  {
    id: 'barcode-stickers',
    category: 'Large Format',
    title: 'Barcode Sticker',
    description:
      'Enhance product tracking and inventory management with our premium barcode stickers. Designed for clear, accurate scanning and long-lasting performance across various applications.',
    price: 'From $79',
    priceUnit: '/ 2×4 ft',
    badge: 'Fast Delivery',
    badgeType: 'badge-outline',
    image: '/Barcode-Sticker.png',
    features: ['High-quality barcode printing', 'Durable adhesive material', 'Custom sizes & formats available'],
  },
  {
    id: 'security-label',
    category: 'Large Format',
    title: 'Security Label',
    description:
      'Enhance product tracking and inventory management with our premium barcode stickers. Designed for clear, accurate scanning and long-lasting performance across various applications.',
    price: 'From $79',
    priceUnit: '/ 2×4 ft',
    badge: 'Fast Delivery',
    badgeType: 'badge-outline',
    image: '/Security-Labels.png',
    features: ['High-quality barcode printing', 'Durable adhesive material', 'Custom sizes & formats available'],
  },

  {
    id: 'label-cutting-machine',
    category: 'Large Format',
    title: 'Label Cutting Machine',
    description:
      'Enhance product tracking and inventory management with our premium barcode stickers. Designed for clear, accurate scanning and long-lasting performance across various applications.',
    price: 'From $79',
    priceUnit: '/ 2×4 ft',
    badge: 'Fast Delivery',
    badgeType: 'badge-outline',
    image: '/Label Cutting Machine.png',
    features: ['High-quality barcode printing', 'Durable adhesive material', 'Custom sizes & formats available'],
  },
  {
    id: 'label-printing-machine',
    category: 'Large Format',
    title: 'Label Printing Machine',
    description:
      'Enhance product tracking and inventory management with our premium barcode stickers. Designed for clear, accurate scanning and long-lasting performance across various applications.',
    price: 'From $79',
    priceUnit: '/ 2×4 ft',
    badge: 'Fast Delivery',
    badgeType: 'badge-outline',
    image: '/Label Printing Machine.png',
    features: ['High-quality barcode printing', 'Durable adhesive material', 'Custom sizes & formats available'],
  },
  {
    id: 'rfid-labeling-machine',
    category: 'Large Format',
    title: 'Rfid Labeling Machine',
    description:
      'Enhance product tracking and inventory management with our premium barcode stickers. Designed for clear, accurate scanning and long-lasting performance across various applications.',
    price: 'From $79',
    priceUnit: '/ 2×4 ft',
    badge: 'Fast Delivery',
    badgeType: 'badge-outline',
    image: '/Rfid-Labeling-Machine.png',
    features: ['High-quality barcode printing', 'Durable adhesive material', 'Custom sizes & formats available'],
  },
  {
    id: 'flexographic-inks',
    category: 'Large Format',
    title: 'Flexographic Inks',
    description:
      'Enhance product tracking and inventory management with our premium barcode stickers. Designed for clear, accurate scanning and long-lasting performance across various applications.',
    price: 'From $79',
    priceUnit: '/ 2×4 ft',
    badge: 'Fast Delivery',
    badgeType: 'badge-outline',
    image: '/Flexographic-Inks.png',
    features: ['High-quality barcode printing', 'Durable adhesive material', 'Custom sizes & formats available'],
  },
  
];

export default function ProductsSection() {
  return (
    <section className="products-section" id="products" aria-labelledby="products-heading">

      <div className="container">

        {/* Section Header */}
        <div className="section-header js-reveal">
          <span className="eyebrow">Our Products</span>
          <h2 id="products-heading">
            Print Products That <br/>Deliver Results
          </h2>
          <span className="accent-line" aria-hidden="true" />
          <p style={{ marginTop: '1rem' }}>
            Every product is crafted with premium materials and precision
            printing technology — guaranteed to impress.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid-3 js-reveal-stagger" style={{ marginBottom: '3rem' }}>
          {products.map((product) => {
            const routes: Record<string, string> = {
              'Label Cloth Jumbo Roll': '/label-cloth-jumbo-roll',
              'Ribbon Labels': '/ribbons-and-stickers/ribbon-labels',
              'Barcode Sticker': '/ribbons-and-stickers/barcode-stickers',
              'Security Labels': '/ribbons-and-stickers/security-labels',
              'Label Cutting Machine': '/label-printing-and-cutting-machines/ultrasonic-cutting-machine',
              'Label Printing Machine': '/label-printing-and-cutting-machines/label-printing-machine',
              'Rfid Labeling Machine': '/label-printing-and-cutting-machines/rfid-labeling-machine',
              'Flexographic Inks': '/flexo-inks',
            };

            const href = routes[product.title] ?? undefined;

            return (
              <ProductCard key={product.id} product={product} href={href} hideDetails={true} />
            );
          })}
        </div>

        {/* View All CTA */}
        <div style={{ textAlign: 'center' }}>
          <a href="#collections" className="btn btn-outline btn-lg" id="btn-view-all-products">
            View All Products
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
