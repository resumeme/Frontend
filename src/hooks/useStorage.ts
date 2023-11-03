import { useState } from 'react';

type UseLocalStorage<T> = {
  key: string;
  initialValue: T;
  storageType?: 'local' | 'session';
};

export const useStorage = <T>({ key, initialValue, storageType = 'local' }: UseLocalStorage<T>) => {
  const storage = storageType === 'local' ? localStorage : sessionStorage;

  const [storageValue, setStorageValue] = useState<T>(() => {
    try {
      const value = storage.getItem(key);
      if (!value) {
        storage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      }
      return JSON.parse(value);
    } catch (e) {
      console.error(e);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStorageValue(value);
      storage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  };

  return { storageValue, setValue };
};
