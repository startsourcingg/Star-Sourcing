'use client';

import { useEffect, useState } from 'react';

export default function ProgressBarLoader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 1. Initial page load simulation animation on mount
    let startTime: number | null = null;
    const duration = 1000; // 1 second loader animation

    const animateLoad = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const pct = Math.min((elapsed / duration) * 100, 100);

      setProgress(pct);

      if (elapsed < duration) {
        requestAnimationFrame(animateLoad);
      } else {
        setIsLoaded(true);
      }
    };

    requestAnimationFrame(animateLoad);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    // 2. Transition into Scroll Progress Tracker once loaded
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      const totalScrollable = documentHeight - windowHeight;
      if (totalScrollable <= 0) {
        setProgress(100);
        return;
      }
      
      const pct = (scrollTop / totalScrollable) * 100;
      setProgress(Math.min(100, Math.max(0, pct)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check immediately on active state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoaded]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        zIndex: 99999,
        pointerEvents: 'none',
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Scroll Progress"
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          backgroundColor: 'var(--color-accent, #c41e1e)',
          boxShadow: '0 0 10px var(--color-accent, #c41e1e), 0 0 5px var(--color-accent, #c41e1e)',
          transition: isLoaded ? 'width 0.1s ease-out' : 'width 0.05s linear',
        }}
      />
    </div>
  );
}
