import { Fields } from './fields';
import { Position } from './position';

type UserRole = 'mentee' | 'mentor' | 'pending';

type User = {
  id: number;
  imageUrl: string;
  realName: string;
  nickname: string;
  phoneNumber: string;
  role: UserRole;
  experiencedPositions?: Position[];
  interestedPositions?: Position[];
  interestedFields: Fields[];
  careerContent?: string;
  careerYear: number;
  introduce: string;
};

export type { User, UserRole };
