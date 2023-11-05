import { useState } from 'react';

export const useStringToArray = (): [
  string[],
  (event: React.ChangeEvent<HTMLInputElement>) => void,
] => {
  const [array, setSkills] = useState<string[]>([]);

  const handleArrayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: skill } = event.target;

    if (!skill.trim() || skill === ',') {
      event.target.value = '';
    }
    if (skill.length > 2 && skill.endsWith(',')) {
      setSkills([...array, skill.slice(0, -1)]);
      event.target.value = '';
    }
  };

  return [array, handleArrayChange];
};
