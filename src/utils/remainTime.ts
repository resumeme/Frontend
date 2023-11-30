export function calculateRemainingTime(endDate: string | Date) {
  const currentDateTime = new Date().getTime();
  const endDateTime = new Date(endDate).getTime();
  const timeDiff = endDateTime - currentDateTime;

  const days = Math.max(0, Math.ceil(timeDiff / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.ceil(timeDiff / (1000 * 60 * 60)));

  return {
    days,
    hours,
  };
}
