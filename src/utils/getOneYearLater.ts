export const getOneYearLater = ({ includeTime = false }: { includeTime: boolean }) => {
  const today = new Date();
  today.setFullYear(today.getFullYear() + 1);

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const dateOneYearLater = `${year}-${month}-${day}`;

  if (includeTime) {
    return dateOneYearLater + ' 00:00';
  }
  return dateOneYearLater;
};
