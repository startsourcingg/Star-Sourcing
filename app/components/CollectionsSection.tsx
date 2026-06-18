import Image from 'next/image';

const collections = [
  {
    id: 'business-stationery',
    eyebrow: 'Corporate',
    title: 'Label Cloth Jumbo Roll',
    count: '24 products',
    image: '/product-business-cards.png',
    size: 'large',
    href: '#products',
  },
  {
    id: 'marketing-materials',
    eyebrow: 'Marketing',
    title: 'Ribbon Labels',
    count: '18 products',
    image: '/product-brochure.png',
    size: 'tall',
    href: '#products',
  },
  {
    id: 'large-format',
    eyebrow: 'Events',
    title: 'Barcode Sticker',
    count: '12 products',
    image: '/product-banner.png',
    size: 'medium',
    href: '#products',
  },
  {
    id: 'packaging',
    eyebrow: 'Packaging',
    title: 'Custom Packaging',
    count: '16 products',
    image: '/product-business-cards.png',
    size: 'medium',
    href: '#products',
  },
  {
    id: 'promotional',
    eyebrow: 'Promo',
    title: 'Promotional Printing',
    count: '22 products',
    image: '/product-brochure.png',
    size: 'medium',
    href: '#products',
  },
];

export default function CollectionsSection() {
  return (
    <section className="collections-section" id="collections" aria-labelledby="collections-heading">
      <div className="container">

        {/* Section Header */}
        <div className="section-header js-reveal">
          <span className="eyebrow">Browse Collections</span>
          <h2 id="collections-heading">
            Shop by Category
          </h2>
          <span className="accent-line" aria-hidden="true" />
          <p style={{ marginTop: '1rem' }}>
            Explore our full range of printing services — organized by purpose
            so you can find exactly what your business needs.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="collection-grid js-reveal" style={{ '--reveal-delay': '0.1s' } as React.CSSProperties}>

          {/* Large card */}
          <article
            className="collection-card collection-card-large"
            id="collection-business-stationery"
            aria-label="Business Stationery collection"
          >
            <Image
              src="/product-business-cards.png"
              alt="Business stationery collection — business cards and letterheads"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="collection-card-overlay">
              <div className="collection-card-content">
                <p className="collection-card-eyebrow">Corporate</p>
                <h3 className="collection-card-title">Business Stationery</h3>
                <p className="collection-card-count">24 products</p>
                <a href="#products" className="collection-card-arrow" id="link-collection-stationery">
                  Shop Now
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </article>

          {/* Tall card */}
          <article
            className="collection-card collection-card-tall"
            id="collection-marketing"
            aria-label="Marketing materials collection"
          >
            <Image
              src="/product-brochure.png"
              alt="Marketing materials collection — brochures and flyers"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1024px) 50vw, 42vw"
            />
            <div className="collection-card-overlay">
              <div className="collection-card-content">
                <p className="collection-card-eyebrow">Marketing</p>
                <h3 className="collection-card-title">Marketing Materials</h3>
                <p className="collection-card-count">18 products</p>
                <a href="#products" className="collection-card-arrow" id="link-collection-marketing">
                  Shop Now
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </article>

          {/* Medium cards row */}
          {[
            { id: 'large-format', eyebrow: 'Events', title: 'Large Format', count: '12 products', img: '/product-banner.png', alt: 'Large format banners and roll-up displays', linkId: 'link-collection-large-format' },
            { id: 'packaging',    eyebrow: 'Packaging', title: 'Custom Packaging', count: '16 products', img: '/product-brochure.png', alt: 'Custom packaging and branded boxes', linkId: 'link-collection-packaging' },
            { id: 'promotional',  eyebrow: 'Promo', title: 'Promotional Items', count: '22 products', img: '/product-business-cards.png', alt: 'Promotional printing items', linkId: 'link-collection-promotional' },
          ].map((col) => (
            <article
              key={col.id}
              className="collection-card collection-card-medium"
              id={`collection-${col.id}`}
              aria-label={`${col.title} collection`}
            >
              <Image
                src={col.img}
                alt={col.alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="collection-card-overlay">
                <div className="collection-card-content">
                  <p className="collection-card-eyebrow">{col.eyebrow}</p>
                  <h3 className="collection-card-title">{col.title}</h3>
                  <p className="collection-card-count">{col.count}</p>
                  <a href="#products" className="collection-card-arrow" id={col.linkId}>
                    Shop Now
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
