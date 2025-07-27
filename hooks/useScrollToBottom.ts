// Scroll helper
import { useEffect, useRef } from 'react';

export const useScrollToBottom = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, []);

  return ref;
};
