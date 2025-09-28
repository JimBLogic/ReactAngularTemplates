// Hook for hover effect with scale
export const useHoverEffect = (scale: number = 1.05) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverProps = {
    onMouseEnter: useCallback(() => setIsHovered(true), []),
    onMouseLeave: useCallback(() => setIsHovered(false), []),
    style: {
      transform: isHovered ? `scale(${scale})` : 'scale(1)',
      transition: animations.transitions.smooth,
    },
  };
  return { isHovered, hoverProps };
};
import { useState, useCallback } from 'react';
// Animation presets
export const animations = {
  transitions: {
    smooth: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fast: 'all 0.15s ease-out',
    slow: 'all 0.5s ease-in-out',
    bounce: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
};

// Color system for gradients and themes
export const colorSystem = {
  gradients: {
    cyberpunk: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    neon: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    ocean: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    sunset: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    aurora: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    matrix: 'linear-gradient(135deg, #0f3460 0%, #0f4c75 100%)',
    holographic: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
  },
  themes: {
    light: {
      "--bg-primary": '#ffffff',
      "--bg-secondary": '#f8fafc',
      "--text-primary": '#1e293b',
      "--text-secondary": '#64748b',
      "--accent": '#3b82f6',
      "--accent-hover": '#2563eb',
      "--border": '#e2e8f0',
      "--shadow": '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    dark: {
      "--bg-primary": '#0f172a',
      "--bg-secondary": '#1e293b',
      "--text-primary": '#f1f5f9',
      "--text-secondary": '#94a3b8',
      "--accent": '#60a5fa',
      "--accent-hover": '#3b82f6',
      "--border": '#334155',
      "--shadow": '0 4px 6px -1px rgba(0, 0, 0, 0.3)'
    }
  }
};

// ...existing code...

export const useClickEffect = () => {
  const [isClicked, setIsClicked] = useState(false);
  
  const triggerClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
  };
  
  return {
    isClicked,
    clickProps: {
      onClick: triggerClick,
      style: {
        transform: isClicked ? 'scale(0.95)' : 'scale(1)',
        transition: animations.transitions.bounce
      }
    }
  };
};

export const useFocusEffect = () => {
  const [isFocused, setIsFocused] = useState(false);
  
  return {
    isFocused,
    focusProps: {
      onFocus: () => setIsFocused(true),
      onBlur: () => setIsFocused(false),
      style: {
        boxShadow: isFocused ? '0 0 0 3px rgba(59, 130, 246, 0.5)' : 'none',
        transition: animations.transitions.smooth
      }
    }
  };
};

/**
 * Advanced Particle System
 */
export class ParticleSystem {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private particles: Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    color: string;
  }> = [];
  private animationId: number | null = null;

  constructor(canvas: HTMLCanvasElement, particleCount = 50) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.initializeParticles(particleCount);
    this.animate();
  }

  private initializeParticles(count: number) {
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * (this.canvas?.width || 800),
        y: Math.random() * (this.canvas?.height || 600),
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`
      });
    }
  }

  private animate = () => {
    if (!this.ctx || !this.canvas) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach(particle => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Bounce off edges
      if (particle.x <= 0 || particle.x >= this.canvas!.width) particle.vx *= -1;
      if (particle.y <= 0 || particle.y >= this.canvas!.height) particle.vy *= -1;

      // Draw particle
      this.ctx!.globalAlpha = particle.opacity;
      this.ctx!.fillStyle = particle.color;
      this.ctx!.beginPath();
      this.ctx!.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx!.fill();
    });

    this.animationId = requestAnimationFrame(this.animate);
  };

  public destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}

/**
 * Modern Loading States
 */
export const LoadingStates = {
  skeleton: (width = '100%', height = '20px') => ({
    width,
    height,
    background: `linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)`,
    backgroundSize: '200px 100%',
    animation: 'shimmer 1.5s infinite'
  }),

  pulse: {
    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    '@keyframes pulse': {
      '0%, 100%': { opacity: 1 },
      '50%': { opacity: 0.5 }
    }
  },


  spinner: (size = '24px', color = '#3b82f6') => ({
    width: size,
    height: size,
    border: `2px solid transparent`,
    borderTop: `2px solid ${color}`,
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  }),
};

// Advanced Responsive Utilities
export const responsive = {
  breakpoints: {
    xs: '(max-width: 475px)',
    sm: '(max-width: 640px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 1024px)',
    xl: '(max-width: 1280px)',
    '2xl': '(max-width: 1536px)',
  },
  // Fluid typography
  fluidType: function(minSize: number, maxSize: number, minVw?: number, maxVw?: number) {
    minVw = minVw ?? 320;
    maxVw = maxVw ?? 1200;
    return {
      fontSize: `clamp(${minSize}px, ${minSize}px + (${maxSize} - ${minSize}) * ((100vw - ${minVw}px) / (${maxVw} - ${minVw})), ${maxSize}px)`
    };
  },
  // Container queries (when supported)
  containerQuery: function(condition: string, styles: any) {
    return {
      '@container': {
        [condition]: styles,
      },
    };
  },
};

/**
 * Export all utilities
 */
export default {
  animations,
  colorSystem,
  useHoverEffect,
  useClickEffect,
  useFocusEffect,
  ParticleSystem,
  LoadingStates,
  responsive,
};