// Advanced UI System for NeonTech Lighting
import { useState, useRef, useEffect } from 'react';

// Hook for hover effects
export const useHoverEffect = (scale: number = 1.05) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };
  
  return { isHovered, hoverProps };
};

// Hook for click effects
export const useClickEffect = () => {
  const [isPressed, setIsPressed] = useState(false);
  
  const clickProps = {
    onMouseDown: () => setIsPressed(true),
    onMouseUp: () => setIsPressed(false),
    onMouseLeave: () => setIsPressed(false),
  };
  
  return { isPressed, clickProps };
};

// Animation configurations
export const animations = {
  transitions: {
    smooth: 'all 0.3s ease-in-out',
    elastic: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    quick: 'all 0.15s ease-out'
  },
  durations: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms'
  }
};

// Color system for NeonTech theme
export const colorSystem = {
  gradients: {
    holographic: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3) 0%, rgba(147, 51, 234, 0.3) 50%, rgba(236, 72, 153, 0.3) 100%)',
    neon: 'linear-gradient(90deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)',
    cyberpunk: 'linear-gradient(45deg, #0f172a 0%, #1e1b4b 50%, #581c87 100%)'
  },
  neon: {
    cyan: '#06b6d4',
    purple: '#8b5cf6',
    pink: '#ec4899',
    blue: '#3b82f6'
  }
};