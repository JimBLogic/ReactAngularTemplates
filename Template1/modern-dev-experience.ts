// Modern Development Experience utilities for NeonTech
import { useRef, useEffect, useState, useCallback } from 'react';

// Accessibility enhancements
export const accessibilityEnhancements = {
  // Focus management for better keyboard navigation
  useFocusManagement: () => {
    const focusRef = useRef<HTMLElement>(null);
    
    const focusElement = useCallback(() => {
      if (focusRef.current) {
        focusRef.current.focus();
      }
    }, []);
    
    return { focusRef, focusElement };
  },

  // Announce changes to screen readers
  useAnnouncement: () => {
    const announceRef = useRef<HTMLDivElement>(null);
    
    const announce = useCallback((message: string) => {
      if (announceRef.current) {
        announceRef.current.textContent = message;
      }
    }, []);
    
    return { announceRef, announce };
  }
};

// Performance optimizations
export const performanceOptimizations = {
  // Lazy loading with intersection observer
  useLazyLoading: (threshold: number = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, [threshold]);

    return [ref, isVisible] as const;
  },

  // Debounced state updates
  useDebounce: <T>(value: T, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  }
};