import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ProductsSection from './components/ProductsSection';
import ProcessSection from './components/ProcessSection';
import CollectionsSection from './components/CollectionsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import ProgressBarLoader from './components/ProgressBarLoader';

export default function HomePage() {
  return (
    <>
      {/* Page progress loader indicator at the top */}
      <ProgressBarLoader />

      {/* Scroll reveal observer — client-only side effect */}
      <ScrollReveal />

      {/* ── Site Header ───────────────────────────────────────── */}
      <Header />

      {/* ── Main Content ──────────────────────────────────────── */}
      <main id="main-content" role="main">

        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Features / Why Us */}
        <FeaturesSection />

        {/* 3. Products Showcase */}
        <ProductsSection />

        {/* 4. How It Works (Process) */}
        <ProcessSection />

        {/* 5. Collections / Shop by Category */}
        <CollectionsSection />

        {/* 6. Testimonials */}
        <TestimonialsSection />

        {/* 7. CTA + Contact Form */}
        <CTASection />

      </main>

      {/* ── Site Footer ───────────────────────────────────────── */}
      <Footer />
    </>
  );
}
