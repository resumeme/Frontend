import { Categories } from '../resume/categories';

export type DetailsComponentProps<T extends Categories> = {
  data: T;
} & (
  | {
      isCurrentUser: true;
      onEdit: () => void;
    }
  | {
      isCurrentUser: false;
      onEdit?: () => void;
    }
);
