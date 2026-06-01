'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/label-cloth-jumbo-roll', label: 'Label Cloth Jumbo Roll' },
  {
    href: '/ribbons-and-stickers',
    label: 'Ribbons And Stickers',
    dropdown: [
      { href: '/ribbons-and-stickers/ribbon-labels', label: 'Ribbon Labels' },
      { href: '/ribbons-and-stickers/security-labels', label: 'Security Labels' },
      { href: '/ribbons-and-stickers/barcode-stickers', label: 'Barcode Stickers' },
    ],
  },
  {
    href: '/label-printing-and-cutting-machines',
    label: 'Label Printing And Cutting Machines',
    dropdown: [
      { href: '/label-printing-and-cutting-machines/label-printing-machine', label: 'Label Printing Machine' },
      { href: '/label-printing-and-cutting-machines/ultrasonic-cutting-machine', label: 'Ultrasonic Cutting Machine' },
      { href: '/label-printing-and-cutting-machines/rfid-labeling-machine', label: 'RFID Labeling Machine' },
    ],
  },
  { href: '/flexo-inks', label: 'Flexo Inks' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpenIdx, setMobileOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-item { position: relative; white-space: nowrap; }
        .nav-item:hover .nav-dropdown { display: block; }
        .nav-dropdown {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 200px;
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.10);
          z-index: 999;
          padding: 0.4rem 0;
        }
        .nav-dropdown a {
          display: block;
          padding: 0.55rem 1.1rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: #111;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.15s, color 0.15s;
        }
        .nav-dropdown a:hover {
          background: #f5e4e4;
          color: #c41e1e;
        }
        .nav-caret {
          display: inline-block;
          margin-left: 4px;
          font-size: 0.6rem;
          vertical-align: middle;
          line-height: 1;
        }
      `}</style>

      {/* ── Top Bar ────────────────────────────────── */}
      <div className="top-bar" id="top-bar">
        <div className="container">
          <div className="top-bar-inner">
            <span>🖨️ Free shipping on orders over $150 — nationwide delivery</span>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="tel:+10001234567">📞 (000) 123-4567</a>
              <a href="mailto:hello@ptpsolutions.com">✉️ hello@ptpsolutions.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Header ────────────────────────────── */}
      <header className={`header${scrolled ? ' scrolled' : ''}`} id="site-header" role="banner">
        <div className="container">
          <div className="header-inner">

            {/* Logo */}
            <Link href="#home" className="logo" aria-label="PTP Solutions — Home">
              {/* <div className="logo-icon-wrapper">
                <Image
                  src="/ptp-logo.png"
                  alt="PTP Solutions logo"
                  width={300}
                  height={71}
                  className="logo-icon"
                  priority
                />
              </div> */}
              <div className="logo-text">
                <span className="brand-name">PTP Solutions</span>
                <span className="brand-tagline">Print · Precision · Perfection</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav aria-label="Main navigation" style={{ whiteSpace: 'nowrap' }}>
              <ul className="nav" style={{ flexWrap: 'nowrap' }}>
                {navLinks.map((link) => (
                  <li key={link.href} className="nav-item">
                    <a
                      href={link.href}
                      className="nav-link"
                      id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      style={{ fontWeight: 700, fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}
                    >
                      {link.label}
                      {link.dropdown && <span className="nav-caret">▼</span>}
                    </a>
                    {link.dropdown && (
                      <div className="nav-dropdown">
                        {link.dropdown.map((sub) => (
                          <a key={sub.href} href={sub.href}>{sub.label}</a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Header CTA */}
            <div className="header-cta">
              <a href="#contact" className="btn btn-primary" id="btn-get-quote-header">
                Get a Quote
              </a>

              {/* Hamburger */}
              <button
                className="hamburger"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
                id="btn-hamburger"
              >
                <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : undefined }} />
                <span style={{ opacity: menuOpen ? 0 : 1 }} />
                <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : undefined }} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            style={{
              background: '#fff',
              borderTop: '1px solid #eee',
              padding: '1rem 0 1.5rem',
            }}
          >
            <div className="container">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {navLinks.map((link, idx) => (
                  <li key={link.href}>
                    {link.dropdown ? (
                      <>
                        <button
                          onClick={() => setMobileOpenIdx(mobileOpenIdx === idx ? null : idx)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0.625rem 0',
                            fontWeight: 700,
                            fontSize: '0.8rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: '#111',
                            width: '100%',
                            textAlign: 'left',
                          }}
                        >
                          {link.label}
                          <span style={{ fontSize: '0.6rem' }}>{mobileOpenIdx === idx ? '▲' : '▼'}</span>
                        </button>
                        {mobileOpenIdx === idx && (
                          <ul style={{ listStyle: 'none', padding: '0 0 0 1rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                            {link.dropdown.map((sub) => (
                              <li key={sub.href}>
                                <a
                                  href={sub.href}
                                  onClick={() => setMenuOpen(false)}
                                  style={{ padding: '0.4rem 0', fontWeight: 600, fontSize: '0.78rem', display: 'block', color: '#333', textDecoration: 'none' }}
                                >
                                  {sub.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <a
                        href={link.href}
                        className="nav-link"
                        onClick={() => setMenuOpen(false)}
                        style={{ padding: '0.625rem 0', fontWeight: 700, fontSize: '0.8rem' }}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
                Get a Quote
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
