// modern-dev-experience.ts
// Modern developer experience utilities for advanced forms, accessibility, and performance

export const accessibilityEnhancements = {
  announceToScreenReader: (message: string, politeness: 'polite' | 'assertive' = 'polite') => {
    if (typeof document !== 'undefined') {
      let liveRegion = document.getElementById('modern-dev-experience-live-region');
      if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.id = 'modern-dev-experience-live-region';
        liveRegion.setAttribute('aria-live', politeness);
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.style.position = 'absolute';
        liveRegion.style.width = '1px';
        liveRegion.style.height = '1px';
        liveRegion.style.overflow = 'hidden';
        liveRegion.style.clip = 'rect(1px, 1px, 1px, 1px)';
        liveRegion.style.whiteSpace = 'nowrap';
        liveRegion.style.border = '0';
        document.body.appendChild(liveRegion);
      }
      liveRegion.textContent = '';
      setTimeout(() => {
        liveRegion!.textContent = message;
      }, 100);
    }
  }
};

import { useState, useEffect } from 'react';

export const performanceOptimizations = {
  useDebounce: <T,>(value: T, delay: number): T => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
      const handler = setTimeout(() => setDebouncedValue(value), delay);
      return () => clearTimeout(handler);
    }, [value, delay]);
    return debouncedValue;
  }
};
