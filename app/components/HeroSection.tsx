'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const IMAGES = [
  '/hero-bg.png',
  '/hero-bg-2.png',
  '/hero-bg-3.png',
  '/hero-bg-4.png',
  '/hero-bg-5.png',
];

interface AnimatedCounterProps {
  value: number;
  suffix: string;
  duration?: number;
  trigger: boolean;
}

function AnimatedCounter({ value, suffix, duration = 2000, trigger }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!trigger || !mounted) return;

    let startTime: number | null = null;
    const startValue = 0;
    const endValue = value;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Easing out quadratic
      const easedProgress = progress * (2 - progress);
      const current = Math.floor(startValue + easedProgress * (endValue - startValue));
      setCount(current);

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    window.requestAnimationFrame(animate);
  }, [trigger, value, duration, mounted]);

  if (!mounted) {
    return <div className="hero-stat-value">{value}{suffix}</div>;
  }

  return <div className="hero-stat-value">{count}{suffix}</div>;
}

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hasIntersected, setHasIntersected] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
    }, 6000); // 6 seconds auto-slide duration
    return () => clearInterval(timer);
  }, [currentImageIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.disconnect(); // Run only once
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="home" aria-label="Hero — Welcome to Start Sourcing">

      {/* Background slideshow */}
      <div className="hero-slider" aria-hidden="true">
        <div
          className="hero-slider-track"
          style={{
            transform: `translateX(-${currentImageIndex * 20}%)`,
          }}
        >
          {IMAGES.map((src, index) => (
            <div key={src} className="hero-slide">
              <Image
                src={src}
                alt=""
                fill
                style={{ objectFit: 'cover' }}
                loading={index === 0 ? 'eager' : 'lazy'}
                quality={80}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="hero-content">

          {/* Eyebrow */}
          <p className="hero-eyebrow">
            Trusted by 5,000+ Businesses Worldwide
          </p>

          {/* Headline */}
          <h1>
            Printing That <em>Speaks</em> for Your Brand
          </h1>

          {/* Description */}
          <p className="hero-description">
            Start Sourcing delivers exceptional commercial printing materials. From labelling material to printing machines —
            every print is a masterpiece.
          </p>

          {/* Action buttons */}
          <div className="hero-actions">
            <a href="#products" className="btn btn-accent btn-lg" id="btn-hero-explore">
              Explore Products
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline-white btn-lg" id="btn-hero-quote">
              Get Free Quote
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats" ref={statsRef}>
            <div>
              <AnimatedCounter value={12} suffix="+" trigger={hasIntersected} />
              <div className="hero-stat-label">Years Experience</div>
            </div>
            <div>
              <AnimatedCounter value={50} suffix="K+" trigger={hasIntersected} />
              <div className="hero-stat-label">Projects Delivered</div>
            </div>
            <div>
              <AnimatedCounter value={99} suffix="%" trigger={hasIntersected} />
              <div className="hero-stat-label">Client Satisfaction</div>
            </div>
            <div>
              <AnimatedCounter value={48} suffix="h" trigger={hasIntersected} />
              <div className="hero-stat-label">Turnaround Time</div>
            </div>
          </div>

        </div>
      </div>

      {/* Slider Pagination Dots */}
      <div className="hero-slider-dots">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            className={`hero-slider-dot${currentImageIndex === index ? ' active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to background slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
