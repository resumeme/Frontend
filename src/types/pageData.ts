export type PageData = {
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  totalPages: number;
  totalElements: number;
};
