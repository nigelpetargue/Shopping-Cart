import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, inittialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const json = localStorage.getItem(key);

    if (json !== null) return JSON.parse(json);

    if (typeof inittialValue === 'function') {
      return (inittialValue as () => T)();
    } else {
      return inittialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, setValue]);

  return [value, setValue] as [typeof value, typeof setValue];
}
