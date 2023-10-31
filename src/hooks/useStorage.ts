import { useState } from 'react';

type UseLocalStorage<T> = {
  key: string;
  initialData: T;
  storageType: 'local' | 'session';
};

export const useStorage = <T>({ key, initialData, storageType = 'local' }: UseLocalStorage<T>) => {
  const storage = storageType === 'local' ? localStorage : sessionStorage;

  const [storageValue, setStorageValue] = useState<T>(() => {
    const storedData = storage.getItem(key);
    return storedData ? JSON.parse(storedData) : initialData;
  });

  const setValue = (value: T) => {
    try {
      setStorageValue((prevValue) => ({ ...prevValue, value }));
    } catch (e) {
      console.error(e);
    }
  };

  return { storageValue, setValue };
};
