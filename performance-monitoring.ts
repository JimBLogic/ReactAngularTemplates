// Simple performance utilities
// Basic performance tracking for components

import { useEffect } from 'react';

// Simple performance tracker
export const performance = {
  // Track how long something takes
  measure: (name: string, fn: () => void) => {
    const start = Date.now();
    fn();
    const duration = Date.now() - start;
    console.log(`[PERF] ${name}: ${duration}ms`);
    return duration;
  },

  // Track async operations
  measureAsync: async (name: string, fn: () => Promise<any>) => {
    const start = Date.now();
    const result = await fn();
    const duration = Date.now() - start;
    console.log(`[PERF] ${name}: ${duration}ms`);
    return { result, duration };
  },

  // Log page load time
  logPageLoad: () => {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const loadTime = window.performance.timing?.loadEventEnd - window.performance.timing?.navigationStart;
        console.log(`[PERF] Page load: ${loadTime}ms`);
      });
    }
  }
};

// React hook for component performance
export const usePerformance = (componentName: string) => {
  useEffect(() => {
    const start = Date.now();
    console.log(`[PERF] ${componentName} mounted`);
    
    return () => {
      const duration = Date.now() - start;
      console.log(`[PERF] ${componentName} unmounted after ${duration}ms`);
    };
  }, [componentName]);
};

// Simple memory usage check
export const checkMemory = () => {
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    console.log(`[PERF] Memory: ${Math.round(memory.usedJSHeapSize / 1024 / 1024)}MB used`);
  }
};

export default { ...performance, usePerformance, checkMemory };