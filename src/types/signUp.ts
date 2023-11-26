import { Fields } from './fields';
import { Position } from './position';
import { UserRole } from './user';

export type SignUpMentor = {
  cacheKey: string;
  requiredInfo: SignUpCommon;
  experiencedPositions: Position[];
  careerContent: string;
  careerYear: number;
  introduce?: string;
};

export type SignUpMentee = {
  cacheKey: string;
  requiredInfo: SignUpCommon;
  interestedPositions?: Position[];
  interestedFields?: Fields[];
  introduce?: string;
};

export type SignUpCommon = {
  nickname: string;
  realName: string;
  phoneNumber: string;
  role: SignUpRole;
};

/**
 * ROLE_PENDING: 멘토로 가입했지만 어드민의 승인이 아직 없는 상태
 * ROLE_MENTOR: 멘토로 가입해서 어드민의 승인까지 받은 상태
 */

export type SignUpRole = Exclude<UserRole, 'mentor'>;
