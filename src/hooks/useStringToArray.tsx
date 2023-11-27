import { useState } from 'react';

export const useStringToArray = (
  defaultArray: string[] = [],
): [
  string[],
  (event: React.KeyboardEvent<HTMLInputElement>) => void,
  (targetIndex: number) => void,
] => {
  const [array, setSkills] = useState(defaultArray);

  const handleArrayChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { value: skill } = event.currentTarget;
    const { key } = event;

    if (key === 'Enter') {
      event.preventDefault();
    }

    if (!skill.trim() || skill === ',') {
      event.currentTarget.value = '';
    }

    if (skill.length > 1 && key === 'Enter') {
      event.currentTarget.value = '';
      if (!array.includes(skill)) {
        setSkills([...array, skill]);
      }
    }
  };

  const handleItemDelete = (targetIndex: number) => {
    const newArray = [...array];
    newArray.splice(targetIndex, 1);
    setSkills(newArray);
  };

  return [array, handleArrayChange, handleItemDelete];
};
