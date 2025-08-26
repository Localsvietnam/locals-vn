// apps/frontend/components/PerformanceOptimizer.tsx
import { useEffect, useState } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldReduceMotion(mediaQuery.matches);

    // Check for low performance devices
    const checkPerformance = () => {
      const start = performance.now();
      let sum = 0;
      for (let i = 0; i < 1000000; i++) {
        sum += Math.random();
      }
      const end = performance.now();
      const duration = end - start;
      
      // If simple calculation takes more than 50ms, consider it low performance
      setIsLowPerformance(duration > 50);
    };

    checkPerformance();

    // Listen for changes in motion preference
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setShouldReduceMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Apply performance optimizations
  useEffect(() => {
    if (shouldReduceMotion || isLowPerformance) {
      document.documentElement.style.setProperty('--animation-duration', '0s');
      document.documentElement.style.setProperty('--gradient-animation', 'none');
    } else {
      document.documentElement.style.setProperty('--animation-duration', '1s');
      document.documentElement.style.setProperty('--gradient-animation', 'viet-gradient 20s ease infinite');
    }
  }, [shouldReduceMotion, isLowPerformance]);

  return <>{children}</>;
};

export default PerformanceOptimizer;
