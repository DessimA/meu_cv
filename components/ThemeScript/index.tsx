
'use client'

import { useEffect } from 'react'

const ThemeScript = () => {
  useEffect(() => {
    const applyTheme = () => {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    applyTheme();

    // Listen for changes in system theme preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', applyTheme);
    };
  }, []);

  return null;
};

export default ThemeScript;
