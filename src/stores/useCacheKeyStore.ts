import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import CONSTANTS from '~/constants';

type CacheKeyState = {
  cacheKey: string;
  setCacheKey: (cacheKey: string) => void;
};

export const useCacheKeyStore = create<CacheKeyState>()(
  persist(
    (set) => ({
      cacheKey: '',
      setCacheKey: (cacheKey: string) => set({ cacheKey }),
    }),
    {
      name: CONSTANTS.SIGN_UP_CACHE_KEY,
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
