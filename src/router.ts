import { useEffect, useState } from 'react';

export type RouteState = { path: string };

function getPath() {
  const hash = window.location.hash.replace(/^#/, '');
  return hash || '/';
}

export function useRoute(): [string, (path: string) => void] {
  const [path, setPath] = useState(getPath());

  useEffect(() => {
    const onHashChange = () => {
      setPath(getPath());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (newPath: string) => {
    window.location.hash = newPath;
  };

  return [path, navigate];
}

export function navigateTo(path: string) {
  window.location.hash = path;
}
