import { Fields } from './fields';
import { Position } from './position';

type User = {
  id: number;
  imageUrl: string;
  realName: string;
  nickname: string;
  phoneNumber: string;
  role: 'mentee' | 'mentor';
  experiencedPositions?: Position[];
  interestedPositions?: Position[];
  interestedFields: Fields[];
  careerContent?: string;
  careerYear: number;
  introduce: string;
};

export type { User };
