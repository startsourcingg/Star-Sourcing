import Image from 'next/image';

const products = [
  {
    id: 'business-cards',
    category: 'Stationery',
    title: 'Premium Business Cards',
    description:
      'Make a lasting first impression with our luxury business cards. Available in matte, gloss, and soft-touch finishes with sharp edge-to-edge printing.',
    price: 'From $29',
    priceUnit: '/ 250 cards',
    badge: 'Best Seller',
    badgeType: 'badge-accent',
    image: '/product-business-cards.png',
    features: ['Matte & Gloss finish', '16pt premium card stock', 'Full-color both sides'],
  },
  {
    id: 'brochures',
    category: 'Marketing',
    title: 'Tri-Fold Brochures',
    description:
      'Showcase your services with professional tri-fold and bi-fold brochures. High-quality paper with vivid color accuracy that makes your brand shine.',
    price: 'From $49',
    priceUnit: '/ 100 units',
    badge: 'Popular',
    badgeType: 'badge-dark',
    image: '/product-brochure.png',
    features: ['Gloss or matte coating', 'Multiple fold options', 'Full bleed printing'],
  },
  {
    id: 'banners',
    category: 'Large Format',
    title: 'Vinyl Banners & Roll-Ups',
    description:
      'High-impact banners for events, trade shows, and storefronts. Durable materials with fade-resistant inks that last indoors and outdoors.',
    price: 'From $79',
    priceUnit: '/ 2×4 ft',
    badge: 'Fast Delivery',
    badgeType: 'badge-outline',
    image: '/product-banner.png',
    features: ['UV-resistant inks', 'Indoor & outdoor grade', 'Hemmed & grommeted'],
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
          {products.map((product) => (
            <article
              key={product.id}
              className="product-card"
              id={`product-${product.id}`}
              aria-label={product.title}
            >
              {/* Card Image */}
              <div className="product-card-image">
                <Image
                  src={product.image}
                  alt={`${product.title} — printing product showcase`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="product-card-badge">
                  <span className={`badge ${product.badgeType}`}>{product.badge}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="product-card-body">
                <p className="product-card-category">{product.category}</p>
                <h3 className="product-card-title">{product.title}</h3>
                <p className="product-card-description">{product.description}</p>

                {/* Feature list */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  {product.features.map((feat) => (
                    <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-secondary)' }}>
                      <span aria-hidden="true" style={{ color: 'var(--color-accent)', fontWeight: 700 }}>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Card Footer */}
                <div className="product-card-footer">
                  <div className="product-card-price">
                    {product.price}
                    <span> {product.priceUnit}</span>
                  </div>
                  <a
                    href="#contact"
                    className="btn btn-primary"
                    id={`btn-order-${product.id}`}
                    aria-label={`Order ${product.title}`}
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </article>
          ))}
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
