import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import constants from '~/constants';

export const useSignUpCacheKey = create(
  persist(
    (set) => ({
      cacheKey: '',
      setCacheKey: () => set((cacheKey: string) => ({ cacheKey })),
    }),
    {
      name: constants.signUpCacheKey,
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
