import { UI } from 'astrowind:config';

export function getCurrentTheme(): 'dark' | 'light' {
  const defaultTheme = UI.theme || 'system';
  
  if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {
    return defaultTheme.replace(':only', '') as 'dark' | 'light';
  } else if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    return 'dark';
  }
  return 'light';
} 