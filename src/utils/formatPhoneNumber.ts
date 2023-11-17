export const formatPhoneNumber = (phoneNumber: string) => {
  const formattedPhoneNumber = phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  return formattedPhoneNumber;
};
