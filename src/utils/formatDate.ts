const formatDate = (date: string) => {
  return date.slice(0, 10).replace(/-/g, '. ');
};

const formatKoreanDateWithoutSeconds = (date: string) => {
  const [datePart, timePart] = date.split(' ');
  const [year, month, day] = datePart.split('-');
  const [hour, minute] = timePart.split(':');

  const formattedDate = `${year}년 ${month}월 ${day}일`;
  const period = +hour >= 12 ? '오후' : '오전';
  const formattedHour = +hour % 12 === 0 ? 12 : +hour % 12;

  const formattedTime = `${period} ${formattedHour}시 ${minute}분`;

  return `${formattedDate} ${formattedTime}`;
};

const formatKoreanDate = (date: string) => {
  const [datePart, timePart] = date.split(' ');
  const [year, month, day] = datePart.split('-');
  const [hour, minute, second] = timePart.split(':');

  const formattedDate = `${year}년 ${month}월 ${day}일`;
  const period = +hour >= 12 ? '오후' : '오전';
  const formattedHour = +hour % 12 === 0 ? 12 : +hour % 12;

  const formattedTime = `${period} ${formattedHour}시 ${minute}분 ${second}초`;

  return `${formattedDate} ${formattedTime}`;
};

export { formatDate, formatKoreanDate, formatKoreanDateWithoutSeconds };
