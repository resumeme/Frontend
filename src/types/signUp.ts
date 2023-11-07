import { Fields } from './fields';
import { Position } from './position';

export type SignUpMentor = {
  cacheKey: string;
  requiredInfo: SignUpCommon<'ROLE_PENDING'>;
  experiencedPositions: Position[];
  careerContent: string;
  careerYear: number;
  introduce: string;
};

export type SignUpMentee = {
  cacheKey: 'cacheKey';
  requiredInfo: SignUpCommon<'ROLE_MENTEE'>;
  interestedPositions: Position[];
  interestedFields: Fields[];
  introduce: string;
};

export type SignUpCommon<T extends Role> = {
  nickname: string;
  realName: string;
  phoneNumber: string;
  role: T;
};

export type Role = 'ROLE_PENDING' | 'ROLE_MENTOR' | 'ROLE_MENTEE';
