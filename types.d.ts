/// <reference types="react" />
/// <reference types="react-dom" />

declare module '*.tsx' {
  const content: React.ComponentType<any>;
  export default content;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export {};