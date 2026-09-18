import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.querySelectorAll('.reveal').forEach((element) => {
        element.classList.add('is-visible');
      });
    }
  }, []);

  return ref;
}
