import en from './en';
import es from './es';

export const resources = {
  en,
  es,
};

export type Language = keyof typeof resources;
