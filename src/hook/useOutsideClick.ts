import { useEffect, RefObject, EffectCallback } from 'react';

function useOutsideClick(ref: RefObject<HTMLElement>, handler: EffectCallback) {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) {
        return;
      }

      handler();
    };

    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [handler, ref]);
}

export default useOutsideClick;
