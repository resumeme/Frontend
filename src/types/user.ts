import { Position } from './position';

type User = {
  imageUrl: string;
  realName: string;
  nickname: string;
  phoneNumber: string;
  role: string;
  experiencedPositions?: Position[];
  interestedPositions: string[];
  interestedFields: string[];
  careerContent?: string;
  careerYear: number;
  introduce: string;
};

export type { User };
