import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  products: [
    { label: 'Label Cloth Jumbo Roll', href: '#products' },
    { label: 'Ribbon Labels', href: '#products' },
    { label: 'Barcode Stickers', href: '#products' },
    { label: 'Security Labels', href: '#products' },
    { label: 'Label Cutting Machine', href: '#products' },
    { label: 'Label Printing Machine', href: '#products' },
    { label: 'Ultrasonic Cutting Machine', href: '#products' },
    { label: 'Rfid Labeling Machine', href: '#products' },
    { label: 'Flexographic Inks', href: '#products' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'How It Works', href: '#process' },
    { label: 'Our Technology', href: '#about' },
    { label: 'Careers', href: '#' },
    { label: 'Press & Media', href: '#' },
  ],
  support: [
    { label: 'Get a Quote', href: '#contact' },
    { label: 'File Requirements', href: '#' },
    { label: 'Shipping Info', href: '#' },
    { label: 'Track My Order', href: '#' },
    { label: 'Returns & Refunds', href: '#' },
    { label: 'FAQ', href: '#' },
  ],
};

const socialLinks = [
  { label: 'Facebook', icon: 'f', href: '#', id: 'social-facebook' },
  { label: 'Instagram', icon: '📷', href: '#', id: 'social-instagram' },
  { label: 'LinkedIn', icon: 'in', href: '#', id: 'social-linkedin' },
  { label: 'Twitter/X', icon: '𝕏', href: '#', id: 'social-twitter' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer" role="contentinfo">

      {/* ── Footer Top ──────────────────────────────────────── */}
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">

            {/* Brand column */}
            <div>
              <Link href="#home" className="footer-brand-logo" aria-label="Start Sourcing — Home">
                <div className="logo-icon-wrapper logo-icon-wrapper--footer">
                  <Image
                    src="/ptp-logo.png"
                    alt="Start Sourcing"
                    width={52}
                    height={52}
                    className="logo-icon logo-icon--footer"
                  />
                </div>
                <span className="footer-brand-name">Start Sourcing</span>
              </Link>

              <p className="footer-description">
                Premium commercial printing for businesses of all sizes.
                We bring your brand to life with precision, quality, and speed —
                every single print.
              </p>

              {/* Certifications */}
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                {['FSC Certified', 'ISO 9001', 'G7 Master'].map((cert) => (
                  <span
                    key={cert}
                    style={{
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.25rem 0.625rem',
                      fontSize: '0.75rem',
                      color: 'rgba(255,255,255,0.5)',
                      fontWeight: 600,
                    }}
                  >
                    {cert}
                  </span>
                ))}
              </div>

              {/* Social links */}
              <div className="footer-social">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    className="footer-social-link"
                    aria-label={social.label}
                    id={social.id}
                  >
                    <span aria-hidden="true">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Products column */}
            <div>
              <h3 className="footer-heading">Products</h3>
              <ul className="footer-links">
                {footerLinks.products.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company column */}
            <div>
              <h3 className="footer-heading">Company</h3>
              <ul className="footer-links">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Contact column */}
            <div>
              <h3 className="footer-heading">Support</h3>
              <ul className="footer-links" style={{ marginBottom: '1.5rem' }}>
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>

              <h3 className="footer-heading" style={{ marginTop: '1.5rem' }}>Contact</h3>
              <div className="footer-contact-item">
                <span className="icon" aria-hidden="true">📞</span>
                <a href="tel:+923214091144" style={{ color: '#999999' }}>+923214091144</a>
              </div>
              <div className="footer-contact-item">
                <span className="icon" aria-hidden="true">✉️</span>
                <a href="mailto:starsourcing@yahoo.com" style={{ color: '#999999' }}>starsourcing@yahoo.com</a>
              </div>
              <div className="footer-contact-item" style={{ alignItems: 'flex-start' }}>
                <span className="icon" aria-hidden="true">📍</span>
                <address style={{ fontStyle: 'normal', fontSize: '0.9375rem', color: 'var(--color-dark-muted)' }}>
                  123 Print Avenue, Suite 400<br />
                  New York, NY 10001
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* ── Footer Bottom ────────────────────────────────────── */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
              <p style={{ margin: 0 }}>
              © {year} Start Sourcing. All rights reserved.
            </p>
            <nav className="footer-bottom-links" aria-label="Legal navigation">
              <a href="#" id="link-privacy-policy">Privacy Policy</a>
              <a href="#" id="link-terms">Terms of Service</a>
              <a href="#" id="link-cookies">Cookie Policy</a>
            </nav>
          </div>
        </div>
      </div>

    </footer>
  );
}
