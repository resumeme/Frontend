import { Categories } from '../resume/categories';

export type DetailsComponentProps<T extends Categories> = {
  data: T;
  onEdit: () => void;
};
