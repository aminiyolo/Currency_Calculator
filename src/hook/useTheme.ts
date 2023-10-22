import { useState, useCallback } from 'react';

const getInitialTheme = () => {
  let theme = window.localStorage.getItem('color_mode') as
    | 'light'
    | 'dark'
    | null;

  const INVALID_THEME = theme !== 'light' && 'dark';
  if (!theme || INVALID_THEME) {
    const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
    theme = matches ? 'dark' : 'light';
  }

  return theme;
};

const useTheme = (): [typeof theme, typeof toggleTheme] => {
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    window.localStorage.setItem(
      'color_mode',
      `${theme === 'dark' ? 'light' : 'dark'}`,
    );
  }, [theme]);

  return [theme, toggleTheme];
};

export default useTheme;
