const formatDate = (date: string) => {
  return date.slice(0, 10).replace(/-/g, '. ');
};

export { formatDate };
