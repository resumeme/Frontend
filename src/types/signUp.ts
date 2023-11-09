import { Fields } from './fields';
import { Position } from './position';

export type SignUpMentor = {
  cacheKey: string;
  requiredInfo: SignUpCommon<'ROLE_PENDING'>;
  experiencedPositions: Position[];
  careerContent: string;
  careerYear: number;
  introduce?: string;
};

export type SignUpMentee = {
  cacheKey: string;
  requiredInfo: SignUpCommon<'ROLE_MENTEE'>;
  interestedPositions?: Position[];
  interestedFields?: Fields[];
  introduce?: string;
};

export type SignUpCommon<T extends Exclude<Role, 'ROLE_MENTOR'>> = {
  nickname: string;
  realName: string;
  phoneNumber: string;
  role: T;
};

/**
 * ROLE_PENDING: 멘토로 가입했지만 어드민의 승인이 아직 없는 상태
 * ROLE_MENTOR: 멘토로 가입해서 어드민의 승인까지 받은 상태
 */
export type Role = 'ROLE_PENDING' | 'ROLE_MENTOR' | 'ROLE_MENTEE';

export type SignUpRole = Exclude<Role, 'ROLE_MENTOR'>;
