import { Categories } from '../resume/categories';

export type FormComponentProps<T extends Categories> = {
  defaultValues?: T;
};
