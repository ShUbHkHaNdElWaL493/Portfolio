import { useEffect } from 'react';
import { useStore } from '@/store';
import { INPUT_MODES } from '@/constants';

/**
 * Keeps `inputMode` in sync with the device. Fine pointer + hover = desktop
 * cursor tracking; anything else gets the static idle pose (touch-safe).
 */
export function useInputMode() {
  const setInputMode = useStore((s) => s.setInputMode);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const apply = () => setInputMode(mq.matches ? INPUT_MODES.CURSOR : INPUT_MODES.STATIC);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, [setInputMode]);
}
