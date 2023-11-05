import { useState } from 'react';

export const useStringToArray = (): [
  string[],
  (event: React.KeyboardEvent<HTMLInputElement>) => void,
] => {
  const [array, setSkills] = useState<string[]>([]);

  const handleArrayChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { value: skill } = event.currentTarget;
    const { key } = event;

    if (key === 'Enter') {
      event.preventDefault();
    }

    if (!skill.trim() || skill === ',') {
      event.currentTarget.value = '';
    }
    if (skill.length > 2 && key === 'Enter') {
      setSkills([...array, skill]);
      event.currentTarget.value = '';
    }
  };

  return [array, handleArrayChange];
};
